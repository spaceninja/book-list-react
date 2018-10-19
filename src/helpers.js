export const reverseName = name => {
  const fullName = name.split(", ");
  const lastName = fullName[0];
  const firstName = fullName[fullName.length - 1];
  if (fullName.length === 1) {
    return name;
  }
  return `${firstName} ${lastName}`;
};
