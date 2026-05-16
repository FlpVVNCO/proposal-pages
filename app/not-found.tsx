import { FileX } from "lucide-react";

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
          Esta propuesta no existe o el enlace no es válido. Verifica el link
          recibido e intenta nuevamente.
        </p>
        <p className="text-[#3E157B]/40 text-xs">
          Si el problema continúa, solicita a Qubo que revise el enlace.
        </p>
        <p className="text-[#3E157B]/30 text-xs mt-2">
          Equipo interno: accede al panel en <code>/admin</code>.
        </p>
      </div>
    </main>
  );
}
