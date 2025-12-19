"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Github, Linkedin, Code2, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for Freelance & Opportunities
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                                Sinthujan
                            </span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
                            Software Developer <span className="text-blue-500">|</span> Engineering Student
                        </h2>

                        <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                            “Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.” <br />
                            Specializing in scalable web apps with Next.js & MERN stack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1"
                            >
                                View My Work <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                            <Link
                                href="mailto:sksinthu15@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                Contact Me <Mail className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-muted-foreground justify-center lg:justify-start">
                            <a href="https://github.com/sksinthu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
                                <Github className="h-7 w-7" />
                            </a>
                            <a href="https://linkedin.com/in/kirusnavelusinthujan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110">
                                <Linkedin className="h-7 w-7" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
                            {/* Glowing Blobs behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>

                            {/* Profile Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl glass-effect">
                                <Image
                                    src="/profile.png"
                                    alt="Kirusnavelu Sinthujan"
                                    width={500}
                                    height={500}
                                    priority
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating Tech Icons */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-10 -right-4 bg-background/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/10"
                            >
                                <Code2 className="text-blue-500 h-8 w-8" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-4 bg-background/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/10"
                            >
                                <Database className="text-purple-500 h-8 w-8" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
