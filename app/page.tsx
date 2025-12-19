import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import ExperienceModel from "@/models/Experience"; // Rename to avoid conflict with component

export const dynamic = 'force-dynamic';

const seedProjects = [
    {
        title: "Brain Wave ",
        description: "A modern frontend React application dedicated to UI design practice, featuring smooth animations and a futuristic interface.",
        tags: ["React.js", "Tailwind CSS", "Framer Motion"],
        link: "https://brain-wave-phi-three.vercel.app/",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Chat Bot",
        description: "An intelligent chatbot application integrating Gemini AI, providing responsive and context-aware interactions.",
        tags: ["JavaScript", "Gemini AI", "CSS3"],
        link: "https://kmcodexionchatbot.vercel.app/",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Immigration Agency",
        description: "A professional client project built with React.js for an immigration consultancy, featuring service listings and contact forms.",
        tags: ["React.js", "Client Project", "Responsive Design"],
        link: "https://immigrationagency.vercel.app/",
        color: "from-emerald-500 to-teal-500",
    },
];

const seedExperience = [
    {
        company: "Softronet",
        role: "QA Developer (Remote)",
        period: "2023 – 2024",
        description: "Automated web app testing, executed test cases in JavaScript, and integrated CI strategies to ensure high-quality software delivery.",
        tech: ["Cypress", "JavaScript", "CI/CD"],
    },
    {
        company: "Foysonic",
        role: "Frontend Developer (Remote)",
        period: "Feb 2023 – Aug 2023",
        description: "Built responsive UI for Warehouse Management System with React.js & Tailwind, optimized performance, and significantly improved system usability.",
        tech: ["React.js", "Tailwind CSS"],
    },
    {
        company: "Navicode",
        role: "Frontend Developer Internship",
        period: "Completed",
        description: "Gained hands-on experience in frontend development, contributing to real-world projects and enhancing coding proficiency.",
        tech: ["Frontend Development", "Team Collaboration"],
    },
];

export default async function Home() {
    let projects = seedProjects;
    let experiences = seedExperience;

    try {
        await dbConnect();

        // Fetch Projects
        const dbProjects = await Project.find({}).lean();
        if (dbProjects.length > 0) {
            projects = dbProjects.map(p => ({
                ...p,
                title: p.title || "",
                description: p.description || "",
                tags: p.tags || [],
                link: p.link || "#",
                color: p.color || "from-gray-500 to-slate-500",
                _id: p._id.toString(),
                createdAt: p.createdAt?.toISOString(),
                updatedAt: p.updatedAt?.toISOString()
            }));
        }

        // Fetch Experience
        const dbExperiences = await ExperienceModel.find({}).sort({ createdAt: -1 }).lean();
        if (dbExperiences.length > 0) {
            experiences = dbExperiences.map(e => ({
                ...e,
                company: e.company || "",
                role: e.role || "",
                period: e.period || "",
                description: e.description || "",
                tech: e.tech || [],
                _id: e._id.toString(),
                createdAt: e.createdAt?.toISOString(),
                updatedAt: e.updatedAt?.toISOString()
            }));
        }

    } catch (error) {
        console.error("Database Connection Failed - Using Fallback Data:", error);
        // We implicitly fall back to seedProjects/seedExperience initialized above
    }

    return (
        <main className="min-h-screen bg-background relative selection:bg-blue-500/30 selection:text-blue-600">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects projects={projects} />
            <Experience experiences={experiences} />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}
