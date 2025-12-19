"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        link: initialData?.link || "",
        tags: initialData?.tags?.join(", ") || "",
        color: initialData?.color || "from-blue-500 to-purple-500",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            tags: formData.tags.split(",").map((t: string) => t.trim()).filter(Boolean),
        };

        const url = initialData?._id ? `/api/projects/${initialData._id}` : "/api/projects";
        const method = initialData?._id ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                alert("Failed to save project");
            }
        } catch (error) {
            console.error(error);
            alert("Error saving project");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <Link href="/admin" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold mb-8">{initialData ? "Edit Project" : "Add New Project"}</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Project Title</label>
                    <input
                        type="text"
                        required
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-input focus:ring-1 focus:ring-primary outline-none"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-input focus:ring-1 focus:ring-primary outline-none"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Live Link URL</label>
                    <input
                        type="url"
                        required
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-input focus:ring-1 focus:ring-primary outline-none"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                    <input
                        type="text"
                        placeholder="React, Next.js, Tailwind"
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-input focus:ring-1 focus:ring-primary outline-none"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Gradient Color Class</label>
                    <select
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-input focus:ring-1 focus:ring-primary outline-none"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    >
                        <option value="from-blue-500 to-purple-500">Blue to Purple</option>
                        <option value="from-emerald-500 to-teal-500">Emerald to Teal</option>
                        <option value="from-orange-500 to-red-500">Orange to Red</option>
                        <option value="from-pink-500 to-rose-500">Pink to Rose</option>
                        <option value="from-cyan-500 to-blue-500">Cyan to Blue</option>
                        <option value="from-gray-500 to-slate-500">Gray to Slate</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all flex justify-center"
                >
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Save Project"}
                </button>
            </form>
        </div>
    );
}
