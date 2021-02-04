const farmersReducer = (state = {}, action) => {
  Object.freeze(state); // freezes the state
  switch (action.type) {
    case "HIRE_FARMER":
      let nextState = Object.assign({}, state);
      const farmer = {
        id: action.id,
        name: action.name,
        paid: false
      };
      nextState[action.id] = farmer;
      return nextState;
    case "PAY_FARMER":
      let nextState = Object.assign({}, state);
      let farmer = nextState[action.id];
      farmer.paid = !farmer.paid;
      return nextState;
    default:
      return state;
  }
};

export default farmersReducer;


const people = { farmers: { name: "Old MacDonald" } };
Object.freeze(people);

people.farmers = { name: "Young MacDonald" };
people; //=> { farmers: {name: 'Old MacDonald' } }

people.farmers.name = "Young MacDonald";
people; //=> { farmers: {name: 'Young MacDonald' } }