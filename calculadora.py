# ============================================================
# CALCULADORA BÁSICA EM PYTHON (Para Iniciantes)
# As quatro operações: Soma (+), Subtração (-), Multiplicação (*) e Divisão (/)
# ============================================================

def main():
    print("=" * 40)
    print("     CALCULADORA SIMPLES EM PYTHON")
    print("=" * 40)

    # 1. Entrada de dados pelo usuário
    # Usamos float() para aceitar números inteiros (ex: 10) ou decimais (ex: 4.5)
    try:
        num1 = float(input("Digite o primeiro número: ").replace(",", "."))
    except ValueError:
        print("\nErro: Você deve digitar um número válido!")
        return

    print("\nOperações disponíveis:")
    print("  +  -> Soma")
    print("  -  -> Subtração")
    print("  *  -> Multiplicação")
    print("  /  -> Divisão")

    operacao = input("\nEscolha a operação (+, -, *, /): ").strip()

    try:
        num2 = float(input("Digite o segundo número: ").replace(",", "."))
    except ValueError:
        print("\nErro: Você deve digitar um número válido!")
        return

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


if __name__ == "__main__":
    main()
