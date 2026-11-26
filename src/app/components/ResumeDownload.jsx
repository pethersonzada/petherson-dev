import { existsSync,readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
const file="Miguel-Petherson-Curriculo.pdf";
const approved="4f32c5e5520b0e8dc17b19e50132cff4f5c8364db77798a664dbad50903ea6f9";
export default function ResumeDownload(){
  const path=join(process.cwd(),"public",file);
  if(!existsSync(path))return null;
  if(createHash("sha256").update(readFileSync(path)).digest("hex")!==approved)return null;
  return <a className="button" href={"/"+file} download data-evento="resume_download">Baixar currículo PDF ↓</a>;
}
