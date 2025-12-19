"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

interface Experience {
    _id?: string;
    company: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
}

export function Experience({ experiences = [] }: { experiences?: Experience[] }) {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <div className="space-y-12 relative border-l-2 border-border ml-3 md:ml-6 pl-8 md:pl-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[59px] top-0 bg-background border-4 border-primary w-6 h-6 rounded-full"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-medium text-muted-foreground flex items-center gap-1 mt-1 sm:mt-0">
                                    <Calendar className="h-4 w-4" />
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-semibold text-primary mb-3">{exp.company}</h4>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 bg-background border border-border rounded-md text-xs font-medium text-muted-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
