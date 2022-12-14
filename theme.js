import { roboto } from '@theme-ui/presets'
// ^Starting point to our theme

// Theme is a set of properties : colors, fonts, etc: 

// Those styles can be added to components
// Think of them as css classes.

// Styles: === Gloabals

// needs aprovider to wrap it to our applicaiton
// Do it in _app
const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...roboto.styles
  }
}

export default theme