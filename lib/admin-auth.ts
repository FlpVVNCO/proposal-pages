import { createHash } from "crypto";

export const ADMIN_COOKIE_NAME = "qubo_admin_session";

function buildSessionValue(password: string): string {
  return createHash("sha256")
    .update(`qubo-admin:${password}`)
    .digest("hex");
}

export function getAdminPassword(): string | null {
  const value = process.env.ADMIN_PASSWORD?.trim();
  return value ? value : null;
}

export function isAdminConfigured(): boolean {
  return getAdminPassword() !== null;
}

export function getExpectedSessionValue(): string | null {
  const password = getAdminPassword();
  return password ? buildSessionValue(password) : null;
}

export function isValidAdminSession(sessionValue?: string): boolean {
  const expected = getExpectedSessionValue();
  return Boolean(expected && sessionValue && sessionValue === expected);
}
