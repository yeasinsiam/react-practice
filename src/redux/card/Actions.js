import { uniqueID } from "../../helpers/helper";
import { SET_CARD } from "./Types";

export const setCard = (payload) => {
  return {
    type: SET_CARD,
    payload: payload,
  };
};

export const syncTotals = () => {
  return (dispatch, getState) => {
    const { card } = getState();
    const { cardItems, discount, tax } = card;

    const newSubTotal = cardItems
      .map((item) => item.total, [])
      .reduce((total, num) => {
        return total + num;
      });
    const newTotal = newSubTotal
      ? newSubTotal - (Number(discount) + Number(tax))
      : 0;
    dispatch(
      setCard({
        ...card,
        subTotal: newSubTotal,
        total: newTotal,
      })
    );
  };
};

export const addCardItem = () => {
  return (dispatch, getState) => {
    const { card } = getState();

    dispatch(
      setCard({
        ...card,
        cardItems: [
          ...card.cardItems,
          {
            id: uniqueID(),
            name: "",
            qty: "",
            rate: "",
            total: 0,
          },
        ],
      })
    );
  };
};

export const setCardItemValue = ({ name, value }, cardItemID) => {
  return (dispatch, getState) => {
    const { card } = getState();

    const cardItems = [...card.cardItems];
    const itemIndex = cardItems.findIndex((item) => item.id === cardItemID);
    cardItems[itemIndex][name] = value;

    //conditionally set  total for field
    cardItems[itemIndex].total =
      cardItems[itemIndex].qty && cardItems[itemIndex].rate
        ? cardItems[itemIndex].qty * cardItems[itemIndex].rate
        : (cardItems[itemIndex].total = 0);

    dispatch(
      setCard({
        ...card,
        cardItems,
      })
    );
    dispatch(syncTotals());
  };
};

export const setCardMetaData = (name, value) => {
  return (dispatch, getState) => {
    const card = { ...getState().card };
    card[name] = Number(value);

    dispatch(setCard(card));
    dispatch(syncTotals());
  };
};

export const removeCardItem = (cardItemID) => {
  return (dispatch, getState) => {
    const { card } = getState();
    const newCardItems = card.cardItems.filter(
      (item) => item.id !== cardItemID
    ); // this will remove the selected item from card items

    dispatch(
      setCard({
        ...card,
        cardItems: newCardItems,
      })
    );
    dispatch(syncTotals());
  };
};
