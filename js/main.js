const STRING=' ';
const MAX_LENGTH = 140;

function getRandomInt(min,max){
  if(min>max||max<=0){
    return `Минимальное значение ${min} не может превышать максимальное значение ${max}`;
  }else{
    const RAND=min+Math.random()*(max-min);
    return Math.round(RAND);
  }
}
getRandomInt(7,4);

function getLengthLine(string,length){
  if(string<=length){
    return 'true';
  }else{
    return 'false';
  }
}
getLengthLine(STRING,MAX_LENGTH);
