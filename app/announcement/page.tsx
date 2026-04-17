'use client'
import React from 'react'
import Image from 'next/image'
import { ChevronDown, Globe, MessageCircle, ExternalLink } from 'lucide-react'

const sections = [
    {
        id: 'why',
        title: 'Why the Rebrand?',
        content: (
            <div className="space-y-4">
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                    This transformation reflects our renewed vision and long-term direction.
                </p>
                <ul className="space-y-2 text-white/70 font-mono text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Expanding our ecosystem to support broader DeFi use cases</li>
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Strengthening our positioning as a scalable, globally-ready platform</li>
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Building a brand that better represents innovation, accessibility, and growth</li>
                </ul>
                <p className="text-[#FF3131] font-mono text-sm font-semibold">
                    Junoswap is not just a new name — it&apos;s a step forward.
                </p>
            </div>
        ),
    },
    {
        id: 'same',
        title: 'What Remains the Same',
        content: (
            <div className="space-y-4">
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                    We want to reassure our community that the foundation you trust stays unchanged:
                </p>
                <ul className="space-y-2 text-white/70 font-mono text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Smart contracts remain the same</li>
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>All user funds remain safe and secure</li>
                </ul>
                <p className="text-white/50 font-mono text-sm italic">No action is required from users.</p>
            </div>
        ),
    },
    {
        id: 'better',
        title: "What's Getting Better",
        content: (
            <div className="space-y-4">
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                    With Junoswap, we are introducing improvements to elevate your experience:
                </p>
                <ul className="space-y-2 text-white/70 font-mono text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Enhanced UX/UI for smoother and more intuitive interaction</li>
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>New features to unlock more DeFi opportunities</li>
                    <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Ecosystem expansion with future integrations and partnerships</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'socials',
        title: 'New Platform & Socials',
        content: (
            <div className="space-y-4">
                <p className="text-white/70 font-mono text-sm">Our new home:</p>
                <div className="space-y-3">
                    <a
                        href="https://junoswap.trade/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                    >
                        <Globe className="w-4 h-4 text-[#FF3131]" />
                        <span className="text-white/70 font-mono text-sm group-hover:text-[#FF3131] transition-colors">
                            Website: junoswap.trade
                        </span>
                        <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-[#FF3131] transition-colors" />
                    </a>
                    <a
                        href="https://x.com/junoswaptrade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                    >
                        <svg className="w-4 h-4 text-[#FF3131]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        <span className="text-white/70 font-mono text-sm group-hover:text-[#FF3131] transition-colors">
                            X (Twitter): @junoswaptrade
                        </span>
                        <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-[#FF3131] transition-colors" />
                    </a>
                    <a
                        href="https://discord.gg/GnvYMm2yX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                    >
                        <MessageCircle className="w-4 h-4 text-[#FF3131]" />
                        <span className="text-white/70 font-mono text-sm group-hover:text-[#FF3131] transition-colors">
                            Discord: discord.gg/GnvYMm2yX
                        </span>
                        <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-[#FF3131] transition-colors" />
                    </a>
                </div>
            </div>
        ),
    },
    {
        id: 'timeline',
        title: 'Transition Timeline',
        content: <TimelineContent />,
    },
]

function TimelineContent() {
    const endDate = new Date('2026-09-30T23:59:59')
    const isPast = new Date() >= endDate
    return (
        <div className="space-y-4">
            <div className="relative pl-4 space-y-6">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-[#FF3131]/20" />
                <div className="relative flex items-start gap-4">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#FF3131] shadow-[0_0_8px_#FF3131]" />
                    <div className="pl-4">
                        <p className="text-[#FF3131] font-mono text-xs font-semibold tracking-wider">15 APRIL 2026</p>
                        <p className="text-white/80 font-mono text-sm mt-1">Official launch of Junoswap website</p>
                    </div>
                </div>
                <div className="relative flex items-start gap-4">
                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full transition-all ${isPast ? 'bg-[#FF3131] shadow-[0_0_8px_#FF3131]' : 'bg-white/30 border border-white/20'}`} />
                    <div className="pl-4">
                        <p className={`font-mono text-xs font-semibold tracking-wider transition-colors ${isPast ? 'text-[#FF3131]' : 'text-white/50'}`}>
                            UNTIL 30 SEPTEMBER 2026
                        </p>
                        <p className={`font-mono text-sm mt-1 transition-colors ${isPast ? 'text-white/80' : 'text-white/70'}`}>
                            CMswap website will remain accessible during transition
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-white/50 font-mono text-sm italic pt-2">
                We encourage all users to start exploring Junoswap as we gradually move forward together.
            </p>
        </div>
    )
}

function AccordionItem({ title, content }: { title: string; content: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="border border-[#FF3131]/20 rounded-lg overflow-hidden bg-black/30 hover:border-[#FF3131]/40 transition-colors">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center justify-between px-6 py-4 text-left group cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <span className="text-white font-mono font-semibold text-base tracking-wide">{title}</span>
                </div>
                <ChevronDown
                    className={`w-4 h-4 text-[#FF3131] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 pt-1 border-t border-[#FF3131]/10">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default function AnnouncementPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-red-950 relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,49,49,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,49,49,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Ambient glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF3131]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

            <main className="relative z-10 mt-[80px] pb-20">
                <div className="container mx-auto px-4 max-w-2xl py-12">

                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-[#FF3131]/20 blur-xl scale-150" />
                            <div className="relative w-20 h-20 rounded-full border border-[#FF3131]/30 bg-black/50 flex items-center justify-center p-1 overflow-hidden">
                                <Image
                                    src="https://junoswap.trade/favicon.ico"
                                    alt="Junoswap Logo"
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="font-mono text-xs text-[#FF3131] border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-1 rounded-full tracking-widest uppercase">
                            Official Announcement
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="text-[1.3125rem] md:text-[1.575rem] lg:text-[2.1rem] font-bold font-mono text-white leading-tight tracking-tight">
                            CMswap Rebranding Announcement
                        </h2>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-[#FF3131] leading-tight">
                            <a
                                href="https://junoswap.trade/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 hover:text-[#ff5555] transition-colors"
                            >
                                Welcome to Junoswap
                                <ExternalLink className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </a>
                        </h1>
                        <p className="text-white/60 font-mono text-sm max-w-lg mx-auto leading-relaxed pt-2">
                            We&apos;re excited to officially announce that CMswap is rebranding to Junoswap — marking the beginning of a new chapter in our journey.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-[#FF3131]/50" />
                        <span className="text-[#FF3131]/50 font-mono text-xs">///</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FF3131]/30 to-[#FF3131]/50" />
                    </div>

                    {/* Accordion Sections */}
                    <div className="space-y-3 mb-12">
                        {sections.map(s => (
                            <AccordionItem key={s.id} title={s.title} content={s.content} />
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-10">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-[#FF3131]/50" />
                        <span className="text-[#FF3131]/50 font-mono text-xs">///</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FF3131]/30 to-[#FF3131]/50" />
                    </div>

                    {/* CTA Footer */}
                    <div className="bg-black/40 border border-[#FF3131]/20 rounded-xl p-8 text-center space-y-5 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,49,49,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold font-mono text-white">
                                Join Us in This New Chapter
                            </h3>
                            <p className="text-white/60 font-mono text-sm leading-relaxed max-w-md mx-auto">
                                This rebrand is just the beginning. We&apos;re building something bigger — and we want you to be part of it.
                            </p>
                            <p className="text-white/60 font-mono text-sm leading-relaxed max-w-md mx-auto">
                                Explore Junoswap, try out the new experience, and share your feedback with us.
                            </p>
                            <p className="text-[#FF3131] font-mono text-sm font-semibold">
                                Let&apos;s shape the future of DeFi together.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="https://junoswap.trade/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF3131]/10 hover:bg-[#FF3131]/20 border border-[#FF3131]/40 hover:border-[#FF3131]/80 text-[#FF3131] font-mono text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,49,49,0.2)] active:scale-95"
                                >
                                    <Globe className="w-4 h-4" />
                                    Explore Junoswap
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
