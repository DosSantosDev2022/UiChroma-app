
module.exports = {
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    'fade-out': {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' },
    },
    
    'scale-in': {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    'scale-out': {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '100%': { transform: 'scale(0.95)', opacity: '0' },
    },
    'zoom-in': {
      '0%': { transform: 'scale(0.8)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    'zoom-out': {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '100%': { transform: 'scale(0.8)', opacity: '0' },
    },
    'bounce-in': {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '60%': { transform: 'scale(1.05)', opacity: '1' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    'bounce-out': {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '60%': { transform: 'scale(1.05)', opacity: '0.5' },
      '100%': { transform: 'scale(0.9)', opacity: '0' },
    },
  },
  animation: {
    'fade-in': 'fade-in 0.5s ease-out forwards',
    'fade-out': 'fade-out 0.5s ease-out forwards',

    'scale-in': 'scale-in 0.5s ease-out forwards',
    'scale-out': 'scale-out 0.5s ease-out forwards',

    'zoom-in': 'zoom-in 0.3s ease-out forwards',
    'zoom-out': 'zoom-out 0.3s ease-in forwards',

    'bounce-in': 'bounce-in 0.4s ease-out forwards',
    'bounce-out': 'bounce-out 0.4s ease-in forwards',

  },
};
