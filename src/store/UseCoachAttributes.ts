import { defineStore } from "pinia";

export const useCoachStore = defineStore("coach", {
  state: () => ({
    det: 10,
    lod: 10,
    mot: 10,
    att: 10,
    def: 10,
    fit: 10,
    men: 1,
    tac: 10,
    tch: 20,
    gkd: 10,
    gkh: 10,
    gks: 15
  }),
});
