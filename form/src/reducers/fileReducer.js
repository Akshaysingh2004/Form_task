
import { ADD_DATA, UPDATE_DATA, DELETE_DATA, SET_EDIT_ID } from '../actions/fileActions';

const initialState = {
  data: [],
  editId: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_DATA:
      const updatedData = state.data.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload.updatedData } : item
      );
      return {
        ...state,
        data: updatedData,
        editId: null,
      };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case SET_EDIT_ID:
      return {
        ...state,
        editId: action.payload,
      };
    default:
      return state;
  }
};

export default fileReducer;
