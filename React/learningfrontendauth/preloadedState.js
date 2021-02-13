const preloadedState = { user: window.currentUser };

const store = createStore(reducer, preloadedState, enhancers);