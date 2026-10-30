# 🐍 Calculadora Simples em Python

Uma aplicação educacional moderna e interativa desenvolvida para quem está dando os primeiros passos no aprendizado de programação. O projeto ensina a construir uma calculadora em **Python** que realiza as quatro operações matemáticas básicas, oferecendo uma experiência prática com **terminal interativo em tempo real** e **interface gráfica inspirada no iPhone (iOS)**.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Contexto: Imersão IA (Alura & Google)](#-contexto-imersão-ia-alura--google)
- [Engenharia de Prompt: Do Inicial ao Avançado](#-engenharia-de-prompt-do-inicial-ao-avançado)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Código-Fonte em Python (`calculadora.py`)](#-código-fonte-em-python-calculadorapy)
- [Explicação dos Principais Componentes](#-explicação-dos-principais-componentes)
- [Interface Gráfica e Ambientes de Teste](#-interface-gráfica-e-ambientes-de-teste)
- [Como Clonar o Repositório do GitHub](#-como-clonar-o-repositório-do-github)
- [Como Executar o Script Python no seu Computador](#-como-executar-o-script-python-no-seu-computador)
- [Como Executar a Aplicação Web Interativa](#-como-executar-a-aplicação-web-interativa-calculadora-ios--terminal)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Desafios Práticos para Evoluir](#-desafios-práticos-para-evoluir)
- [Licença](#-licença)

---

## 🎯 Visão Geral

Ao aprender a programar, criar uma calculadora é um dos exercícios mais eficazes para fixar os conceitos centrais da ciência da computação:
1. **Entrada de dados**: Capturar o que o usuário digita no teclado com `input()`.
2. **Conversão de tipos (Casting)**: Transformar texto em números decimais com `float()`.
3. **Tomada de decisões**: Direcionar o fluxo do programa com `if`, `elif` e `else`.
4. **Tratamento de exceções e regras matemáticas**: Evitar o travamento do programa ao detectar divisões por zero (`ZeroDivisionError`).
5. **Saída formatada**: Apresentar os resultados de forma elegante usando *f-strings*.

---

## 🎓 Contexto: Imersão IA (Alura & Google)

Este projeto foi desenvolvido como o **Desafio 1 (Individual)** proposto para os alunos durante a **Imersão de Engenharia de Software com IA**, promovida pela **Alura** em parceria oficial com o **Google**.

O objetivo do desafio foi explorar o potencial do **Google AI Studio** como ferramenta de co-criação e engenharia de software acelerada por Inteligência Artificial, indo além de um simples script de terminal e transformando um exercício básico de lógica em uma **aplicação educacional interativa completa**, com interface gráfica moderna e recursos visuais de aprendizado.

---

## 🧠 Engenharia de Prompt: Do Inicial ao Avançado

Durante a imersão, o processo de construção com IA evoluiu a partir de iterações sucessivas. Abaixo registramos o prompt inicial utilizado e a versão completa/otimizada que consolida todo o escopo do projeto final.

### 1. Prompt Inicial (Ponto de Partida)
Este foi o prompt inicial utilizado no **Google AI Studio** para solicitar a criação da calculadora com as operações básicas e a interface gráfica:

```text
Quero criar uma calculadora simples em Python que realize as quatro operações matemáticas básicas. Estou começando a aprender programação, então gere um código simples e organizado, com explicações sobre seus principais componentes. O design da calculadora deve ser como modelo do iPhone (iOS).
```

### 2. Prompt Completo e Otimizado
Se você quiser reproduzir exatamente esta aplicação web completa em um único comando no **Google AI Studio**, utilize este prompt detalhado com técnicas avançadas de Engenharia de Prompt (definição de persona, escopo técnico, restrições e diretrizes de design):

```markdown
Atue como um Engenheiro de Software Sênior e Especialista em Ensino de Programação.

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
   - "Explicação dos Componentes": cards interativos sobre input(), float(), if/elif/else, divisão por zero e f-strings, apontando as linhas exatas do código e erros comuns de iniciantes.
   - "Simulador Passo a Passo da Memória": stepper visual mostrando linha por linha a criação de num1, operacao, num2 e resultado na memória do Python com testes booleanos (True/False).
   - "Desafios Práticos": 3 exercícios (potência **, aceitar vírgula com .replace() e limitar casas decimais com :.2f) com dicas e soluções ocultáveis.
   - "Como Rodar no seu Computador": instruções passo a passo para Windows, macOS e Linux.

Mantenha a interface livre de bibliotecas pesadas desnecessárias, com código modular, tipagem estrita no TypeScript e foco na experiência de quem está aprendendo a programar.
```

---

## ✨ Funcionalidades Principais

- ➕ **As Quatro Operações Básicas**:
  - Soma (`+`)
  - Subtração (`-`)
  - Multiplicação (`*`)
  - Divisão (`/`)
- 🛡️ **Proteção contra Divisão por Zero**: Verificação preventiva com condicional antes de realizar a operação.
- 📱 **Interface Visual no Estilo iPhone (iOS)**:
  - Chassi em preto absoluto OLED.
  - Teclas circulares com proporções ergonômicas.
  - Paleta com botões de função em cinza claro, teclado numérico em grafite e operações em laranja Apple (`#ff9f0a`).
  - Inversão de cor do operador selecionado (fundo branco e ícone laranja) durante a digitação do segundo número.
- 💻 **Console / Terminal CLI Integrado**: Permite alternar para uma linha de comando tradicional caso prefira simular o terminal do computador.
- 🧠 **Rastreamento de Memória e Código em Tempo Real**: Exibe exatamente como as variáveis `num1`, `operacao`, `num2` e `resultado` são atualizadas e qual instrução Python foi disparada.
- ⚡ **Testes Rápidos com 1 Clique**: Presets para experimentar contas instantâneas (`15 + 25`, `50 - 18`, `7.5 * 4`, `100 / 4` e `42 / 0`).
- 📥 **Exportação de Código**: Botão integrado para baixar o script pronto (`.py`) ou copiar para a área de transferência.

---

## 📜 Código-Fonte em Python (`calculadora.py`)

Abaixo está o código-fonte limpo, organizado e comentado para iniciantes:

```python
# ============================================================
# CALCULADORA BÁSICA EM PYTHON
# As quatro operações: Soma (+), Subtração (-), Multiplicação (*) e Divisão (/)
# ============================================================

print("=" * 40)
print("     CALCULADORA SIMPLES EM PYTHON")
print("=" * 40)

# 1. Entrada de dados pelo usuário
# Usamos float() para aceitar números inteiros (ex: 10) ou decimais (ex: 4.5)
num1 = float(input("Digite o primeiro número: "))

print("\nOperações disponíveis:")
print("  +  -> Soma")
print("  -  -> Subtração")
print("  *  -> Multiplicação")
print("  /  -> Divisão")

operacao = input("Escolha a operação (+, -, *, /): ").strip()
num2 = float(input("Digite o segundo número: "))

# 2. Estrutura condicional para calcular o resultado
if operacao == "+":
    resultado = num1 + num2
    print(f"\nResultado: {num1} + {num2} = {resultado}")

elif operacao == "-":
    resultado = num1 - num2
    print(f"\nResultado: {num1} - {num2} = {resultado}")

elif operacao == "*":
    resultado = num1 * num2
    print(f"\nResultado: {num1} * {num2} = {resultado}")

elif operacao == "/":
    # Regra fundamental: divisão por zero não existe na matemática!
    if num2 == 0:
        print("\nErro: Não é possível dividir um número por zero!")
    else:
        resultado = num1 / num2
        print(f"\nResultado: {num1} / {num2} = {resultado}")

else:
    print(f"\nOperação inválida '{operacao}'! Escolha +, -, * ou /.")

print("=" * 40)
print("Fim do cálculo. Obrigado por usar a calculadora!")
```

---

## 🔍 Explicação dos Principais Componentes

### 1. `input()` — Captura do Teclado
- **Função:** Pausa a execução do script e aguarda o usuário digitar um valor e apertar `Enter`.
- **Atenção para Iniciantes:** O dado retornado por `input()` é sempre uma **string** (texto), mesmo que você digite apenas números. Se fizermos `num1 = input()` e digitarmos `5` e `2`, o resultado de `num1 + num2` será `'52'` (concatenação de texto) e não `7`.

### 2. `float()` — Conversão Numérica (Casting)
- **Função:** Converte a string capturada em um número de ponto flutuante (decimal).
- **Vantagem:** Permite que a calculadora faça contas com números inteiros (ex: `10`) e quebrados (ex: `7.5`).
- **Dica:** Em Python utiliza-se **ponto** (`.`) para decimais, e não vírgula.

### 3. `if`, `elif` e `else` — Controle de Fluxo
- **`if` (se):** Avalia a primeira condição. Se verdadeira, executa o bloco interno.
- **`elif` (senão se):** Avalia as condições subsequentes em ordem caso as anteriores tenham sido falsas.
- **`else` (senão):** Plano de contingência final, executado se o usuário tiver digitado uma operação não reconhecida.

### 4. Tratamento de Divisão por Zero (`if num2 == 0:`)
- **Regra:** Na matemática, dividir por zero é uma operação impossível/indefinida.
- **No Python:** Tentar executar `10 / 0` trava o programa com a mensagem `ZeroDivisionError: division by zero`.
- **Solução:** Validamos se o divisor (`num2`) é igual a zero antes de tentar efetuar o cálculo.

### 5. F-Strings (`f"..."`) — Saída Formatada
- Introduzidas no Python 3.6, permitem interpolar expressões e variáveis diretamente dentro de chaves `{}`:
  ```python
  print(f"Resultado: {num1} + {num2} = {resultado}")
  ```

---

## 🎨 Interface Gráfica e Ambientes de Teste

<img width="1055" height="906" alt="image" src="https://github.com/user-attachments/assets/1f22f46d-0792-4273-9c34-5475e630f3e7" />
<img width="1297" height="866" alt="image" src="https://github.com/user-attachments/assets/586f2a62-aed7-4b02-a4e6-7f1786d3fac0" />
<img width="1225" height="863" alt="image" src="https://github.com/user-attachments/assets/d08ba493-3199-4f0a-a594-7a0545f19aad" />


A aplicação web disponibiliza dois modos de interação:

| Modo | Descrição | Estilo Visual |
| :--- | :--- | :--- |
| **Calculadora Visual** | Interface com teclado completo (0-9, operações, C, AC, ⌫, ±, =) e display digital integrado | Inspirado no **iPhone (iOS)** com botões circulares e estados ativos |
| **Console CLI** | Terminal interativo clássico idêntico à execução do Python no Prompt de Comando / Terminal | Fundo escuro com prompt `>` e saídas com destaque de cor |

Além disso, a plataforma inclui:
- **Simulador Passo a Passo da Memória**: Mostra a criação de cada variável e a avaliação booleana (`True`/`False`) de cada condição `if/elif`.
- **Modo Modular**: Versão do código estruturada em funções (`def somar()`, `def dividir()`, etc.) e laço de repetição contínuo (`while True`).

---

## 📥 Como Clonar o Repositório do GitHub

Para baixar o projeto no seu computador, você pode utilizar o **Git** (recomendado) ou baixar o arquivo compactado em **ZIP**.

### 1. Verifique se você tem o Git instalado

Abra o terminal do seu sistema operacional e execute:

```bash
git --version
```

- Se exibir algo como `git version 2.x.x`, o Git já está pronto para uso.
- Caso não tenha o Git instalado:
  - **Windows**: Baixe em [git-scm.com](https://git-scm.com) ou execute no PowerShell: `winget install --id Git.Git -e --source winget`
  - **macOS**: Instale via Homebrew: `brew install git` (ou instale os Command Line Tools com `xcode-select --install`)
  - **Linux (Ubuntu/Debian)**: `sudo apt update && sudo apt install git -y`
  - **Linux (Fedora)**: `sudo dnf install git -y`
  - **Linux (Arch)**: `sudo pacman -S git`

---

### 2. Clonando o repositório pelo Terminal

Escolha o terminal do seu sistema:
- **Windows**: Abra o **Prompt de Comando (CMD)**, o **PowerShell** ou o **Git Bash**.
- **macOS**: Abra o aplicativo **Terminal** (pressione `Cmd + Espaço`, digite `Terminal` e aperte `Enter`).
- **Linux**: Abra o seu emulador de terminal favorito (`Ctrl + Alt + T`).

Execute o comando:

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/calculadora-python-iniciantes.git

# Entre na pasta do projeto
cd calculadora-python-iniciantes
```

> 💡 **Alternativa sem Git (Download ZIP):**
> Se preferir não usar o Git, clique no botão verde **Code** no topo desta página do GitHub, selecione **Download ZIP**, descompacte a pasta no seu computador e abra o terminal dentro dela.

---

## 🚀 Como Executar o Script Python no seu Computador

O repositório já inclui o script em Python pronto para ser executado no terminal.

### Pré-requisitos
- Ter o **Python 3.8 ou superior** instalado:
  - **Windows**: Baixe o instalador em [python.org](https://www.python.org). **Importante:** Na primeira tela do instalador, marque a caixinha **"Add Python to PATH"**!
  - **macOS**: Instale via Homebrew com `brew install python` ou baixe no [python.org](https://www.python.org).
  - **Linux**: Já costuma vir pré-instalado. Se necessário: `sudo apt install python3 -y`.

---

### Passo a Passo por Sistema Operacional

#### 🪟 No Windows (CMD ou PowerShell):
```powershell
# Verifique se o Python está acessível
python --version
# (ou py --version)

# Execute o script da calculadora
python calculadora.py
# Caso dê erro de comando não encontrado, tente:
py calculadora.py
```

#### 🍎 No macOS (Terminal):
```bash
# Verifique a versão do Python 3
python3 --version

# Execute o script da calculadora
python3 calculadora.py
```

#### 🐧 No Linux (Terminal Bash / Zsh):
```bash
# Verifique a versão
python3 --version

# Execute o script da calculadora
python3 calculadora.py
```

---

## 💻 Como Executar a Aplicação Web Interativa (Calculadora iOS + Terminal)

Se você quiser rodar a **interface gráfica interativa completa** (com o simulador visual no estilo iPhone, console CLI em tempo real e visualizador de memória):

### Pré-requisito: Node.js
A aplicação web foi desenvolvida com **React 19**, **Vite** e **Tailwind CSS**. É necessário ter o **Node.js (versão 18 ou superior)** instalado.

- **Windows**: Baixe o instalador LTS em [nodejs.org](https://nodejs.org) ou instale via PowerShell: `winget install OpenJS.NodeJS`
- **macOS**: Instale via Homebrew: `brew install node` ou baixe o pacote `.pkg` no [nodejs.org](https://nodejs.org)
- **Linux (Ubuntu/Debian)**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

---

### Passo a Passo para Iniciar a Aplicação Web

Abra o terminal dentro da pasta clonada (`calculadora-python-iniciantes`) e execute os comandos correspondentes:

```bash
# 1. Instale todas as dependências do projeto
npm install

# 2. Inicie o servidor local de desenvolvimento
npm run dev
```

Após rodar o comando, o terminal exibirá uma mensagem semelhante a:
```text
  VITE v8.x.x  ready in 250 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Abra o seu navegador de internet favorito (Chrome, Edge, Firefox, Safari) e acesse:
👉 **`http://localhost:3000`**

---

## ❓ Resolução de Dúvidas Frequentes (Troubleshooting)

### 1. `python` ou `'py' não é reconhecido como um comando interno ou externo` (Windows)
- **Causa:** O Python foi instalado sem a opção de adicionar as variáveis de ambiente ao sistema.
- **Solução:** Reabra o instalador do Python, clique em **Modify** e certifique-se de marcar a opção **"Add Python to environment variables / Add Python to PATH"**. Reinicie o Prompt de Comando após isso.

### 2. `zsh: command not found: python` (macOS)
- **Causa:** No macOS moderno, o interpretador padrão chama-se `python3` (com o número 3 no final).
- **Solução:** Utilize sempre `python3 calculadora.py`.

### 3. `Port 3000 is already in use` ao rodar a aplicação web
- **Causa:** Outro programa já está utilizando a porta 3000.
- **Solução:** O Vite automaticamente oferecerá outra porta (ex: `http://localhost:3001`). Basta acessar o endereço informado no seu terminal.

---

## 📁 Estrutura do Projeto

```text
├── calculadora.py                 # Script Python independente para rodar no terminal
├── index.html                     # Ponto de entrada HTML da aplicação web
├── metadata.json                  # Metadados do projeto
├── package.json                   # Dependências e scripts do Node.js
├── README.md                      # Documentação completa do projeto
├── tsconfig.json                  # Configuração do TypeScript
├── vite.config.ts                 # Configurações do Vite e Tailwind CSS
└── src/
    ├── App.tsx                    # Layout principal e navegação em abas
    ├── main.tsx                   # Inicialização do React 19
    ├── index.css                  # Estilos globais e Tailwind CSS
    ├── data/
    │   └── pythonSnippets.ts      # Códigos Python, desafios e explicações
    └── components/
        ├── InteractiveTerminal.tsx # Calculadora estilo iOS e Console CLI
        ├── CodeDisplay.tsx        # Visualizador de código com syntax highlight
        ├── ComponentExplainer.tsx # Explicação pedagógica dos componentes
        ├── ExecutionStepper.tsx   # Simulador visual de memória e condicionais
        ├── ChallengesSection.tsx  # Desafios práticos com dicas e soluções
        └── HowToRunGuide.tsx      # Guia de execução passo a passo
```

---

## 🏆 Desafios Práticos para Evoluir

Após dominar as quatro operações básicas, tente implementar estas melhorias no seu código Python:

1. **Adicionar Exponenciação / Potência (`**`)**:
   - Utilize o operador `**` (ex: `2 ** 3 = 8`).
2. **Suporte a Vírgulas Decimais**:
   - Utilize `.replace(",", ".")` no texto capturado pelo `input()` para permitir que o usuário digite tanto `5.5` quanto `5,5`.
3. **Formatação de Duas Casas Decimais**:
   - Formate a saída para divisões periódicas usando `{resultado:.2f}` dentro da f-string (ex: `10 / 3` resultará em `3.33`).

---

## 📄 Licença

Este projeto é de código aberto sob a licença [Apache 2.0](LICENSE). Sinta-se livre para utilizar, modificar e compartilhar para fins de estudo e ensino.
