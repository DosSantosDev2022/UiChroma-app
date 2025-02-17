module.exports = {
  keyframes: {
    //accordion
    'accordion-down': {
      from: { height: '0', opacity: '0' },
      to: { height: 'var(--accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--accordion-content-height)' },
      to: { height: '0', opacity: '0' }
    },
    //dropdown
    'dropdown-in': {
      from: { height: '0', opacity: '0', transform: 'scale(0.95)' },
      to: {
        height: 'var(--dropdown-content-height)',
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    'dropdown-up': {
      from: {
        height: 'var(--dropdown-content-height)',
        opacity: '1',
        transform: 'scale(1)'
      },
      to: { height: '0', opacity: '0', transform: 'scale(0.95)' }
    },
    // modal
    'modal-in': {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' }
    },
    'modal-out': {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '100%': { opacity: '0', transform: 'scale(0.95)' }
    },
    'sidebar-in': {
      from: { width: 'var(--sidebar-width)' },
      to: { width: 'var(--sidebar-width)' }
    },
    'sidebar-out': {
      from: { width: 'var(--sidebar-width)' },
      to: { width: 'var(--sidebar-width)' }
    }
  },
  animation: {
    //accordion
    'accordion-down': 'accordion-down 0.4s ease-out',
    'accordion-up': 'accordion-up 0.4s ease-out',
    // dropdown
    'dropdown-in': 'dropdown-in 0.4s ease-out',
    'dropdown-up': 'dropdown-up 0.4s  ease-out',
    // modal
    'modal-in': 'modal-in 0.25s cubic-bezier(.4, 0, .2, 1)',
    'modal-out': 'modal-out 0.25s cubic-bezier(.4, 0, .2, 1)',
    // sideBar
    'sidebar-in': 'sidebar-in 0.8s ease-out',
    'sidebar-out': 'sidebar-out 0.8s ease-out'
  }
}
