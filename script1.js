function verificaFibonacci(numero) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Verifica se o número informado é 0 ou 1
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    // Calcula os números seguintes da sequência de Fibonacci até ultrapassar o número informado
    while (b <= numero) {
        let temp = a + b;
        a = b;
        b = temp;
        
        // Verifica se o número informado é igual a algum número na sequência
        if (numero === b) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
    }

    // Se o número informado não pertencer à sequência, retorna uma mensagem indicando isso
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso da função
const numero = prompt();
const resultado = parseInt(numero);
alert   (verificaFibonacci(resultado));