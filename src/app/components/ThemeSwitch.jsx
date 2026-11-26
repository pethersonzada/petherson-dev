"use client";
import { useSyncExternalStore } from "react";

const key = "portfolio:theme";
const event = "portfolio:theme-change";
function preference() {
  try {
    const value = localStorage.getItem(key);
    return value === "light" || value === "dark" ? value : "system";
  } catch { return "system"; }
}
function apply() {
  const value = preference();
  document.documentElement.dataset.theme = value === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : value;
}
function subscribe(notify) {
  const media = matchMedia("(prefers-color-scheme: dark)");
  const sync = () => { apply(); notify(); };
  window.addEventListener("storage", sync);
  window.addEventListener(event, sync);
  media.addEventListener("change", sync);
  apply();
  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener(event, sync);
    media.removeEventListener("change", sync);
  };
}
export default function ThemeSwitch() {
  const current = useSyncExternalStore(subscribe, preference, () => "system");
  const names = {system:"Automático",light:"Claro",dark:"Escuro"};
  const next = {system:"light",light:"dark",dark:"system"};
  function change() {
    try { localStorage.setItem(key, next[current]); } catch { return; }
    window.dispatchEvent(new Event(event));
  }
  return <button type="button" className="theme-switch" aria-label={"Tema: "+names[current]+". Alterar tema"} onClick={change}>
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {current==="dark"?<path d="M20.5 14a9 9 0 0 1-10.5-10.5A9 9 0 1 0 20.5 14Z"/>:current==="light"?<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/></>:<><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>}
    </svg><span>{names[current]}</span>
  </button>;
}
