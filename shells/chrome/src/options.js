import * as store from './store';

const optionIsHideItems = document.getElementById('hide-items');

store.init().then(() => {
  optionIsHideItems.checked = store.isHideItems();
  optionIsHideItems.onchange = e => {
    store.setIsHideItems(e.target.checked).then(() => {
      console.log('optionIsHideItems');
    });
  };
});
