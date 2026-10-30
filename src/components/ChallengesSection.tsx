import React, { useState } from "react";
import { Trophy, HelpCircle, Eye, EyeOff, Sparkles, Check } from "lucide-react";
import { CHALLENGES } from "../data/pythonSnippets";

export const ChallengesSection: React.FC = () => {
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const toggleHint = (id: string) => {
    setRevealedHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="font-semibold text-neutral-100 text-sm md:text-base">
            Desafios Práticos para Praticar
          </h3>
        </div>
        <span className="text-xs text-neutral-400">
          Exercícios para fixar o conteúdo
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CHALLENGES.map((ch) => {
          const isHintOpen = !!revealedHints[ch.id];
          const isSolutionOpen = !!revealedSolutions[ch.id];

          return (
            <div
              key={ch.id}
              className="bg-neutral-950 rounded-xl border border-neutral-800/80 p-4 flex flex-col justify-between space-y-3"
            >
              <div>
                <h4 className="font-bold text-neutral-200 text-xs md:text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  {ch.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-900">
                {/* Hint Button */}
                <button
                  onClick={() => toggleHint(ch.id)}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs transition cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
                    {isHintOpen ? "Ocultar Dica" : "Ver Dica"}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {isHintOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isHintOpen && (
                  <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-900/40 text-xs text-sky-200">
                    {ch.hint}
                  </div>
                )}

                {/* Solution Button */}
                <button
                  onClick={() => toggleSolution(ch.id)}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs transition cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    {isSolutionOpen ? (
                      <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    {isSolutionOpen ? "Ocultar Solução" : "Ver Solução em Python"}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {isSolutionOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isSolutionOpen && (
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{ch.solution}</pre>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
