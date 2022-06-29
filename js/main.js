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

// Набор имён для комментаторов
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

//Набор комментариев
const MESSAGE=[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Массив чисел для ID
const NUMBER=Array.from({length: 25},(_v, i)=>(i+1));

//Массив чисел для фото
const PHOTO=Array.from({length: 25},(_v, i)=>(i+1));

//Массив для ID комментария
const commentId=[];
for(let i=150;i<1000;i++){
  commentId.push(i);
}

//Функция по поиску случайного не повторяющегося элемента
const getRandomNumber = (elements) => elements.splice(Math.random()*elements.length, 1)[0];

//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

//Сборка одного элемента массива
const OBJECT =()=>({
  id:getRandomNumber(NUMBER),
  url:`photos/${getRandomNumber(PHOTO)}.jpg`,
  description:'описание фотографии',
  likes:getRandomInt(15,200),
  comments:{
    id:getRandomNumber(commentId),
    avatar:`img/avatar-${getRandomInt(1,6)}.svg`,
    message:getRandomArrayElement(MESSAGE),
    name:getRandomArrayElement(NAMES)
  }
});

// Генерация масива
const ARRAY_OBJECT=Array.from({length:25},OBJECT);

