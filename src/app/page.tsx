import HeroVideoSlider from "@/components/hero-video-slider";
import Main from "@/components/main";

export default function Home() {
    return (
        <div>
            <HeroVideoSlider
                videos={[
                    {
                        src: "/videos/hero-1.mp4",
                        poster: "/hero.jpg",
                        heading: "Book your luxury room",
                        subheading: "Get Special offer just for you today.",
                    },
                    {
                        src: "/videos/hero-2.mp4",
                        poster: "/hero.jpg",
                        heading: "Make your stay unforgettable",
                        subheading: "Premium rooms, best facilities, and great service.",
                    },
                ]}
            />
            <div className="mt-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
                    <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <Main />
            </div>
        </div>
    );
}
