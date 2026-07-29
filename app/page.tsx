import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-3">Turma Front-end 2026 🎓</h1>
            <p className="text-slate-500 mb-10">Firjan SENAI — Exercícios de React organizados por lista.</p>
            <div className="grid gap-4 sm:grid-cols-2">
                <Link
                    href="/lista01"
                    className="bg-slate-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-slate-700 transition-colors"
                >
                    Lista 01
                    <span className="block text-sm font-normal text-slate-300 mt-1">JSX e Componentes</span>
                </Link>
                <Link
                    href="/lista02"
                    className="bg-cyan-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-cyan-600 transition-colors"
                >
                    Lista 02
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Props e Listas</span>
                </Link>
                <Link
                    href="/lista03"
                    className="bg-purple-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-cyan-600 transition-colors"
                >
                    Lista 03
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Estado & Eventos</span>
                </Link>
            </div>
        </main>
    );
}
