export const clean = object => {
  for (let propName in object) {
    if (
      object[propName] === null ||
      object[propName] === undefined ||
      object[propName] === ""
    ) {
      delete object[propName];
    }
  }
};
