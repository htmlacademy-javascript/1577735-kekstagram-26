import {getManyPosts} from './posts';

const picturesContainer=document.querySelector('.pictures');
const picture=document.querySelector('#picture').content.querySelector('a');

const similarPost=getManyPosts();

const similarPostFragment=document.createDocumentFragment();
similarPost.forEach(({url,likes,comments})=>{
  const postElement=picture.cloneNode(true);
  postElement.querySelector('src').textContent=url;
  postElement.querySelector('.picture__likes').textContent=likes;
  postElement.querySelector('.pictire__comments').textContent=comments;
  similarPostFragment.appendChild(postElement);
});

picturesContainer.appendChild(similarPostFragment);
