import * as storage from './storage';

const list = document.getElementById('list');
const listItem = list.querySelectorAll('li');

storage.init().then(() => {
  if (!storage.isHideItems()) return;

  listItem.forEach(item => {
    const text = item.querySelector('.txt').innerText;
    const reg = new RegExp(storage.targetKeywords().join('|'));

    if (text.match(reg)) {
      console.log('match', text);
      item.style.display = 'none';
    }
  });
});
