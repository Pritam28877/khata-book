import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS_THEME, BORDER_STYLES } from 'src/styles/variables';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: COLORS_THEME.WHITE,
      '& .MuiAutocomplete-inputRoot': {
        '& .MuiAutocomplete-endAdornment': {
          top: 'unset',
          right: '25px',
        },
      },
      '& .MuiIconButton-root:hover': {
        backgroundColor: 'transparent',
      },
    },
    dropdownInput: {
      '& ::placeholder': {
        opacity: 1,
        color: COLORS_THEME.TEXT_GREY,
        fontWeight: 500,
        fontSize: '16px',
      },
      '& .MuiOutlinedInput-input': {
        height: '37px',
        fontSize: '16px',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `${BORDER_STYLES.INPUT_HOVER_BORDER} !important`,
            boxShadow: 'none',
          },
        },
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: COLORS_THEME.SECONDARY2,
          boxShadow: 'none',
        },
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS_THEME.GREY_BORDER,
        boxSizing: 'border-box',
        borderRadius: '8px',
      },
    },
    popupIcon: {
      width: '10px',
      height: '5px',
      transform: 'rotate(180deg)',
    },
    dropdownListPaper: {
      width: '100%',
      maxHeight: '300px',
      boxShadow: COLORS_THEME.GREY_BORDER,
      borderRadius: '8px',
      marginTop: '8px',
      backgroundColor: COLORS_THEME.WHITE,
    },
    listBox: {
      height: '300px',
      paddingTop: 0,
      width: '100%',
      maxHeight: '170',
      padding: '8px',
      boxShadow: COLORS_THEME.GREY_BORDER,
      '& .MuiAutocomplete-option': {
        padding: '8px',
        borderRadius: '4px',
      },
      '& .MuiAutocomplete-option[data-focus="true"]': {
        backgroundColor: COLORS_THEME.LIGHT_BLUE,
      },
      '& .MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: 'transparent',
        '& $label': {
          color: COLORS_THEME.WHITE,
          backgroundColor: COLORS_THEME.MID_BLUE,
        },
        '& $labelText': {
          color: COLORS_THEME.MID_BLUE,
        },
      },
    },
    dropdownOption: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: ' 0',
      position: 'relative',
    },
    optionLeftSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    labelText: {
      marginLeft: '16px',
      fontSize: '14px',
    },
    inputSearch: {
      width: '100%',
      padding: '16px 8px',
    },
  })
);
export default useStyles;
