
const isFunction = (action) => {
  return typeof action === 'function';
};

const customMiddleware = store => next => action => {
  return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
};

export default customMiddleware;