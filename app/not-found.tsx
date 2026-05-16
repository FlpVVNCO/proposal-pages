import Link from "next/link";
import { ArrowLeft, FileX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F0FF] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-[#E4D4FF] rounded-2xl mb-6">
          <FileX size={28} className="text-[#3E157B]/40" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Propuesta no encontrada
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Esta propuesta no existe o el enlace no es válido. Verificá el slug e
          intentá nuevamente.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#3E157B] hover:bg-[#2D0F5C] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          <ArrowLeft size={15} />
          Ver todas las propuestas
        </Link>
      </div>
    </main>
  );
}
