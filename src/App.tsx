import React, { useState } from "react";
import {
  Code2,
  Terminal as TerminalIcon,
  BookOpen,
  Cpu,
  Trophy,
  Laptop,
  Sparkles,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { CodeDisplay } from "./components/CodeDisplay";
import { InteractiveTerminal } from "./components/InteractiveTerminal";
import { ComponentExplainer } from "./components/ComponentExplainer";
import { ExecutionStepper } from "./components/ExecutionStepper";
import { ChallengesSection } from "./components/ChallengesSection";
import { HowToRunGuide } from "./components/HowToRunGuide";
import { PromptEngineeringGuide } from "./components/PromptEngineeringGuide";

export default function App() {
  const [mode, setMode] = useState<"basic" | "modular">("basic");
  const [activeTab, setActiveTab] = useState<
    "explainer" | "stepper" | "challenges" | "howtorun" | "prompts"
  >("explainer");
  const [activeComponentId, setActiveComponentId] = useState<string>("input");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-amber-500 p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center text-lg font-mono font-bold">
                <span className="text-sky-400">py</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base md:text-lg text-neutral-100 tracking-tight">
                  Calculadora Simples em Python
                </h1>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800">
                  Iniciante
                </span>
              </div>
              <p className="text-xs text-neutral-400 hidden sm:block">
                Aprenda as 4 operações básicas com código limpo, explicações e terminal interativo
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-xl border border-neutral-800">
            <button
              onClick={() => setMode("basic")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                mode === "basic"
                  ? "bg-neutral-800 text-sky-300 shadow-sm font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              1. Versão Básica (if/elif)
            </button>
            <button
              onClick={() => setMode("modular")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                mode === "modular"
                  ? "bg-neutral-800 text-amber-300 shadow-sm font-semibold"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              2. Versão com Funções (def/while)
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6 w-full">
        {/* Intro Banner for Absolute Beginners */}
        <section className="bg-gradient-to-r from-sky-950/40 via-neutral-900 to-amber-950/30 border border-neutral-800 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Primeiros Passos na Programação</span>
            </div>
            <h2 className="text-base md:text-lg font-bold text-neutral-100">
              {mode === "basic"
                ? "Calculadora Direta com as 4 Operações Básicas (+, -, *, /)"
                : "Calculadora Modular: O Próximo Nível com Funções e Menu"}
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 max-w-3xl leading-relaxed">
              {mode === "basic"
                ? "Ideal para quem está começando hoje: você vai ver como capturar números do usuário com input(), converter texto para float(), e usar if/elif/else para calcular e tratar erros como divisão por zero."
                : "Quando você dominar o básico, o passo seguinte é dividir o código em pequenas funções reutilizáveis (def) e usar um loop (while) para que o programa não feche logo após a primeira conta!"}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-neutral-400 hidden lg:inline">
              Teste na calculadora interativa à direita 👉
            </span>
          </div>
        </section>

        {/* Dual Pane: Left Code, Right Terminal */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[520px]">
          {/* Code Viewer Panel (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[460px]">
            <CodeDisplay
              mode={mode}
              onSelectComponent={(id) => {
                setActiveComponentId(id);
                setActiveTab("explainer");
              }}
              activeComponentId={activeComponentId}
            />
          </div>

          {/* Interactive Terminal Runner Panel (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col h-full min-h-[460px]">
            <InteractiveTerminal mode={mode} />
          </div>
        </section>

        {/* Learning Navigation Tabs */}
        <section className="space-y-4 pt-2">
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("explainer")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer shrink-0 ${
                activeTab === "explainer"
                  ? "bg-neutral-800 text-sky-300 border border-neutral-700 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Explicação dos Componentes</span>
            </button>

            <button
              onClick={() => setActiveTab("stepper")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer shrink-0 ${
                activeTab === "stepper"
                  ? "bg-neutral-800 text-amber-300 border border-neutral-700 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
              }`}
            >
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Simulador Passo a Passo (Memória)</span>
            </button>

            <button
              onClick={() => setActiveTab("challenges")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer shrink-0 ${
                activeTab === "challenges"
                  ? "bg-neutral-800 text-emerald-300 border border-neutral-700 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
              }`}
            >
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>Desafios Práticos</span>
            </button>

            <button
              onClick={() => setActiveTab("howtorun")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer shrink-0 ${
                activeTab === "howtorun"
                  ? "bg-neutral-800 text-purple-300 border border-neutral-700 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
              }`}
            >
              <Laptop className="w-4 h-4 text-purple-400" />
              <span>Como Rodar no seu Computador</span>
            </button>

            <button
              onClick={() => setActiveTab("prompts")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer shrink-0 ${
                activeTab === "prompts"
                  ? "bg-neutral-800 text-amber-300 border border-neutral-700 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Imersão IA & Prompts</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div>
            {activeTab === "explainer" && (
              <ComponentExplainer
                onSelectComponent={(id) => setActiveComponentId(id)}
                activeComponentId={activeComponentId}
              />
            )}
            {activeTab === "stepper" && <ExecutionStepper />}
            {activeTab === "challenges" && <ChallengesSection />}
            {activeTab === "howtorun" && <HowToRunGuide />}
            {activeTab === "prompts" && <PromptEngineeringGuide />}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950 mt-12 py-6 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-300">🐍 Python para Iniciantes</span>
            <span>•</span>
            <span>Pratique codando todos os dias!</span>
          </div>
          <div className="text-neutral-500 text-[11px]">
            Criado com carinho para ajudar no seu aprendizado de programação.
          </div>
        </div>
      </footer>
    </div>
  );
}
