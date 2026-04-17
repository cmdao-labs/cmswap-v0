'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ExternalLink } from 'lucide-react'

const STORAGE_KEY = 'junoswap_rebrand_announcement_dismissed_v3'

export default function AnnouncementPopup() {
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        try {
            const dismissed = localStorage.getItem(STORAGE_KEY)
            if (!dismissed) setVisible(true)
        } catch {
            setVisible(true)
        }
    }, [])

    const dismiss = () => {
        try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* ignore */ }
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-black to-red-950 border border-[#FF3131]/30 rounded-2xl shadow-[0_0_40px_rgba(255,49,49,0.1)] overflow-hidden">

                {/* Top glow bar */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF3131] to-transparent" />

                {/* Close button */}
                <button
                    onClick={dismiss}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer z-10"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 rounded-full bg-[#FF3131]/20 blur-md scale-150" />
                            <div className="relative w-12 h-12 rounded-full border border-[#FF3131]/30 bg-black/50 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="https://junoswap.trade/favicon.ico"
                                    alt="Junoswap"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] font-mono text-[#FF3131] border border-[#FF3131]/30 bg-[#FF3131]/10 px-2 py-0.5 rounded-full tracking-widest uppercase">
                                    Announcement
                                </span>
                            </div>
                            <h2 className="text-white font-mono font-bold text-base leading-tight">
                                CMswap → Junoswap
                            </h2>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FF3131]/20 to-transparent" />

                    {/* Summary */}
                    <div className="space-y-3 text-white/70 font-mono text-sm leading-relaxed">
                        <p>
                            We&apos;re officially rebranding from <span className="text-white">CMswap</span> to{' '}
                            <span className="text-[#FF3131] font-semibold">Junoswap</span> — a new name marking a new chapter.
                        </p>
                        <ul className="space-y-1.5 text-white/60 text-xs">
                            <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Same contracts, funds stay safe</li>
                            <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>Enhanced UX/UI &amp; new DeFi features</li>
                            <li className="flex items-start gap-2"><span className="text-[#FF3131] mt-0.5">▸</span>CMswap accessible until 30 Sep 2026</li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-1">
                        <Link
                            href="/announcement"
                            onClick={dismiss}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF3131]/10 hover:bg-[#FF3131]/20 border border-[#FF3131]/40 hover:border-[#FF3131]/80 text-[#FF3131] font-mono text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_16px_rgba(255,49,49,0.2)] active:scale-95"
                        >
                            Read Full Announcement
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                            onClick={dismiss}
                            className="px-4 py-2.5 text-white/40 hover:text-white/70 font-mono text-sm border border-white/10 hover:border-white/20 rounded-lg transition-all cursor-pointer"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>

                {/* Bottom glow bar */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF3131]/20 to-transparent" />
            </div>
        </div>
    )
}
