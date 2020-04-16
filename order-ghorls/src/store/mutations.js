export default {
  appendOrder: (state, { orders, myOrder }) => {
    state[orders].push(myOrder);
  }
};
