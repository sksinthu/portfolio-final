"use client"

import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 3000)
    }

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                            <p className="text-muted-foreground mb-8">
                                I am currently available for freelance work and full-time opportunities.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/5 border border-white/10 p-3 rounded-full text-blue-400">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium">Email</p>
                                <a href="mailto:sksinthu15@gmail.com" className="text-foreground font-semibold hover:text-blue-600 transition-colors">
                                    sksinthu15@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/5 border border-white/10 p-3 rounded-full text-purple-400">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                                <a href="https://linkedin.com/in/kirusnavelusinthujan" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-purple-600 transition-colors">
                                    linkedin.com/in/kirusnavelusinthujan
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/5 border border-white/10 p-3 rounded-full text-white">
                                <Github className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium">GitHub</p>
                                <a href="https://github.com/sksinthu" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-gray-600 transition-colors">
                                    github.com/sksinthu
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
                            ${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90'}
                            disabled:opacity-70 disabled:cursor-not-allowed
                        `}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin h-5 w-5" />
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle2 className="h-5 w-5" /> Message Sent
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
