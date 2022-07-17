import {getManyPosts} from './posts.js';

const picturesContainer=document.querySelector('.pictures');
const picture=document.querySelector('#picture').content;
const inPicture=picture.querySelector('.picture');

const similarPost=getManyPosts();

const similarPostFragment=document.createDocumentFragment();
similarPost.forEach(({url,likes,comments})=>{
  const postElement=inPicture.cloneNode(true);
  postElement.setAttribute('src',url);
  postElement.querySelector('.picture__likes').textContent=likes;
  postElement.querySelector('.picture__comments').textContent=comments.length;
  similarPostFragment.appendChild(postElement);
});


const getSomePictures=()=>picturesContainer.appendChild(similarPostFragment);

export {getSomePictures};
