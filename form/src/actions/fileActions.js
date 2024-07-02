

// Action Types
export const ADD_DATA = 'ADD_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const SET_EDIT_ID = 'SET_EDIT_ID';


export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const updateData = (id, updatedData) => ({
  type: UPDATE_DATA,
  payload: { id, updatedData },
});

export const deleteData = (id) => ({
  type: DELETE_DATA,
  payload: id,
});

export const setEditId = (id) => ({
  type: SET_EDIT_ID,
  payload: id,
});
