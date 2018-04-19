import chromeStorage from './chromeStorage';

const ROOT_KEY = 'dmmHideItems';
const OPTIONS_KEY = 'options';
const TARGET_KEYWORDS_KEY = 'targetKeywords';
const IS_HIDE_KEY = 'isHide';

let _storage;

/**
 * 初期化する
 * chromeストレージにデータが存在すれば、それを利用する
 * 存在しなければ初期化したデータをストレージに保存して利用する
 * @returns {Promise<{}>}
 */
export async function init() {
  const storage = await chromeStorage.get(ROOT_KEY);

  if (Object.keys(storage).length === 0) {
    _storage = getInitialStateStorage();
    updateChromeStorage().then(storage => storage);
  } else {
    _storage = { ...storage };
    return _storage;
  }
}

/**
 * 初期状態のストレージを取得する
 */
function getInitialStateStorage() {
  const storage = {};

  storage[ROOT_KEY] = {};
  storage[ROOT_KEY][OPTIONS_KEY] = {};
  storage[ROOT_KEY][OPTIONS_KEY][TARGET_KEYWORDS_KEY] = [
    '【VR】',
    '糞',
    '尿',
    '大便',
    '排泄',
    '五十路',
  ];
  storage[ROOT_KEY][OPTIONS_KEY][IS_HIDE_KEY] = true;

  return { ...storage };
}

/**
 * _storageの状態をchromeストレージに保存する
 * @returns {Promise<any>}
 */
async function updateChromeStorage() {
  await chromeStorage.set(_storage);
}

export function targetKeywords() {
  return _storage[ROOT_KEY][OPTIONS_KEY][TARGET_KEYWORDS_KEY];
}

/**
 * キーワードに該当する商品を除外するかどうか
 * @returns {Boolean}
 */
export function isHideItems() {
  return _storage[ROOT_KEY][OPTIONS_KEY][IS_HIDE_KEY];
}

/**
 * キーワードに該当する商品を除外するかどうか（オプション）を更新する
 * @param boolean
 * @returns {Promise<void>}
 */
export async function setIsHideItems(boolean) {
  _storage[ROOT_KEY][OPTIONS_KEY][IS_HIDE_KEY] = boolean;
  await updateChromeStorage();
}
