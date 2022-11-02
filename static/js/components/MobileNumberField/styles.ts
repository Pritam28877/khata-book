import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS_THEME, BORDER_STYLES } from 'src/styles/variables';

const useStyles = makeStyles((theme) =>
  createStyles({
    mobileNumberField: {
      '& .MuiOutlinedInput-input': {
        fontSize: '16px',
        height: '25px',
        borderLeft: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY}`,
      },
      '& .MuiOutlinedInput-root': {
        padding: '12px 16px',
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `${BORDER_STYLES.INPUT_HOVER_BORDER} !important`,
          },
        },
      },
      '& .MuiOutlinedInput-root.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS_THEME.PRIMARY_COLOR,
        },
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS_THEME.SECONDARY2,
        },
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS_THEME.LIGHT_MEDIUM_GREY,
        boxSizing: 'border-box',
        borderRadius: '4px',
      },
      '& .MuiFormHelperText-root.Mui-error': {
        color: COLORS_THEME.PRIMARY_COLOR,
        fontSize: '12px',
      },
    },
    mobileNumberInput: {
      '& ::placeholder': {
        color: COLORS_THEME.LIGHT_MEDIUM_GREY,
        opacity: 1,
        fontSize: '16px',
      },
    },

    countryAdornment: {
      display: 'flex',
      alignItems: 'center',
    },
    openSelectorButton: {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      alignItems: 'center',
      padding: '0',
      marginRight: '10px',
      display: 'flex',
      cursor: 'pointer',
      height: '55px',
    },
    flag: {
      fontSize: '24px',
      marginTop: '2px',
    },
    countryText: {
      fontSize: '14px',
      fontWeight: 500,
      margin: '0 8px',
    },
    arrowIcon: {
      width: '8px',
      height: '4px',
    },
    rotateArrow: {
      transform: 'rotate(180deg)',
    },
    popper: {
      position: 'absolute',
      width: '100%',
      zIndex: 2,
      padding: '16px 0 50px 0',
      background: '#FFFFFF',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.18)',
      borderRadius: '8px',
      marginTop: '4px',
      left: '-16px !important',
    },
    disabledArrow: {
      cursor: 'default',
    },
    disabledField: {
      backgroundColor: '#FBFCFC',
      '& .MuiOutlinedInput-input': {
        backgroundColor: '#FBFCFC !important',
      },
      '& .MuiOutlinedInput-root': {
        padding: '8px',
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY} !important`,
            boxShadow: 'none',
          },
        },
      },
    },
  })
);
export default useStyles;
