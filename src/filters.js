const balance = (team) => {
  return team.goalsScored - team.goalsConceded;
};
const ucwords = (value) => {
  if (value.length === 2) {
    return value.toUpperCase();
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
};

export { balance, ucwords };
