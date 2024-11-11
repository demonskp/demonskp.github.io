import * as locationHelp from "./locationHelp";

const PINYIN_WORDS = "PINYIN_WORDS";

export function savePinyinWords(words) {
  locationHelp.saveObject(PINYIN_WORDS, words);
}

export function getPinyinWords() {
  return locationHelp.getObject(PINYIN_WORDS);
}
