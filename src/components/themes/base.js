export const baseTheme = {
  transitions: {
    duration: {
      standard: 300,
    }
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: `
            background-color 300ms ease,
            color 300ms ease
          `,
          '& *': {
            transition: `
              background-color 300ms ease,
              color 300ms ease,
              border-color 300ms ease,
              box-shadow 300ms ease
            `
          }
        }
      }
    }
  },
};