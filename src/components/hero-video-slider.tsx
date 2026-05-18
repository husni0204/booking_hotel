"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type HeroVideoSlide = {
    src: string;
    poster?: string;
    heading?: string;
    subheading?: string;
};

type Props = {
    videos?: HeroVideoSlide[];
    intervalMs?: number;
    fallbackImageSrc?: string;
};

export default function HeroVideoSlider({
    videos,
    intervalMs = 7000,
    fallbackImageSrc = "/hero.jpg",
}: Props) {
    const slides = useMemo(() => videos?.filter((v) => v?.src) ?? [], [videos]);
    const [activeIdx, setActiveIdx] = useState(0);
    const hasSlides = slides.length > 0;

    useEffect(() => {
        if (!hasSlides) return;
        const id = window.setInterval(() => {
            setActiveIdx((i) => (i + 1) % slides.length);
        }, intervalMs);
        return () => window.clearInterval(id);
    }, [hasSlides, intervalMs, slides.length]);

    useEffect(() => {
        if (!hasSlides) return;
        if (activeIdx > slides.length - 1) setActiveIdx(0);
    }, [activeIdx, hasSlides, slides.length]);

    const goPrev = () => {
        if (!hasSlides) return;
        setActiveIdx((i) => (i - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        if (!hasSlides) return;
        setActiveIdx((i) => (i + 1) % slides.length);
    };

    return (
        <section className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                {hasSlides ? (
                    <div className="absolute inset-0">
                        {slides.map((s, idx) => (
                            <div
                                key={`${s.src}-${idx}`}
                                className={[
                                    "absolute inset-0 transition-opacity duration-700",
                                    idx === activeIdx ? "opacity-100" : "opacity-0",
                                ].join(" ")}
                                aria-hidden={idx === activeIdx ? "false" : "true"}
                            >
                                <video
                                    className="h-full w-full object-cover object-center"
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    preload="metadata"
                                    poster={s.poster}
                                >
                                    <source src={s.src} />
                                </video>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Image
                        src={fallbackImageSrc}
                        alt="hero background"
                        fill
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                )}

                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
            </div>

            <div className="relative flex flex-col justify-center items-center h-full text-center px-5">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-3 capitalize">
                    {slides[activeIdx]?.heading ?? "Book your luxury room"}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                    {slides[activeIdx]?.subheading ?? "Get Special offer just for you today."}
                </p>
                <div className="flex gap-5">
                    <Link
                        href={"/room"}
                        className="bg-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg rounded-sm"
                    >
                        Book Now
                    </Link>
                    <Link
                        href={"/contact"}
                        className="bg-transparent border border-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg rounded-sm"
                    >
                        Contact Us
                    </Link>
                </div>

                {hasSlides && (
                    <div className="absolute left-0 right-0 bottom-8 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={goPrev}
                                className="rounded-sm border border-white/25 bg-black/25 px-4 py-2 text-sm hover:bg-black/40"
                                aria-label="Previous video"
                            >
                                Prev
                            </button>
                            <div className="flex gap-2" role="tablist" aria-label="Hero videos">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setActiveIdx(idx)}
                                        className={[
                                            "h-2.5 w-2.5 rounded-full transition",
                                            idx === activeIdx ? "bg-orange-400" : "bg-white/40 hover:bg-white/60",
                                        ].join(" ")}
                                        aria-label={`Go to video ${idx + 1}`}
                                        aria-current={idx === activeIdx ? "true" : "false"}
                                    />
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={goNext}
                                className="rounded-sm border border-white/25 bg-black/25 px-4 py-2 text-sm hover:bg-black/40"
                                aria-label="Next video"
                            >
                                Next
                            </button>
                        </div>
                        <p className="text-xs text-white/70">
                            Auto slide every {Math.round(intervalMs / 1000)}s
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

