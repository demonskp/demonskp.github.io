import { notes } from "@/datas/notes";


// TODO 实现相似度算法
export function getLikeNoteList(id, limit) {
  return notes.slice(0, limit);
}


