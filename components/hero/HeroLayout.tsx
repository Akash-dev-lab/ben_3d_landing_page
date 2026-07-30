import Navbar from "./Navbar";
import HeroCanvas from "./HeroCanvas";
import HeroUI from "./HeroUI";

export default function HeroLayout() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <Navbar />

            <div className="relative mx-auto flex h-[calc(100vh-72px)] w-full max-w-[1700px] items-center justify-center px-6">

                <HeroCanvas />

                <HeroUI />

            </div>
        </section>
    );
}