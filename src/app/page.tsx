import HeroVideoSlider from "@/components/hero-video-slider";
import Main from "@/components/main";

export default function Home() {
    return (
        <div>
            <HeroVideoSlider />
            <div className="mt-16">
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase">Our Products & Services</h1>
                    <p className="py-3">Berikut adalah Produk & Layanan yang kami sediakan untuk Anda.</p>
                </div>
                <Main />
            </div>
        </div>
    );
}
