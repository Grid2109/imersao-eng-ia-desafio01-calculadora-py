import React from "react";
import { Terminal, Laptop, HelpCircle, CheckCircle, ExternalLink } from "lucide-react";

export const HowToRunGuide: React.FC = () => {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
        <div className="flex items-center gap-2">
          <Laptop className="w-5 h-5 text-emerald-400" />
          <h3 className="font-semibold text-neutral-100 text-sm md:text-base">
            Como Rodar este Código no seu Computador
          </h3>
        </div>
        <span className="text-xs text-neutral-400">Guia para quem está começando</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Step 1 */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-900/50 text-sky-300 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h4 className="font-semibold text-neutral-200">Instalar o Python</h4>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Se ainda não tiver o Python instalado, acesse o site oficial{" "}
            <a
              href="https://www.python.org"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline inline-flex items-center gap-1"
            >
              python.org <ExternalLink className="w-3 h-3" />
            </a>
            . No Windows, lembre-se de marcar a opção{" "}
            <strong className="text-amber-300">"Add Python to PATH"</strong> durante a instalação!
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-900/50 text-sky-300 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h4 className="font-semibold text-neutral-200">Salvar o Arquivo</h4>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Clique no botão <strong className="text-white">"Baixar .py"</strong> aqui no app ou crie
            um arquivo chamado <code className="text-sky-300 font-mono">calculadora.py</code> no seu
            editor favorito (VS Code, Notepad++, IDLE ou Bloco de Notas) e cole o código.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-900/50 text-sky-300 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h4 className="font-semibold text-neutral-200">Executar no Terminal</h4>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Abra o Prompt de Comando (CMD), PowerShell ou Terminal na pasta onde salvou o arquivo e
            digite:
          </p>
          <div className="p-2 rounded bg-neutral-900 font-mono text-[11px] text-emerald-400 border border-neutral-800">
            python calculadora.py
          </div>
          <p className="text-[11px] text-neutral-500">
            No macOS ou Linux, use: <code className="text-neutral-300 font-mono">python3 calculadora.py</code>
          </p>
        </div>
      </div>

      {/* Deploy Section */}
      <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs bg-gradient-to-r from-sky-950/30 to-purple-950/20 p-3.5 rounded-xl border border-sky-900/30">
        <div>
          <h4 className="font-semibold text-neutral-200 flex items-center gap-1.5">
            <span className="text-emerald-400">🚀</span> Quer colocar essa calculadora web no ar (Deploy Grátis)?
          </h4>
          <p className="text-neutral-400 text-[11px] mt-0.5">
            Basta subir o projeto no GitHub e importar na <strong>Vercel</strong> ou <strong>Netlify</strong>. O comando de build é <code className="text-sky-300 font-mono">npm run build</code> e a pasta de saída é <code className="text-amber-300 font-mono">dist</code>.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-[11px] hover:bg-neutral-200 transition inline-flex items-center gap-1"
          >
            Vercel <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 text-[11px] hover:bg-neutral-700 transition inline-flex items-center gap-1 border border-neutral-700"
          >
            Netlify <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
