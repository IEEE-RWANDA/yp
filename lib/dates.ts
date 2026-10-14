const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-07-17" → { day: "17", month: "Jul", year: "2026", long: "17 Jul 2026" } */
export function formatDate(iso?: string) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1] ?? "";
  return { day: String(Number(d)), month, year: y, long: `${Number(d)} ${month} ${y}` };
}

/** Today's date as "YYYY-MM-DD" in Kigali time. */
export function todayKigali() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Kigali" }).format(new Date());
}
