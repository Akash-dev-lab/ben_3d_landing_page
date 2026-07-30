const links = [
    "Training Mode",
    "Characters",
    "Aliens Store",
    "Update",
];

export default function Navbar() {
    return (
        <header className="relative z-20 flex h-18 items-center justify-between px-10">

            <div className="flex flex-col leading-none">
                <span className="text-5xl font-bold text-white">10</span>
                <span className="text-white/70">Logo</span>
            </div>

            <nav className="flex gap-12 text-sm text-green-500">
                {links.map((item) => (
                    <button
                        key={item}
                        className="transition hover:text-green-300"
                    >
                        {item}
                    </button>
                ))}
            </nav>

            <div className="w-24" />

        </header>
    );
}