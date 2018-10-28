export const reverseName = name => {
  const fullName = name.split(", ");
  const lastName = fullName[0];
  const firstName = fullName[fullName.length - 1];
  if (fullName.length === 1) {
    return name;
  }
  return `${firstName} ${lastName}`;
};

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
