function getFlagValue(flag) {
  const args = process.argv;
  return args[args.indexOf(flag) + 1]
}

module.exports = getFlagValue;