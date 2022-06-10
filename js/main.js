const commentField = document.querySelector('.social__footer-text');
const maxLength = 140;
const submitButton = document.querySelector('.social__footer-btn');

function randomeInteger(min,max){
  if(min>max){
    return `Минимальное значение ${min} не может превышать максимальное значение ${max}`;
  }else{
    const rand=min+Math.random()*(max-min);
    return Math.round(rand);
  }
}
randomeInteger(7,4);

function commentLength(){
  if (commentField.value.length>maxLength) {
    submitButton.disabled=true;
  }
}
commentLength(commentField,150);
