import { settingSlice } from "./slice";
const { actions: slice } = settingSlice;

export const shiftingQuery = qr => (dispatch) => {
  dispatch(slice.shiftingQuery(qr));
}
