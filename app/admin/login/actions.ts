"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE_NAME,
  getExpectedSessionValue,
  isAdminConfigured,
} from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const submittedPassword = String(formData.get("password") ?? "");
  const expectedSessionValue = getExpectedSessionValue();

  if (!isAdminConfigured() || !expectedSessionValue) {
    redirect("/admin?error=config");
  }

  if (submittedPassword !== process.env.ADMIN_PASSWORD) {
    redirect("/admin?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, expectedSessionValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  redirect("/admin");
}
