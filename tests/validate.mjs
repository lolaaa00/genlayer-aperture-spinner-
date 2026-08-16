import { readFile, access, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const [svg, docsSvg, css, tsx, demo, loading, readme, submission, design] = await Promise.all([
  readFile(new URL("../src/aperture-spinner.svg", import.meta.url), "utf8"),
  readFile(new URL("../docs/aperture-spinner.svg", import.meta.url), "utf8"),
  readFile(new URL("../src/aperture-spinner.css", import.meta.url), "utf8"),
  readFile(new URL("../src/ApertureSpinner.tsx", import.meta.url), "utf8"),
  readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
  readFile(new URL("../docs/loading.html", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
  readFile(new URL("../SUBMISSION.md", import.meta.url), "utf8"),
  readFile(new URL("../DESIGN.md", import.meta.url), "utf8"),
]);
const left="183,33 20,372 179,310 122,279 183,152", right="218,33 218,151 280,281 222,310 382,373", core="200,195 166,265 200,283 235,266";
const colors=["#8B5CF6","#6366F1","#06B6D4"];
const motion=["rotate(4.8deg)","rotate(5.4deg)","rotate(-4.8deg)","rotate(-5.4deg)","scale(.92)","scale(.89)"];
const checks=[
 ["canonical viewBox",svg.includes('viewBox="0 0 400 400"')],
 ["exact GenLayer geometry",[left,right,core].every(x=>svg.includes(x))],
 ["default duration 1.34s",svg.includes("--aperture-duration, 1.34s")&&css.includes("--aperture-duration: 1.34s")],
 ["mirrored wing motion",motion.slice(0,4).every(x=>svg.includes(x))],
 ["core compression",motion.slice(4).every(x=>svg.includes(x))],
 ["infinite loop",(svg.match(/infinite/g)||[]).length>=3],
 ["requested gradient in production SVG",colors.every(x=>svg.includes(x))&&svg.includes('id="aperture-gradient"')],
 ["diagonal gradient",['x1="0%"','y1="0%"','x2="100%"','y2="100%"'].every(x=>svg.includes(x))],
 ["reduced motion",svg.includes("prefers-reduced-motion")&&css.includes("prefers-reduced-motion")],
 ["React geometry parity",[left,right,core].every(x=>tsx.includes(x))],
 ["React defaults to gradient",tsx.includes('variant="gradient"')||tsx.includes('variant="gradient"')||tsx.includes('variant="gradient"')||tsx.includes('variant="gradient"')],
 ["React supports currentColor fallback",tsx.includes('"gradient" | "currentColor"')&&tsx.includes('variant === "gradient"')],
 ["design demo gradient",colors.every(x=>demo.includes(x))],
 ["design demo light and dark surfaces",demo.includes('surface light')&&demo.includes('surface dark')],
 ["target sizes present",[16,20,24,32,48,64].every(n=>demo.includes(`${n}px`))],
 ["Portal loading shell present",["topbar","sidebar","GenLayerPortal","Builder missions","Submit a contribution"].every(x=>loading.includes(x))],
 ["page panel action states present",["routeState","panelState","actionState"].every(x=>loading.includes(x))],
 ["loading page uses requested gradient",colors.every(x=>loading.includes(x))],
 ["hosted SVG equals production SVG",docsSvg===svg],
 ["no object embedding in live pages",!loading.includes("<object")&&!demo.includes("<object")],
 ["live pages preserve geometry",[left,right,core].every(x=>loading.includes(x)&&demo.includes(x))],
 ["live pages preserve motion",motion.every(x=>loading.includes(x)&&demo.includes(x))],
 ["submission references Portal-style page panel action states",submission.includes("Portal-style")&&submission.includes("page, panel, and action")],
 ["design spec records gradient colors",colors.every(x=>design.includes(x))],
 ["README contains no em dash",!readme.includes(String.fromCharCode(0x2014))],
 ["README documents gradient and Portal simulation",colors.every(x=>readme.includes(x))&&readme.includes("Portal-style loading simulation")],
];
let failed=false;for(const [label,ok] of checks){console.log(`${ok?"PASS":"FAIL"}  ${label}`);if(!ok)failed=true}
try{await access(join(root,".git"));console.log("FAIL  package contains .git metadata");failed=true}catch{console.log("PASS  package contains no .git metadata")}
async function collect(dir){let out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(e.name===".git")continue;const p=join(dir,e.name);if(e.isDirectory())out.push(...await collect(p));else if(/\.(md|html|svg|css|tsx|mjs|json|txt)$/i.test(e.name))out.push(await readFile(p,"utf8"))}return out}
const text=(await collect(root)).join("\n").toLowerCase();const priorAccount=["omete","re123"].join("").toLowerCase();const priorConcept=["decision","origami"].join(" ");const clean=!text.includes(priorAccount)&&!text.includes(priorConcept);console.log(`${clean?"PASS":"FAIL"}  package contains no prior-account or prior-concept residue`);if(!clean)failed=true;
if(failed)process.exit(1);console.log(`\n${checks.length+2}/${checks.length+2} checks passed.`)
