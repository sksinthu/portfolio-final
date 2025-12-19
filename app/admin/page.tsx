"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2, Plus, Trash2, Edit2, LogOut, Layout, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("projects");

    // Data State
    const [projects, setProjects] = useState<any[]>([]);
    const [experiences, setExperiences] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        } else if (status === "authenticated") {
            fetchData();
        }
    }, [status, router]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [projRes, expRes] = await Promise.all([
                fetch("/api/projects"),
                fetch("/api/experience")
            ]);
            const projData = await projRes.json();
            const expData = await expRes.json();

            if (projData.success) setProjects(projData.data);
            if (expData.success) setExperiences(expData.data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (type: "project" | "experience", id: string) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        const endpoint = type === "project" ? `/api/projects/${id}` : `/api/experience/${id}`;
        const res = await fetch(endpoint, { method: "DELETE" });
        if (res.ok) {
            fetchData(); // Refresh
        } else {
            alert("Failed to delete");
        }
    };

    if (status === "loading" || isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!session) return null;

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                        <p className="text-muted-foreground">Manage your portfolio content</p>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                    >
                        <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                </header>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-border pb-1">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`px-4 py-2 flex items-center gap-2 font-medium transition-colors border-b-2 ${activeTab === "projects" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                    >
                        <Layout className="h-4 w-4" /> Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`px-4 py-2 flex items-center gap-2 font-medium transition-colors border-b-2 ${activeTab === "experience" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                    >
                        <Briefcase className="h-4 w-4" /> Experience
                    </button>
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                    <div className="flex justify-end">
                        <Link href={`/admin/${activeTab}/new`} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                            <Plus className="h-4 w-4" /> Add New {activeTab === "projects" ? "Project" : "Experience"}
                        </Link>
                    </div>

                    {activeTab === "projects" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project._id} className="bg-card border border-border rounded-xl p-6 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">{project.description}</p>
                                    <div className="flex gap-2 justify-end mt-4 pt-4 border-t border-border">
                                        <Link href={`/admin/projects/${project._id}`} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                                            <Edit2 className="h-4 w-4" />
                                        </Link>
                                        <button onClick={() => handleDelete("project", project._id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-md">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                            {projects.length === 0 && <p className="col-span-full text-center text-muted-foreground py-10">No projects found.</p>}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {experiences.map((exp) => (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={exp._id} className="bg-card border border-border rounded-xl p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold">{exp.role}</h3>
                                        <p className="text-primary text-sm">{exp.company}</p>
                                        <p className="text-muted-foreground text-xs">{exp.period}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={`/admin/experience/${exp._id}`} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                                            <Edit2 className="h-4 w-4" />
                                        </Link>
                                        <button onClick={() => handleDelete("experience", exp._id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-md">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                            {experiences.length === 0 && <p className="text-center text-muted-foreground py-10">No experience records found.</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
