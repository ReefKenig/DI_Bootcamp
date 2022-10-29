export const DELETE = "DELETE";
export const deletePost = (id) => {
  return { type: DELETE, payload: id };
};
