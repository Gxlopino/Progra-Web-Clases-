
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const OUTPUT = path.join(ROOT, "merged_front.txt");

// Extensiones que se incluirán
const EXTENSIONS = [
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".scss",
    ".sass",
    ".less",
    ".html",
    ".json",
    ".svg",
    ".md"
];

// Carpetas que se excluirán
const EXCLUDED_DIRS = [
    "node_modules",
    ".git",
    "dist",
    "build",
    ".next",
    ".vite",
    "coverage"
];

let result = "";

// ==========================================
// GENERAR ÁRBOL DE CARPETAS
// ==========================================

function generateTree(folder, prefix = "") {
    const entries = fs.readdirSync(folder, {
        withFileTypes: true
    })
    .filter(entry => {
        return !(
            entry.isDirectory() &&
            EXCLUDED_DIRS.includes(entry.name)
        );
    })
    .sort((a, b) => {
        if (a.isDirectory() !== b.isDirectory()) {
            return a.isDirectory() ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
    });

    entries.forEach((entry, index) => {
        const isLast = index === entries.length - 1;

        const connector = isLast ? "└── " : "├── ";

        result += `${prefix}${connector}${entry.name}\n`;

        if (entry.isDirectory()) {
            generateTree(
                path.join(folder, entry.name),
                prefix + (isLast ? "    " : "│   ")
            );
        }
    });
}

// ==========================================
// RECOPILAR CÓDIGO
// ==========================================

function collectFiles(folder) {
    const entries = fs.readdirSync(folder, {
        withFileTypes: true
    }).sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {
        const entryPath = path.join(folder, entry.name);

        if (entry.isDirectory()) {
            if (EXCLUDED_DIRS.includes(entry.name)) {
                continue;
            }

            collectFiles(entryPath);

        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();

            if (!EXTENSIONS.includes(ext)) {
                continue;
            }

            const content = fs.readFileSync(entryPath, "utf8");

            const relativePath = path.relative(ROOT, entryPath);

            result += `
==================================================
ARCHIVO: ${relativePath}
==================================================

${content}

`;
        }
    }
}

// ==========================================
// EJECUCIÓN PRINCIPAL
// ==========================================

console.log("Iniciando merge de React...");

if (!fs.existsSync(SRC)) {
    console.error(`No se encontró la carpeta: ${SRC}`);
    process.exit(1);
}

// 1. Árbol completo de src
result += `
==================================================
ESTRUCTURA COMPLETA DEL PROYECTO SRC
==================================================

src/
`;

generateTree(SRC);

// 2. Código completo de src
result += `

==================================================
CODIGO COMPLETO DEL PROYECTO SRC
==================================================
`;

collectFiles(SRC);

// 3. Guardar archivo
fs.writeFileSync(OUTPUT, result, "utf8");

console.log("==========================================");
console.log("MERGE COMPLETADO CORRECTAMENTE");
console.log("==========================================");
console.log(`Carpeta analizada: ${SRC}`);
console.log(`Archivo generado: ${OUTPUT}`);
console.log(`Tamaño: ${(Buffer.byteLength(result) / 1024).toFixed(2)} KB`);
console.log("==========================================");
