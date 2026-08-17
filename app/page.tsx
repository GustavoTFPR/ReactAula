import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-3">Turma Front-end 2026 🎓</h1>
            <p className="text-slate-500 mb-10">Firjan SENAI — Exercícios de React organizados por lista.</p>
            <div className="grid gap-4 sm:grid-cols-2">
                <Link
                    href="/lista01"
                    className="bg-slate-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-slate-600 transition-colors"
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
                    className="bg-green-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-green-600 transition-colors"
                >
                    Lista 03
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Estado & Eventos</span>
                </Link>
                <Link
                    href="/lista04"
                    className="bg-red-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-red-600 transition-colors"
                >
                    Lista 04
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Formulários</span>
                </Link>
                <Link
                    href="/lista05"
                    className="bg-yellow-800 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-yellow-600 transition-colors"
                >
                    Lista 05
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Consumir a API</span>
                </Link>
                <Link
                    href="/lista06"
                    className="bg-purple-900 text-white rounded-2xl p-6 shadow-lg font-bold hover:bg-purple-600 transition-colors"
                >
                    Lista 06
                    <span className="block text-sm font-normal text-cyan-100 mt-1">Callbacks</span>
                </Link>
            </div>
        </main>
    );
}
