export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const UPDATE_INDEX = "UPDATE-INDEX";

export const insert = (data) => {
  return { type: INSERT, payload: data };
};

export const update = (data) => {
  return { type: UPDATE, payload: data };
};

export const Delete = (id) => {
  return { type: DELETE, payload: id };
};

export const updateIndex = (index) => {
  return { type: UPDATE_INDEX, payload: index };
};
