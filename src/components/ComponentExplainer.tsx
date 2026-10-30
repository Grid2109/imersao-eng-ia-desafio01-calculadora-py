import React, { useState } from "react";
import { BookOpen, AlertTriangle, Lightbulb, ChevronRight, CheckCircle2 } from "lucide-react";
import { BASIC_COMPONENTS_EXPLANATION, CodeComponentExplanation } from "../data/pythonSnippets";

interface ComponentExplainerProps {
  onSelectComponent: (id: string) => void;
  activeComponentId?: string;
}

export const ComponentExplainer: React.FC<ComponentExplainerProps> = ({
  onSelectComponent,
  activeComponentId = "input",
}) => {
  const [selectedId, setSelectedId] = useState<string>(activeComponentId);

  const activeComp: CodeComponentExplanation =
    BASIC_COMPONENTS_EXPLANATION.find((c) => c.id === selectedId) ||
    BASIC_COMPONENTS_EXPLANATION[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onSelectComponent(id);
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm shadow-xl flex flex-col gap-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-400" />
          <h3 className="font-semibold text-neutral-100 text-sm md:text-base">
            Explicação dos Principais Componentes
          </h3>
        </div>
        <span className="text-xs text-neutral-400">
          Selecione um conceito para entender a fundo
        </span>
      </div>

      {/* Badges / Tabs of components */}
      <div className="flex flex-wrap gap-2">
        {BASIC_COMPONENTS_EXPLANATION.map((comp) => {
          const isSelected = comp.id === selectedId;
          return (
            <button
              key={comp.id}
              onClick={() => handleSelect(comp.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border flex items-center gap-1.5 ${
                isSelected
                  ? "bg-sky-600/30 text-sky-200 border-sky-500/60 shadow-sm"
                  : "bg-neutral-800/80 text-neutral-400 border-neutral-700/60 hover:text-neutral-200 hover:bg-neutral-800"
              }`}
            >
              <span>{comp.name}</span>
              {isSelected && <ChevronRight className="w-3.5 h-3.5 text-sky-400" />}
            </button>
          );
        })}
      </div>

      {/* Selected Component Detailed Card */}
      <div className="bg-neutral-950 rounded-xl border border-neutral-800/80 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-900 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${activeComp.badgeColor}`}>
                {activeComp.tag}
              </span>
              <h4 className="font-bold text-neutral-100 text-base">{activeComp.name}</h4>
            </div>
            <p className="text-xs text-neutral-400 mt-1">{activeComp.shortDesc}</p>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            Linhas no código: {activeComp.lines.join(", ")}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="text-xs md:text-sm text-neutral-300 leading-relaxed space-y-2">
          <p>{activeComp.deepExplanation}</p>
        </div>

        {/* Code snippet example */}
        <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 font-mono text-xs text-neutral-200 overflow-x-auto">
          <pre>{activeComp.codeSnippet}</pre>
        </div>

        {/* Pitfall / Common Beginner Mistake */}
        <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-900/50 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed">
            <strong className="text-amber-300 block mb-0.5">Erro comum de quem está começando:</strong>
            {activeComp.beginnerPitfall}
          </div>
        </div>
      </div>
    </div>
  );
};
