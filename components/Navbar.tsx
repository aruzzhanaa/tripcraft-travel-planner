import Link from "next/link";

export default function Navbar() {
return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-700">
    TripCraft<span className="text-orange-500">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
    <Link href="/" className="transition hover:text-blue-700">
            Главная
        </Link>
        <Link href="/trips" className="transition hover:text-blue-700">
            Мои путешествия
        </Link>
        <Link href="/trip" className="transition hover:text-blue-700">
            Маршрут
        </Link>
        </div>

        <Link
        href="/trips"
        className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
        Начать
        </Link>
    </nav>
    </header>
);
}