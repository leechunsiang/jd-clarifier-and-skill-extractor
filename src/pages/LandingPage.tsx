import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, FileText, Users } from 'lucide-react'
import { WavyBackground } from '@/components/ui/wavy-background'

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-center">
                    <span className="font-extrabold text-2xl tracking-tight">JD Clarifier and Skills Extractor</span>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                {/* Hero Section */}
                <WavyBackground
                    className="container mx-auto px-4 text-center"
                    containerClassName="relative py-12 md:py-20 overflow-hidden h-auto min-h-[80vh]"
                    colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
                    waveWidth={50}
                    backgroundFill="white"
                    blur={10}
                    speed="fast"
                    waveOpacity={0.5}
                >
                    <div className="animate-fade-in-up space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            Now with AI-Powered Extraction
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                            Transform Rough Drafts into <span className="text-primary">Compliant, Skill-Extracted Job Descriptions</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Stop guessing what candidates need. Our AI extracts precise skills, refines requirements, and streamlines your entire hiring workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                to="/login"
                                className="h-11 px-8 rounded-md bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Start Clarifying <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a
                                href="#features"
                                className="h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors flex items-center justify-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </WavyBackground>

                {/* Features Section */}
                <section id="features" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to hire better</h2>
                            <p className="text-muted-foreground">
                                Streamline your recruitment process with our comprehensive suite of tools designed for modern hiring teams.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Sparkles className="h-10 w-10 text-primary" />}
                                title="Smart Skill Extraction"
                                description="Automatically identify and categorize hard and soft skills from any job description text using advanced AI."
                            />
                            <FeatureCard
                                icon={<FileText className="h-10 w-10 text-primary" />}
                                title="Clear Formatting"
                                description="Generate beautifully formatted PDF job descriptions that are ready to share with candidates and agencies."
                            />
                            <FeatureCard
                                icon={<Users className="h-10 w-10 text-primary" />}
                                title="Manager Approval"
                                description="Built-in workflow for managers to review, approve, or request changes to job descriptions before they go live."
                            />
                        </div>
                    </div>
                </section>


            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto px-4 py-6 flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">Copyright © 2026</span>
                    <img src="/kadoshAI.png" alt="Logo" className="h-5 w-auto" />
                    <span className="text-sm text-muted-foreground">. All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
