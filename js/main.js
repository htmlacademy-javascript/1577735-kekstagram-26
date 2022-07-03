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
const numbers=[];
for(let i=1;i<=25;i++){
  numbers.push(i);
}

//Массив чисел для фото
const photos=[];
for(let i=1;i<=25;i++){
  photos.push(i);
}

//Массив для ID комментария
const commentIDs=[];
for(let i=150;i<1000;i++){
  commentIDs.push(i);
}

//Функция по поиску случайного не повторяющегося элемента

const getRandomNumber = (elements) => elements.splice(Math.random()*elements.length, 1)[0];


//Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

//Создаёт комментарий
const getСomment =()=>({
  id:getRandomNumber(commentIDs),
  avatar:`img/avatar-${getRandomInt(1,6)}.svg`,
  message:getRandomArrayElement(MESSAGE),
  name:getRandomArrayElement(NAMES)
});

//Генерация комментариев
const getRandomQuantityComments=()=>{
  if(Math.random()<0.5){
    return Array.from({length:1},getСomment);
  }else{
    return Array.from({length:2},getСomment);
  }
};

//Создаёт один элемент массива
const getPost =()=>({
  id:getRandomNumber(numbers),
  url:`photos/${getRandomNumber(photos)}.jpg`,
  description:'описание фотографии',
  likes:getRandomInt(15,200),
  comments:getRandomQuantityComments()
});


// Создаёт пОсты
const getManyPosts=()=>Array.from({length:25},getPost);

getManyPosts();
