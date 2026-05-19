"use server";

import fs from "fs";
import path from "path";
import { HeroVideoSlide } from "./hero-video-slider";

export async function getVideosFromPublic(): Promise<HeroVideoSlide[]> {
    try {
        const dir = path.join(process.cwd(), "public", "videos");
        const files = fs.readdirSync(dir);
        return files
            .filter((file) => file.endsWith(".mp4") || file.endsWith(".webm"))
            .map((file) => ({
                src: `/videos/${file}`,
                heading: "Sebuah Provinsi yang kaya akan sejarah dan keindahan alam.",
                // subheading: "Get Special offer just for you today.",
            }));
    } catch (e) {
        console.error("Error reading public/videos:", e);
        return [];
    }
}
