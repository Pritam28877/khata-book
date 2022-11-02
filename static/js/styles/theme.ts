import { createMuiTheme } from '@material-ui/core/styles';
import { COLORS, SHADOWS, FONTWEIGHT, PIXEL_SIZE } from 'src/styles/variables';

export default createMuiTheme({
  palette: {
    primary: {
      main: COLORS.BLUE,
    },
    secondary: {
      main: COLORS.RED,
    },
    success: {
      main: COLORS.SUCCESS,
    },
    error: {
      main: COLORS.RED,
    },
    warning: {
      main: COLORS.WARNING_LIGHT,
    },
  },
  overrides: {
    MuiSelect: {
      icon: {
        display: 'none',
      },
      select: {
        display: 'flex',
        paddingRight: '12px',
        '&.MuiSelect-select': {
          paddingRight: '12px',
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0 0 0 16px !important',
        backgroundColor: `${COLORS.WHITE}`,
        height: '40px',
        '&::placeholder': {
          color: COLORS.PLACEHOLDER_TEXT,
        },
      },
      inputAdornedStart: {
        backgroundColor: `${COLORS.WHITE}`,
      },
      adornedStart: {
        paddingLeft: '12px',
      },
      notchedOutline: {
        borderWidth: '1px !important',
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginRight: '0',
      },
    },
    MuiRadio: {
      root: {
        padding: 0,
      },
    },
    MuiButton: {
      root: {
        fontSize: `${PIXEL_SIZE['14px']}rem`,
        boxShadow: SHADOWS.BUTTON,
        fontWeight: FONTWEIGHT.BOLD,
      },
      containedPrimary: {
        fontSize: `${PIXEL_SIZE['14px']}rem`,
        boxShadow: SHADOWS.BUTTON,
        '&.Mui-disabled': {
          color: COLORS.WHITE,
          backgroundColor: COLORS.BLUE,
          opacity: '0.5',
        },
      },
      containedSecondary: {
        fontSize: `${PIXEL_SIZE['14px']}rem`,
        boxShadow: SHADOWS.BUTTON,
        '&.Mui-disabled': {
          color: COLORS.WHITE,
          backgroundColor: COLORS.RED,
          opacity: '0.5',
        },
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: COLORS.DOVE_GREY,
      },
    },
    MuiFab: {
      extended: {
        height: '40px',
        minWidth: '185px',
        fontSize: `${PIXEL_SIZE['14px']}rem`,
        boxShadow: SHADOWS.BUTTON,
        color: COLORS.WHITE,
        backgroundColor: `${COLORS.MAROON}!important`,
        fontWeight: FONTWEIGHT.BOLD,
      },
    },
    MuiTouchRipple: {
      root: {
        display: 'none',
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: '10px',
        '&.Mui-error': {
          fontSize: `${PIXEL_SIZE['12px']}rem`,
        },
      },
      contained: {
        marginLeft: '0px',
      },
    },
    MuiAvatar: {
      root: {
        width: '36px',
        height: '36px',
        fontSize: `${PIXEL_SIZE['14px']}rem`,
      },
    },
    MuiListItemAvatar: {
      root: {
        minWidth: '46px',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '44px',
      },
    },
    MuiListItem: {
      root: {
        backgroundColor: COLORS.WHITE,
        paddingBottom: '13px',
        paddingTop: '13px',
      },
      button: {
        '&:hover': {
          backgroundColor: COLORS.WHITE,
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: `${PIXEL_SIZE['16px']}rem`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: COLORS.GREY,
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: COLORS.WHITE,
      },
    },
  },
});
