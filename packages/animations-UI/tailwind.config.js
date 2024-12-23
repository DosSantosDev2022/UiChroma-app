const animations = require('./src/animations');

module.exports = {
  theme: {
    extend: {
      ...animations,
    },
  },
};
