export function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const to = setTimeout(() => {
      console.error(`Error executing fetch request in ${ms}ms`, promise);
      reject({});
    }, ms);

    promise
      .then((value) => {
        clearTimeout(to);
        resolve(value);
      })
      .catch((reason) => {
        clearTimeout(to);
        reject(reason);
      });
  });
}
