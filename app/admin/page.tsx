import Link from "next/link";
import { cookies } from "next/headers";
import { ArrowRight, Lock, LogOut, ShieldAlert } from "lucide-react";
import { getAllSlugs, getProposalBySlug } from "@/lib/proposals";
import { ADMIN_COOKIE_NAME, isAdminConfigured, isValidAdminSession } from "@/lib/admin-auth";
import { loginAdmin, logoutAdmin } from "./login/actions";

interface AdminPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const { error } = await searchParams;
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const isAuthenticated = isValidAdminSession(session);
  const configured = isAdminConfigured();

  if (!configured) {
    return (
      <main className="min-h-screen bg-[#F5F0FF] flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full bg-white border border-[#E4D4FF] rounded-2xl p-8 text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFE566]">
            <ShieldAlert size={20} className="text-[#3E157B]" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-2">Admin no configurado</h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Define la variable de entorno <code>ADMIN_PASSWORD</code> para habilitar
            el panel interno.
          </p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#F5F0FF] flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full bg-white border border-[#E4D4FF] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFE566] rounded-lg flex items-center justify-center">
              <Lock size={16} className="text-[#3E157B]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50">
                Acceso interno
              </p>
              <h1 className="text-slate-900 font-bold text-lg leading-none">Panel Admin</h1>
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-5">
            Ingresa la contraseña para ver el listado de propuestas.
          </p>

          {error === "invalid" && (
            <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              Contraseña inválida.
            </p>
          )}
          {error === "config" && (
            <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              El panel admin no está configurado correctamente.
            </p>
          )}

          <form action={loginAdmin} className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50">
                Contraseña
              </span>
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border border-[#E4D4FF] bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#3E157B]/50"
                placeholder="••••••••"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#3E157B] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#321165] transition-colors"
            >
              Entrar al panel
            </button>
          </form>
        </div>
      </main>
    );
  }

  const slugs = getAllSlugs();

  return (
    <main className="min-h-screen bg-[#F5F0FF] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFE566] rounded-lg flex items-center justify-center">
              <Lock size={16} className="text-[#3E157B]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50">
                Uso interno
              </p>
              <h1 className="text-slate-900 font-bold text-xl leading-none">Panel de propuestas</h1>
            </div>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E4D4FF] bg-white px-3 py-2 text-sm font-semibold text-[#3E157B] hover:border-[#3E157B]/40 transition-colors"
            >
              <LogOut size={15} />
              Cerrar sesión
            </button>
          </form>
        </div>

        <div className="space-y-3">
          {slugs.map((slug) => {
            const proposal = getProposalBySlug(slug);
            if (!proposal) return null;

            return (
              <Link
                key={slug}
                href={`/proposals/${slug}`}
                className="flex items-center justify-between bg-white border border-[#E4D4FF] rounded-xl px-5 py-4 hover:border-[#3E157B]/40 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-[#3E157B] transition-colors">
                    {proposal.client}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">/proposals/{slug}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#E4D4FF] group-hover:text-[#3E157B] group-hover:translate-x-1 transition-all"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
