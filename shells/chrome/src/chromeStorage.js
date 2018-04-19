export default {
  get(key) {
    return new Promise(resolve => {
      chrome.storage.local.get(key, items => resolve(items));
    });
  },
  set(obj) {
    return new Promise(resolve => {
      chrome.storage.local.set(obj, items => resolve(items));
    });
  },
};
