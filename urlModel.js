const urlMap = {};

export function saveUrl(custom, original) {
  urlMap[custom] = original;
}

export function getUrl(custom) {
  return urlMap[custom];
}
