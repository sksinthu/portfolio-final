"use client"

import { motion } from "framer-motion"
import { Layout, Database, Code2 } from "lucide-react" // Added Lucide icons

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Bio & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Transforming Ideas into <span className="text-blue-500">Digital Reality</span>
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            I am a passionate <strong>Software Developer</strong> and <strong>BICT Undergraduate</strong> with a knack for building robust web applications. My journey in tech is driven by an insatiable curiosity and a desire to create solutions that not only work seamlessly but also provide delightful user experiences.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            With a strong foundation in the <strong>MERN stack</strong> and modern frontend frameworks like <strong>Next.js</strong>, I bridge the gap between complex backend logic and intuitive frontend design.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                                <span className="block text-3xl font-bold text-blue-500 mb-1">02+</span>
                                <span className="text-sm text-muted-foreground">Years of Coding</span>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                                <span className="block text-3xl font-bold text-purple-500 mb-1">15+</span>
                                <span className="text-sm text-muted-foreground">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Floating Focus Cards */}
                    <div className="relative">
                        <FocusCard
                            icon={Layout}
                            title="Frontend Architect"
                            description="Crafting responsive, pixel-perfect user interfaces with React and Tailwind."
                            color="blue"
                            delay={0.3}
                        />
                        <FocusCard
                            icon={Database}
                            title="Backend Logic"
                            description="Building scalable APIs and reliable database architectures with Node.js."
                            color="purple"
                            delay={0.4}
                            className="md:translate-x-12 my-6"
                        />
                        <FocusCard
                            icon={Code2}
                            title="Clean Code"
                            description="Writing maintainable, efficient, and self-documenting code for long-term growth."
                            color="green"
                            delay={0.5}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function FocusCard({ icon: Icon, title, description, color, delay, className = "" }: { icon: any, title: string, description: string, color: string, delay: number, className?: string }) {
    const colors: Record<string, string> = {
        blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
        green: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`p-6 rounded-2xl border backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all hover:-translate-y-1 hover:shadow-lg ${className} border-border`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${colors[color]}`}>
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}
