export const initialState = {
  basket: [
    {
      id: 12312,
      title: "Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50",
      price: 199.0,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg",
    },
    {
      id: 12312,
      title: "Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50",
      price: 199.0,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg",
    },
    {
      id: 12312,
      title: "Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50",
      price: 199.0,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    case "ADD_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default reducer;
