"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, PenTool } from "lucide-react"

const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Tailwind CSS", "Next.js", "Angular"],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Backend",
        icon: Database,
        skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        title: "Tools",
        icon: Code2,
        skills: ["Git", "GitHub", "VS Code", "Postman"],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Other",
        icon: PenTool, // Using PenTool as a generic 'soft skills/design' icon or Wrench
        skills: ["Responsive Web Design", "Cross-browser Compatibility", "Team Collaboration", "Problem Solving"],
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                        Technical Mastery
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive overview of the technologies and tools I leverage to build robust, scalable, and user-centric digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Frontend Column */}
                    <SkillCard
                        title="Frontend Development"
                        icon={Layout}
                        color="blue"
                        skills={[
                            { name: "React.js / Next.js", level: 95 },
                            { name: "TypeScript / JavaScript", level: 90 },
                            { name: "Tailwind CSS", level: 95 },
                            { name: "HTML5 / CSS3", level: 98 },
                            { name: "Framer Motion", level: 85 },
                            { name: "Angular", level: 75 },
                        ]}
                        delay={0}
                    />

                    {/* Backend Column */}
                    <SkillCard
                        title="Backend Architecture"
                        icon={Database}
                        color="green"
                        skills={[
                            { name: "Node.js", level: 88 },
                            { name: "Express.js", level: 90 },
                            { name: "MongoDB / Mongoose", level: 85 },
                            { name: "RESTful APIs", level: 92 },
                            { name: "Authentication (JWT)", level: 85 },
                            { name: "PHP (Basic)", level: 60 },
                        ]}
                        delay={0.2}
                    />

                    {/* Tools Column */}
                    <SkillCard
                        title="Tools & DevOps"
                        icon={Code2}
                        color="purple"
                        skills={[
                            { name: "Git / GitHub", level: 95 },
                            { name: "VS Code", level: 98 },
                            { name: "Postman", level: 90 },
                            { name: "Vercel / Netlify", level: 90 },
                        ]}
                        delay={0.4}
                    />

                    {/* Soft Skills / Other */}
                    <SkillCard
                        title="Professional Skills"
                        icon={PenTool}
                        color="orange"
                        skills={[
                            { name: "Problem Solving", level: 95 },
                            { name: "Responsive Design", level: 98 },
                            { name: "Team Collaboration", level: 90 },
                            { name: "Agile / Scrum", level: 85 },
                        ]}
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    )
}

function SkillCard({ title, icon: Icon, color, skills, delay }: { title: string, icon: any, color: string, skills: any[], delay: number }) {
    const colorClasses: Record<string, string> = {
        blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        green: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    }

    const barColors: Record<string, string> = {
        blue: "bg-blue-500",
        green: "bg-emerald-500",
        purple: "bg-purple-500",
        orange: "bg-orange-500",
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`p-8 rounded-3xl border backdrop-blur-sm bg-card/30 hover:bg-card/50 transition-colors ${colorClasses[color]} border-opacity-50`}
        >
            <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl ${colorClasses[color]} bg-opacity-20`}>
                    <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>

            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: delay + (index * 0.1), ease: "easeOut" }}
                                className={`h-full rounded-full ${barColors[color]}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
