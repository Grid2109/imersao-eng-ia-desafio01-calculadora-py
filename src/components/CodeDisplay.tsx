import React, { useState } from "react";
import { Copy, Check, Download, Info, Code2 } from "lucide-react";
import { BASIC_CALCULATOR_CODE, MODULAR_CALCULATOR_CODE, BASIC_COMPONENTS_EXPLANATION } from "../data/pythonSnippets";

interface CodeDisplayProps {
  mode: "basic" | "modular";
  onSelectComponent: (componentId: string) => void;
  activeComponentId?: string;
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({
  mode,
  onSelectComponent,
  activeComponentId,
}) => {
  const [copied, setCopied] = useState(false);

  const currentCode = mode === "basic" ? BASIC_CALCULATOR_CODE : MODULAR_CALCULATOR_CODE;
  const lines = currentCode.split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = mode === "basic" ? "calculadora_simples.py" : "calculadora_modular.py";
    const blob = new Blob([currentCode], { type: "text/x-python;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Find active lines if a component is selected
  const activeComponent = BASIC_COMPONENTS_EXPLANATION.find((c) => c.id === activeComponentId);
  const activeLines = activeComponent?.lines || [];

  // Minimal syntax highlighter helper for Python
  const renderHighlightedLine = (line: string) => {
    // Comments
    if (line.trim().startsWith("#")) {
      return <span className="text-emerald-500 italic">{line}</span>;
    }

    // Split for inline comments
    const commentIndex = line.indexOf("#");
    let codePart = line;
    let commentPart = "";
    if (commentIndex !== -1) {
      codePart = line.substring(0, commentIndex);
      commentPart = line.substring(commentIndex);
    }

    // Replace keywords
    const tokens = codePart.split(/(\b(?:def|return|if|elif|else|while|break|continue|try|except|float|input|print|strip|isinstance|str|True|not|in)\b|"[^"]*"|'[^']*'|[+\-*/=<>:()])/g);

    return (
      <>
        {tokens.map((token, i) => {
          if (!token) return null;
          if (["def", "return", "if", "elif", "else", "while", "break", "continue", "try", "except", "not", "in"].includes(token)) {
            return (
              <span key={i} className="text-purple-400 font-semibold">
                {token}
              </span>
            );
          }
          if (["print", "input", "float", "strip", "isinstance", "str"].includes(token)) {
            return (
              <span key={i} className="text-sky-300 font-medium">
                {token}
              </span>
            );
          }
          if (["True", "False", "None"].includes(token)) {
            return (
              <span key={i} className="text-amber-400 font-bold">
                {token}
              </span>
            );
          }
          if (token.startsWith('"') || token.startsWith("'")) {
            return (
              <span key={i} className="text-amber-300">
                {token}
              </span>
            );
          }
          if (["+", "-", "*", "/", "==", "="].includes(token)) {
            return (
              <span key={i} className="text-rose-400 font-bold">
                {token}
              </span>
            );
          }
          if (!isNaN(Number(token)) && token.trim() !== "") {
            return (
              <span key={i} className="text-orange-300">
                {token}
              </span>
            );
          }
          return <span key={i} className="text-neutral-200">{token}</span>;
        })}
        {commentPart && <span className="text-emerald-500 italic">{commentPart}</span>}
      </>
    );
  };

  return (
    <div className="flex flex-col h-full rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
      {/* Code Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800 text-xs gap-2">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-amber-400" />
          <span className="font-mono font-semibold text-neutral-200">
            {mode === "basic" ? "calculadora_simples.py" : "calculadora_modular.py"}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
            Python 3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition cursor-pointer"
            title="Copiar código para a área de transferência"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copiar</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-700 hover:bg-sky-600 text-white text-xs font-medium transition shadow cursor-pointer"
            title="Baixar arquivo .py para rodar no seu computador"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar .py</span>
          </button>
        </div>
      </div>

      {/* Code Content with Line Numbers */}
      <div className="flex-1 overflow-x-auto overflow-y-auto p-4 font-mono text-xs md:text-sm leading-relaxed">
        <div className="min-w-[500px]">
          {lines.map((line, index) => {
            const lineNum = index + 1;
            const isHighlighted = activeLines.includes(lineNum);

            return (
              <div
                key={index}
                className={`flex items-start group px-2 py-0.5 rounded transition ${
                  isHighlighted
                    ? "bg-sky-500/15 border-l-2 border-sky-400"
                    : "hover:bg-neutral-900/60"
                }`}
              >
                {/* Line number */}
                <span className="w-8 shrink-0 select-none text-right pr-4 text-neutral-600 text-xs font-normal">
                  {lineNum}
                </span>

                {/* Line content */}
                <div className="flex-1 whitespace-pre">
                  {renderHighlightedLine(line)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Helper Footer */}
      <div className="px-4 py-2.5 bg-neutral-900 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-neutral-400">
          <Info className="w-3.5 h-3.5 text-sky-400" />
          {mode === "basic"
            ? "Clique nos cartões de componentes ao lado para iluminar as linhas correspondentes no código!"
            : "Esta versão usa funções (def) e um loop infinito (while True) para modularizar."}
        </span>
        <span className="text-neutral-500 font-mono text-[11px]">{lines.length} linhas</span>
      </div>
    </div>
  );
};
