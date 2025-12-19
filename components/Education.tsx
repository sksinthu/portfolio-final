"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
    return (
        <section id="education" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <GraduationCap className="h-8 w-8 text-blue-600" />
                            Education
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <span className="text-sm text-blue-600 font-bold">2024 – Present</span>
                                <h3 className="text-xl font-bold text-foreground mt-1">Bachelor of ICT (BICT)</h3>
                                <p className="text-muted-foreground font-medium">Uva Wellassa University</p>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <span className="text-sm text-blue-600 font-bold">2022 – 2023</span>
                                <h3 className="text-xl font-bold text-foreground mt-1">Full Stack Web Development</h3>
                                <p className="text-muted-foreground font-medium">UKI Coding School</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    MERN Stack, Group Project: School Timetable Management System
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <Award className="h-8 w-8 text-purple-600" />
                            Certifications
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-start gap-4 hover:border-purple-500/50 transition-colors">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                                    <Award className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Data Structures and Algorithms</h3>
                                    <p className="text-muted-foreground">FreeCodeCamp</p>
                                    <span className="text-xs text-muted-foreground mt-1 block">Issued: Aug 28, 2022</span>
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex items-start gap-4 hover:border-purple-500/50 transition-colors">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                                    <Award className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground">Responsive Web Design</h3>
                                    <p className="text-muted-foreground">FreeCodeCamp</p>
                                    <span className="text-xs text-muted-foreground mt-1 block">Issued: Aug 28, 2022</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
