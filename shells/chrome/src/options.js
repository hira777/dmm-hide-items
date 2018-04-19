import * as chromeStorage from './storage';

const optionIsHideItems = document.getElementById('hide-items');

chromeStorage.init().then(() => {
  optionIsHideItems.checked = chromeStorage.isExcludedVR();
  optionIsHideItems.onchange = e => {
    chromeStorage.setIsHideItems(e.target.checked).then(() => {
      console.log('optionIsHideItems');
    });
  };
});
