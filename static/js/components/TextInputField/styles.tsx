import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS_THEME, BORDER_STYLES } from 'src/styles/variables';

const useStyles = makeStyles((theme) =>
  createStyles({
    textInputContainer: {
      display: 'flex',
      position: 'relative',
    },
    textInputField: {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS_THEME.LIGHT_MEDIUM_GREY,
        boxShadow: 'none',
      },
      '& .MuiInputBase-input': {
        '&::placeholder': {
          color: COLORS_THEME.LIGHT_MEDIUM_GREY,
          fontSize: '16px',
          opacity: 1,
        },
      },
      '& .Mui-disabled': {
        backgroundColor: '#FBFCFC',
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY} !important`,
            boxShadow: 'none',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY} !important`,
          boxShadow: 'none',
        },
      },
      '& .MuiOutlinedInput-root': {
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `${BORDER_STYLES.INPUT_HOVER_BORDER} !important`,
          },
        },
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS_THEME.SECONDARY2,
        },
      },
    },
    error: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${COLORS_THEME.RED} !important`,
      },
    },
    errorIcon: {
      width: '20px',
      height: '20px',
      position: 'absolute',
      right: '17px',
      top: '10px',
    },
    searchIcon: {
      width: '18px',
      height: '18px',
    },
  })
);
export default useStyles;
