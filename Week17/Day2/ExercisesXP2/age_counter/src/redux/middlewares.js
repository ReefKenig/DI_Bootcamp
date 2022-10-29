export const logAction = (store) => (next) => (action) => {
  next(action);
  console.log("action:", JSON.stringify(action));
};
