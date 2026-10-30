import React, { useState } from "react";
import { Sparkles, Copy, Check, MessageSquare, Terminal, Award, Apple } from "lucide-react";

export const PromptEngineeringGuide: React.FC = () => {
  const [copiedInitial, setCopiedInitial] = useState(false);
  const [copiedMaster, setCopiedMaster] = useState(false);

  const initialPrompt = `Quero criar uma calculadora simples em Python que realize as quatro operações matemáticas básicas. Estou começando a aprender programação, então gere um código simples e organizado, com explicações sobre seus principais componentes. O design da calculadora deve ser como modelo do iPhone (iOS).`;

  const masterPrompt = `Atue como um Engenheiro de Software Sênior e Especialista em Ensino de Programação.

Desenvolva uma aplicação web educacional e interativa em React 19, TypeScript e Tailwind CSS voltada para quem está começando a aprender Python. O tema central é a criação de uma calculadora que realize as quatro operações matemáticas básicas (Soma, Subtração, Multiplicação e Divisão).

A aplicação deve conter:

1. CÓDIGO PYTHON EDUCACIONAL (calculadora.py):
   - Código limpo, legível e ricamente comentado para iniciantes.
   - Uso de input() com conversão segura para float().
   - Menu claro de operações (+, -, *, /).
   - Estrutura condicional completa (if, elif, else) para tomada de decisão.
   - Tratamento preventivo de divisão por zero (if num2 == 0: evitando ZeroDivisionError).
   - Formatação moderna de saída com f-strings: print(f"Resultado: {num1} {operacao} {num2} = {resultado}").
   - Botões para copiar o código e baixar o arquivo .py para rodar localmente.

2. AMBIENTE VISUAL DUPLO (LADO A LADO):
   - À esquerda: Visualizador do código Python com numeração de linhas e destaque sintático.
   - À direita: CALCULADORA INTERATIVA NO ESTILO APPLE IPHONE (iOS):
     * Chassi em preto absoluto OLED (bg-black) com cantos arredondados contínuos.
     * Teclado em grade 4x5 com botões estritamente circulares (rounded-full aspect-square).
     * Paleta oficial do iOS:
       - Linha de funções (AC, C, ⌫): Cinza claro metálico (#a5a5a5) com texto preto.
       - Teclado numérico (0 a 9, ., ±): Cinza escuro grafite (#333333) com números brancos.
       - Coluna de operações (÷, ×, −, +, =): Laranja vibrante Apple (#ff9f0a).
     * Efeito ativo do iOS: ao clicar em uma operação (+, -, *, /), o botão inverte para fundo branco com texto laranja enquanto aguarda o segundo número.
     * Visor digital com números grandes e nítidos, exibindo no topo o rastreamento das variáveis (num1: X, op, num2: Y) sem sobrescrever num1 pelo resultado ao pressionar '='.
     * Alternância fácil no topo para modo "Console CLI" (terminal clássico de texto) para quem deseja simular a linha de comando tradicional.
     * Caixa de rastreamento abaixo da calculadora mostrando em tempo real qual linha do Python acabou de ser executada.
     * Botões de testes rápidos (ex: 15+25, 50-18, 7.5*4, 100/4 e 42/0).

3. ABAS PEDAGÓGICAS COMPLEMENTARES:
   - "Explicação dos Componentes": cards interativos sobre input(), float(), if/elif/else, divisão por zero e f-strings.
   - "Simulador Passo a Passo da Memória": stepper visual mostrando linha por linha a criação de variáveis e testes booleanos.
   - "Desafios Práticos": 3 exercícios com dicas e soluções ocultáveis.
   - "Como Rodar no seu Computador": instruções passo a passo para Windows, macOS e Linux.

Mantenha a interface livre de bibliotecas pesadas desnecessárias, com código modular, tipagem estrita no TypeScript e foco na experiência de quem está aprendendo a programar.`;

  const copyText = (text: string, type: "initial" | "master") => {
    navigator.clipboard.writeText(text);
    if (type === "initial") {
      setCopiedInitial(true);
      setTimeout(() => setCopiedInitial(false), 2000);
    } else {
      setCopiedMaster(true);
      setTimeout(() => setCopiedMaster(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-100 text-sm md:text-base flex items-center gap-2">
              Engenharia de Prompt & Contexto Alura + Google
            </h3>
            <p className="text-xs text-neutral-400">
              Desafio 1 (Individual) da Imersão de Engenharia de Software com IA utilizando o Google AI Studio
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/80">
            Google AI Studio
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-950/60 text-sky-300 border border-sky-800/80">
            Alura Imersão IA
          </span>
        </div>
      </div>

      {/* Overview Context Card */}
      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs leading-relaxed space-y-2">
        <div className="flex items-center gap-2 text-sky-400 font-semibold">
          <Award className="w-4 h-4 text-sky-400" />
          <span>Sobre o Desafio 1</span>
        </div>
        <p className="text-neutral-300">
          Este projeto foi desenvolvido individualmente como parte do <strong>Desafio 1</strong> da{" "}
          <strong>Imersão de Engenharia de Software com IA (Alura & Google)</strong>. O desafio consistiu em
          utilizar o <strong>Google AI Studio</strong> para construir uma calculadora simples em Python que
          realiza as 4 operações fundamentais, combinando código educacional, simulação de linha de comando e uma
          interface moderna com o design clássico do <strong>iPhone (iOS)</strong>.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Initial Prompt */}
        <div className="flex flex-col bg-neutral-950 rounded-xl border border-neutral-800/80 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-950 text-sky-300 border border-sky-800 flex items-center justify-center text-xs font-bold font-mono">
                1
              </span>
              <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                Prompt Inicial (Ponto de Partida)
              </h4>
            </div>
            <button
              onClick={() => copyText(initialPrompt, "initial")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs transition cursor-pointer"
            >
              {copiedInitial ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-neutral-400">
            O comando inicial fornecido ao Google AI Studio contendo os requisitos de lógica, didática e o design baseado no iPhone:
          </p>

          <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-200 whitespace-pre-wrap leading-relaxed">
            {initialPrompt}
          </div>

          <div className="mt-auto pt-2 border-t border-neutral-900 flex items-center gap-2 text-[11px] text-amber-300">
            <Apple className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Contém a instrução: "O design da calculadora deve ser como modelo do iPhone (iOS)."</span>
          </div>
        </div>

        {/* Master Prompt */}
        <div className="flex flex-col bg-neutral-950 rounded-xl border border-neutral-800/80 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-950 text-amber-300 border border-amber-800 flex items-center justify-center text-xs font-bold font-mono">
                2
              </span>
              <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                Prompt Completo & Otimizado (Prompt Master)
              </h4>
            </div>
            <button
              onClick={() => copyText(masterPrompt, "master")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/30 text-xs transition cursor-pointer"
            >
              {copiedMaster ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copiar Master</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-neutral-400">
            A versão consolidada com Engenharia de Prompt avançada que produz a aplicação web interativa em um só comando:
          </p>

          <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
            {masterPrompt}
          </div>

          <div className="mt-auto pt-2 border-t border-neutral-900 flex items-center gap-2 text-[11px] text-sky-300">
            <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Estruturado com persona, restrições visuais do iOS, terminal e guias para iniciantes.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
