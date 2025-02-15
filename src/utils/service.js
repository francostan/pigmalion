import { QUESTION } from './constants.js';
import { createInterface } from 'readline';
/**
 * Solución 1 (Fuerza bruta - O(n^2)):
 * Recorremos todos los pares posibles en nuestra matriz y verificamos si su suma es igual al requiredSum.
 */

const nonOptimizedSolution = (numbers, requiredSum) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === requiredSum) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Solución 2 (Optimizada - O(n)):
 * Usamos un Set para almacenar los números vistos. Por cada elemento,
 * calculamos el complemento (requiredSum - num) y verificamos si ya existe.
 */

const optimizedSolution = (numbers, requiredSum) => {
    const seen = new Set();

    for (const num of numbers) {
        const complement = requiredSum - num;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

const validateArrayInput = (answer) => {
    if (!answer || answer.trim() === '') return false;
    const items = answer.split(',').map(item => item.trim())
    if (items.length < 2) return false;
    return !items.some(item => isNaN(parseFloat(item)));
}

const validateSolutionInput = (answer) => answer === '1' || answer === '2'

const validadRequiredSumInput = (answer) => !isNaN(parseFloat(answer))

const convertInputInArray = (arrayInput) => {
    return arrayInput.split(',').map(num => parseFloat(num.trim()));
}

const switchSolutionByChoice = (choice) => {
    if (choice === '1') {
        return nonOptimizedSolution;
    } else {
        return optimizedSolution;
    }
}

export const main = () => {
    // Creamos la interfaz para interactuar con el usuario
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /**
     * askQuestionWithValidation:
     * Realiza una pregunta al usuario y valida la respuesta mediante validationFn.
     * Si la respuesta no es válida, vuelve a preguntar hasta obtener una respuesta correcta.
     * @param {string} question - La pregunta a mostrar.
     * @param {Function} validationFn - Función que recibe la respuesta y retorna true si es válida.
     * @returns {Promise<string>} - Una promesa que se resuelve con la respuesta válida.
     */

    function askQuestionWithValidation(question, validationFn) {
        return new Promise((resolve) => {
            function ask() {
                rl.question(question, (answer) => {
                    if (validationFn(answer)) {
                        resolve(answer);
                    } else {
                        console.log("Entrada inválida. Por favor, ingrese los valores solicitados siguiendo los ejemplos.");
                        ask();
                    }
                });
            }
            ask();
        });
    }

    (async () => {

        const choice = await askQuestionWithValidation(
            QUESTION.userInput,
            validateSolutionInput
        );

        const arrayInput = await askQuestionWithValidation(
            QUESTION.arrayInput,
            validateArrayInput
        );

        const sumInput = await askQuestionWithValidation(
            QUESTION.requiredSumInput,
            validadRequiredSumInput
        );

        const numbers = convertInputInArray(arrayInput);
        const requiredSum = parseFloat(sumInput);

        const fnToUse = switchSolutionByChoice(choice);
        console.time("Tiempo de ejecución");
        const result = fnToUse(numbers, requiredSum);
        console.timeEnd("Tiempo de ejecución");

        console.log(`${result ? "Sí" : "No"} se puede formar el número ${requiredSum} con la suma de dos elementos del array ingresado.`);

        rl.close();
    })();
}


