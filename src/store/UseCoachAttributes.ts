import { defineStore } from "pinia";

export const useCoachStore = defineStore("coach", {
  state: () => ({
    det: 10,
    lod: 10,
    mot: 10,
    att: 10,
    def: 10,
    fit: 10,
    men: 10,
    tac: 10,
    tch: 10,
    gkd: 10,
    gkh: 10,
    gks: 10,
  }),
  getters: {
    getDLM: (state) => 2 * (state.det + state.lod + state.mot),
    getFitness: (state) =>
      computeSimpleRating(state.fit, state.det, state.lod, state.mot),
    getShotStopping: (state) =>
      computeSimpleRating(state.gks, state.det, state.lod, state.mot),
    getHandling: (state) =>
      computeRating(state.gkh, state.gkd, state.det, state.lod, state.mot),
    getDefTact: (state) =>
      computeRating(state.def, state.tac, state.det, state.lod, state.mot),
    getDefTech: (state) =>
      computeRating(state.def, state.tch, state.det, state.lod, state.mot),
    getAttTact: (state) =>
      computeRating(state.att, state.tac, state.det, state.lod, state.mot),
    getAttTech: (state) =>
      computeRating(state.att, state.tch, state.det, state.lod, state.mot),
    getPosTact: (state) =>
      computeRating(state.tac, state.men, state.det, state.lod, state.mot),
    getPosTech: (state) =>
      computeRating(state.tch, state.men, state.det, state.lod, state.mot),
  },
});

function computeSimpleRating(
  stat: number,
  det: number,
  lod: number,
  mot: number
): number {
  return 9 * stat + 2 * (det + lod + mot);
}

function computeRating(
  mainStat: number,
  oddStat: number,
  det: number,
  lod: number,
  mot: number
): number {
  return 6 * mainStat + 3 * oddStat + 2 * (det + lod + mot);
}
