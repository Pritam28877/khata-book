export const getInitials = (name: string) => {
  const [firstName, secondName] = name.trim().split(/\s+/g);
  return (firstName[0] + (secondName ? secondName[0] : '')).toUpperCase();
};
