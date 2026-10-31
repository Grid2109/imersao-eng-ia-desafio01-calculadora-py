import React, { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, Cpu, Check, Layers, AlertCircle } from "lucide-react";

interface Step {
  stepNumber: number;
  codeLine: string;
  lineNumber: number;
  explanation: string;
  variables: Record<string, { val: string; type: string }>;
  evaluation?: { condition: string; result: boolean };
}

const STEPPER_DATA: Step[] = [
  {
    stepNumber: 1,
    lineNumber: 12,
    codeLine: 'num1 = float(input("Digite o primeiro número: "))',
    explanation:
      "O Python exibe a mensagem, aguarda o usuário digitar '12.5' e a função float() converte o texto para o número decimal 12.5.",
    variables: {
      num1: { val: "12.5", type: "float" },
    },
  },
  {
    stepNumber: 2,
    lineNumber: 20,
    codeLine: 'operacao = input("Escolha a operação (+, -, *, /): ").strip()',
    explanation:
      "O usuário escolhe e digita a operação de multiplicação '*'. O Python armazena como texto (string).",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
    },
  },
  {
    stepNumber: 3,
    lineNumber: 21,
    codeLine: 'num2 = float(input("Digite o segundo número: "))',
    explanation:
      "O usuário digita '4'. A função float() transforma em 4.0 e grava na variável num2.",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
    },
  },
  {
    stepNumber: 4,
    lineNumber: 24,
    codeLine: 'if operacao == "+":',
    explanation:
      "O Python verifica a 1ª condição: '*' é igual a '+'? O resultado é Falso (False), então o Python pula o bloco da soma.",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
    },
    evaluation: { condition: '"*" == "+"', result: false },
  },
  {
    stepNumber: 5,
    lineNumber: 28,
    codeLine: 'elif operacao == "-":',
    explanation:
      "O Python avalia a 2ª condição: '*' é igual a '-'? Também é Falso (False), então pula a subtração.",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
    },
    evaluation: { condition: '"*" == "-"', result: false },
  },
  {
    stepNumber: 6,
    lineNumber: 32,
    codeLine: 'elif operacao == "*":',
    explanation:
      "O Python avalia a 3ª condição: '*' é igual a '*'? Verdadeiro (True)! O interpretador entra dentro deste bloco.",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
    },
    evaluation: { condition: '"*" == "*"', result: true },
  },
  {
    stepNumber: 7,
    lineNumber: 33,
    codeLine: "resultado = num1 * num2",
    explanation:
      "O Python calcula 12.5 * 4.0, resultando em 50.0, e armazena na nova variável 'resultado'.",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
      resultado: { val: "50.0", type: "float" },
    },
  },
  {
    stepNumber: 8,
    lineNumber: 34,
    codeLine: 'print(f"\\nResultado: {num1} * {num2} = {resultado}")',
    explanation:
      "A f-string substitui cada chave pelo seu valor atual da memória e imprime na tela: 'Resultado: 12.5 * 4.0 = 50.0'. O restante do elif/else é ignorado!",
    variables: {
      num1: { val: "12.5", type: "float" },
      operacao: { val: '"*"', type: "str" },
      num2: { val: "4.0", type: "float" },
      resultado: { val: "50.0", type: "float" },
    },
  },
];

export const ExecutionStepper: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const step = STEPPER_DATA[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < STEPPER_DATA.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-neutral-100 text-sm md:text-base">
              Simulador Passo a Passo da Execução do Python
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-0.5">
            Entenda como o interpretador Python lê linha por linha e cria as variáveis na memória.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
            Passo {step.stepNumber} de {STEPPER_DATA.length}
          </span>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition cursor-pointer"
            title="Reiniciar Simulação"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">
        {/* Left: Code execution line & explanation */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Linha em Execução</span>
              <span className="font-mono text-sky-400">Linha {step.lineNumber}</span>
            </div>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 font-mono text-xs md:text-sm text-sky-300 overflow-x-auto shadow-inner">
              <code>{step.codeLine}</code>
            </div>
          </div>

          {step.evaluation && (
            <div
              className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                step.evaluation.result
                  ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-300"
                  : "bg-neutral-950 border-neutral-800 text-neutral-400"
              }`}
            >
              <span className="font-mono">
                Teste condicional: <strong className="text-white">{step.evaluation.condition}</strong>
              </span>
              <span
                className={`font-bold px-2 py-0.5 rounded text-xs ${
                  step.evaluation.result
                    ? "bg-emerald-800/60 text-emerald-200"
                    : "bg-rose-950/60 text-rose-300 border border-rose-900/50"
                }`}
              >
                {step.evaluation.result ? "True (Verdadeiro)" : "False (Falso)"}
              </span>
            </div>
          )}

          <div className="p-3.5 rounded-lg bg-neutral-800/40 border border-neutral-700/50">
            <h4 className="text-xs font-semibold text-neutral-200 mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-sky-400" /> O que está acontecendo aqui:
            </h4>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              {step.explanation}
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium text-neutral-200 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Passo Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={currentStepIndex === STEPPER_DATA.length - 1}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium text-white transition shadow cursor-pointer"
            >
              <span>Próximo Passo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Python Variables in Memory */}
        <div className="md:col-span-5 bg-neutral-950 rounded-xl border border-neutral-800 p-4 flex flex-col justify-between shadow-inner">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Memória do Python (Variáveis)</span>
            </div>

            <div className="space-y-2.5">
              {Object.entries(step.variables).map(([name, data]) => (
                <div
                  key={name}
                  className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-purple-300 font-semibold">{name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono">
                      {data.type}
                    </span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold text-sm bg-neutral-950 px-2.5 py-0.5 rounded border border-neutral-800">
                    {data.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-900 text-[11px] text-neutral-500 flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-400" />
            <span>O Python atualiza o valor da variável a cada atribuição (=).</span>
          </div>
        </div>
      </div>
    </div>
  );
};
