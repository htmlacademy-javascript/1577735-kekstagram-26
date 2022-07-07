//Функция по поиску случайного не повторяющегося элемента

const getRandomNumber = (elements) => elements.splice(Math.random()*elements.length, 1)[0];

export {getRandomNumber};
