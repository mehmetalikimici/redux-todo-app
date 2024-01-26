import { ActionTypes } from '../actionTypes';

const initialState = {
  todos: [],
  category: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos };

    case ActionTypes.REMOVE_TODO:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: filtred };

    case ActionTypes.UPDATE_TODO:
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: newTodos };

    case ActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
