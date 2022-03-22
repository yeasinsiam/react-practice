import { uniqueID } from "../../helpers/helper";
import { SET_CARD } from "./Types";

const initialState = {
  cardItems: [
    {
      id: uniqueID(),
      name: "",
      qty: "",
      rate: "",
      total: 0,
    },
  ],
  subTotal: 0,
  discount: 0,
  tax: 0,
  total: 0,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
