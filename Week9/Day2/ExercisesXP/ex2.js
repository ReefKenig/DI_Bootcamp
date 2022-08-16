const p = () => {
  const status = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("success");
      } else {
        reject("Oops");
      }
    }, 4000);
  });
};

p()
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
