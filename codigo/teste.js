function regressaoLinear(x, y) {
    if (x.length !== y.length) {
        throw new Error("Os vetores x e y devem ter o mesmo tamanho.");
    }
 
    const n = x.length;
 
    const media = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    const mediaX = media(x);
    const mediaY = media(y);
 
    let numerador = 0;
    let denominador = 0;
 
    for (let i = 0; i < n; i++) {
        numerador += (x[i] - mediaX) * (y[i] - mediaY);
        denominador += (x[i] - mediaX) ** 2;
    }
 
    const a = numerador / denominador; // coeficiente angular (inclinação)
    const b = mediaY - a * mediaX;     // coeficiente linear (intercepto)
 
    // Calcular R²
    let somaTotal = 0;
    let somaResiduos = 0;
 
    for (let i = 0; i < n; i++) {
        const yEstimado = a * x[i] + b;
        somaTotal += (y[i] - mediaY) ** 2;
        somaResiduos += (y[i] - yEstimado) ** 2;
    }
 
    const r2 = 1 - (somaResiduos / somaTotal);
 
    return {
        equacao: `y = ${a.toFixed(4)}x + ${b.toFixed(4)}`,
        a: a,
        b: b,
        r2: r2
    };
}
 
// Dados realistas para consumo de carros (km/l)
const consumoGasolina = [13, 15, 11, 14, 10, 9, 12, 15, 13, 11, 12, 10, 14, 9, 16, 15, 12, 10, 13, 14, 12, 15, 10, 13, 14, 16, 11, 13, 9, 15, 12, 10, 14, 11, 13, 10, 15, 9, 12, 16, 14, 10, 13, 12, 9, 15, 13, 14, 16, 12, 11, 10, 13, 14, 9, 15, 16, 11, 12, 10, 13, 14, 9, 13, 16, 12, 15, 10, 9, 11, 14, 15, 12, 16, 9, 13, 11, 10, 15, 14, 16, 13, 12, 9, 10, 13, 15, 16, 9, 11, 12, 10, 14, 15, 13, 9, 16, 14, 13, 12, 15, 10, 11, 9, 16, 14, 10, 15
]; // agora é X
// Consumo álcool 
const consumoAlcool = consumoGasolina.map(g => +(g * 0.7 + (Math.random() * 0.5 - 0.25)).toFixed(2)); // agora é Y

const resultado = regressaoLinear(consumoGasolina, consumoAlcool);

console.log("Consumo Gasolina (X):", consumoGasolina);
console.log("Consumo Álcool (Y):", consumoAlcool);
console.log("Equação da reta:", resultado.equacao);
console.log("Coeficiente angular (a):", resultado.a);
console.log("Coeficiente linear (b):", resultado.b);
console.log("R²:", resultado.r2);
