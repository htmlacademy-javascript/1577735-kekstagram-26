import {getRandomInt} from './random-integer.js';

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {getRandomArrayElement};
