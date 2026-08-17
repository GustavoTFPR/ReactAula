import Link from "next/link";
import AcheCallback from "@/components/lista06/AcheCallback";
import PasseFuncaoNomeada from "@/components/lista06/PasseFuncaoNomeada";

export default function Lista06() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors">
                        <span aria-hidden>←</span>Voltar
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mt-2">Lista 06</h1>
                    <p className="text-slate-500 mt-1">Callbacks</p>
                </div>

                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">01</span>
                            <span className="text-sm text-slate-400">AcheCallback</span>
                        </div>
                        <AcheCallback />
                    </section>
                </div>
                <div className="space-y-6">
                    <section className="bg-white rounded-2xl border border-purple-100 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">02</span>
                            <span className="text-sm text-slate-400">PasseFuncaoNomeada</span>
                        </div>
                        <PasseFuncaoNomeada />
                    </section>
                </div>
            </div>
        </main>
    );
}