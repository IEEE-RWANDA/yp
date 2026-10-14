"use client";
// Shows the current year, updating automatically each January (as IEEE requires).
import { useEffect, useState } from "react";

export default function CopyrightYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
