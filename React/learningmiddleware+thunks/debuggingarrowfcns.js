const addFruit = fruit => ({
  type: "ADD_FRUIT",
  fruit
});

// need to have explicit return

const addFruit = fruit => {
  debugger;
  return {
    type: "ADD_FRUIT",
    fruit
  };
};