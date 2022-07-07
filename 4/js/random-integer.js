//Функция поиска случайного целого числа
function getRandomInt(min,max){
  if(min>max||max<=0){
    return `Минимальное значение ${min} не может превышать максимальное значение ${max}`;
  }else{
    const RAND=min+Math.random()*(max-min);
    return Math.round(RAND);
  }
}

export {getRandomInt};
