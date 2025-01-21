module.exports = {
  keyframes: {
    // fade
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'fade-out': {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' }
    },
    'fade-up': {
      '0%': {
        transform: 'translate3d(0, 100%, 0)',
        opacity: '0'
      },
      '100%': {
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      }
    },
    'fade-down': {
      '0%': {
        transform: 'translate3d(0, -100%, 0)',
        opacity: '0'
      },
      '100%': {
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      }
    },
    'fade-left': {
      '0%': {
        transform: 'translateX(-20px)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: '1'
      }
    },
    'fade-right': {
      '0%': {
        transform: 'translateX(20px)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: '1'
      }
    },
    // zoom
    'zoom-in': {
      '0%': { transform: 'scale(0.8) ', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    'zoom-out': {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '100%': { transform: 'scale(0.8)', opacity: '0' }
    },
    // bounce
    'bounce-in': {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '60%': { transform: 'scale(1.05)', opacity: '1' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    'bounce-out': {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '60%': { transform: 'scale(1.05)', opacity: '0.5' },
      '100%': { transform: 'scale(0.9)', opacity: '0' }
    },
    'fade-in-bouncedown': {
      '0%': {
        opacity: 0,
        transform: 'translate3d(0%, -100%, 0)'
      },
      '33%': {
        opacity: 0.5,
        transform: 'translate3d(0%, 0%, 0)'
      },
      '66%': {
        opacity: 0.7,
        transform: 'translate3d(0%, -20%, 0)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    },
    'fade-in-bounceup': {
      '0%': {
        opacity: 0,
        transform: 'translate3d(0%, 100%, 0)'
      },
      '33%': {
        opacity: 0.5,
        transform: 'translate3d(0%, 0%, 0)'
      },
      '66%': {
        opacity: 0.7,
        transform: 'translate3d(0%, 20%, 0)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    },
    'fade-in-bounce-right': {
      '0%': {
        opacity: 0,
        transform: 'translate3d(100%, 0%, 0)'
      },
      '33%': {
        opacity: 0.5,
        transform: 'translate3d(0%, 0%, 0)'
      },
      '66%': {
        opacity: 0.7,
        transform: 'translate3d(20%, 0%, 0)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    },
    'fade-in-bounce-left': {
      '0%': {
        opacity: 0,
        transform: 'translate3d(-100%, 0%, 0)'
      },
      '33%': {
        opacity: 0.5,
        transform: 'translate3d(0%, 0%, 0)'
      },
      '66%': {
        opacity: 0.7,
        transform: 'translate3d(-20%, 0%, 0)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      }
    },
    // flip
    'flip-up': {
      '0%': {
        transform: 'rotateX(90deg)',
        opacity: '0'
      },
      '50%': {
        transform: 'rotateX(-20deg)',
        opacity: '0.5'
      },
      '100%': {
        transform: 'rotateX(0)',
        opacity: '1'
      }
    },
    'flip-down': {
      '0%': {
        transform: 'rotateX(-90deg)',
        opacity: '0'
      },
      '50%': {
        transform: 'rotateX(20deg)',
        opacity: '0.5'
      },
      '100%': {
        transform: 'rotateX(0)',
        opacity: '1'
      }
    },
    // slide
    'slide-up': {
      '0%': {
        transform: 'translateY(100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1'
      }
    },
    'slide-down': {
      '0%': {
        transform: 'translateY(-100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1'
      }
    },
    'slide-left': {
      '0%': {
        transform: 'translateX(-100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: '1'
      }
    },
    'slide-right': {
      '0%': {
        transform: 'translateX(100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: '1'
      }
    },
    // expand
    'expand-up': {
      '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
      '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
    },
    'expand-down': {
      '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
      '100%': { transform: 'scaleY(1)', transformOrigin: 'top' }
    },
    'expand-left': {
      '0%': { transform: 'scaleX(0)', transformOrigin: 'right' },
      '100%': { transform: 'scaleX(1)', transformOrigin: 'right' }
    },
    'expand-right': {
      '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
      '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
    },
    'expand-dimensions': {
      '0%': { opacity: '0', translateX: '0' },
      '100%': { opacity: '1', translateX: 'full' }
    },
    // drop
    'drop-in': {
      '0%': {
        opacity: '0',
        transform: 'scale(0)'
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    'drop-out': {
      '0%': {
        opacity: '1',
        transform: 'scale(1)',
        animationTimingFunction: 'cubic-bezier(0.34, 1.61, 0.7, 1)'
      },
      '100%': {
        opacity: '0',
        transform: 'scale(0)'
      }
    },
    //smooth
    'smooth-fadein': {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' }
    },
    'smooth-fadeout': {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '100%': { opacity: '0', transform: 'scale(0.95)' }
    },
    //others
    shrink: {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '100%': { transform: 'scale(0.8)', opacity: '0' }
    },
    pop: {
      '0%': { transform: 'scale(1)', opacity: '0' },
      '50%': { transform: 'scale(1.1)', opacity: '0.8' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    compress: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(0.9)' },
      '100%': { transform: 'scale(1)' }
    },
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-10px)' },
      '50%': { transform: 'translateX(10px)' },
      '75%': { transform: 'translateX(-5px)' }
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(-5deg)' },
      '50%': { transform: 'rotate(5deg)' },
      '75%': { transform: 'rotate(-3deg)' }
    },
    //specific components
    'accordion-down': {
      '0%': { maxHeight: '0', opacity: '0' },
      '100%': { maxHeight: '500px', opacity: '1' }
    },
    'accordion-up': {
      '0%': { maxHeight: '500px', opacity: '1' },
      '100%': { maxHeight: '0', opacity: '0' }
    }
  },
  animation: {
    // fade
    'fade-in': 'fade-in 0.3s ease-out',
    'fade-out': 'fade-out 0.3s ease-in',
    'fade-up': 'fade-up 0.3s ease-out',
    'fade-down': 'fade-down 0.3s ease-out',
    'fade-left': 'fade-left 0.3s ease-out',
    'fade-right': 'fade-right 0.3s ease-out',
    // zoom
    'zoom-in': 'zoom-in 0.3s ease-in',
    'zoom-out': 'zoom-out 0.3s ease-out',
    // bounce
    'bounce-in': 'bounce-in 0.4s ease-in',
    'bounce-out': 'bounce-out 0.4s ease-out',
    'fade-in-bouncedown': 'fade-in-bouncedown 1s ease-in-out',
    'fade-in-bounceup': 'fade-in-bounceup 1s ease-in-out',
    'fade-in-bounceright': 'fade-in-bounce-right 1s ease-in-out',
    'fade-in-bounceleft': 'fade-in-bounce-left 1s ease-in-out',
    // flip
    'flip-up': 'flip-up 0.6s ease-in',
    'flip-down': 'flip-down 0.6s ease-out',
    // slide
    'slide-up': 'slide-up 0.3s ease-in',
    'slide-down': 'slide-down 0.3s ease-out',
    'slide-left': 'slide-left 0.3s ease-in',
    'slide-right': 'slide-right 0.3s ease-out',
    // expand
    'expand-up': 'expand-up 0.3s ease-out',
    'expand-down': 'expand-down 0.3s ease-in',
    'expand-left': 'expand-left 0.3s ease-out',
    'expand-right': 'expand-right 0.3s ease-out',
    'expand-dimensions': 'expand-dimensions 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    //drop
    'drop-in': 'drop-in 0.2s ease-out',
    'drop-out': 'drop-out 0.2s ease-in ',
    //smooth
    'smooth-fadein': 'smooth-fadein 0.15s cubic-bezier(.4, 0, .2, 1)',
    'smooth-fadeout': 'smooth-fadeout 0.15s cubic-bezier(.4, 0, .2, 1)',
    // others
    shrink: 'shrink 0.3s ease-in',
    pop: 'pop 0.2s ease-in forwards',
    compress: 'compress 0.2s ease-in-out',
    shake: 'shake 0.5s ease-in-out',
    wiggle: 'wiggle 0.5s ease-in-out',
    //specific components
    'accordion-down': 'accordion-down 0.4s ease-in',
    'accordion-up': 'accordion-up 0.4s ease-out'
  }
}
