import { Lock } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F0FF] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 bg-[#FFE566] rounded-lg flex items-center justify-center">
            <Lock size={15} className="text-[#3E157B]" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50">
              Acceso privado
            </p>
            <h1 className="text-slate-900 font-bold text-lg leading-none">
              Propuestas Qubo
            </h1>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-4">
          Ingresa usando el enlace privado de tu propuesta.
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Este espacio no muestra un listado público de propuestas. Si recibiste
          un enlace directo de Qubo, úsalo para acceder a la propuesta preparada
          para tu proyecto.
        </p>

        <p className="text-[#3E157B]/30 text-xs mt-10 text-center">
          Si el enlace no funciona, solicita a Qubo que lo revise.
        </p>
      </div>
    </main>
  );
}
