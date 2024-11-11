import { storageHelp } from "../../helper";

export async function getPinyinWords() {
  const result = storageHelp.getPinyinWords();
  return result || [];
}

export async function addPinyinWords(item) {
  const pinyinWords = await getPinyinWords();
  pinyinWords.unshift({ id: Date.now(), ...item });
  storageHelp.savePinyinWords(pinyinWords);
  return pinyinWords;
}

export async function deletePinyinWords(id) {
  const pinyinWords = await getPinyinWords();
  const newArr = pinyinWords.filter((item) => item.id !== id);
  storageHelp.savePinyinWords(newArr);
  return newArr;
}

export async function queryPinyinWords(game) {
  const list = await getPinyinWords();
  const result = list.find((item) => item.game === game);
  return result;
}
