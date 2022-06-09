const commentField = document.querySelector('.social__footer-text');
const maxLength = 140;
const submitButton = document.querySelector('.social__footer-btn');

function randomeInteger(min,max){
  if(min>max){
    // eslint-disable-next-line no-alert
    alert('Так не бывает');
  }else{
    const rand=min+Math.random()*(max-min);
    return Math.round(rand);
  }
}
randomeInteger(0,7);

function commentLength(){
  if (commentField.value.length>maxLength) {
    submitButton.disabled=true;
  }
}
commentLength(commentField,150);
