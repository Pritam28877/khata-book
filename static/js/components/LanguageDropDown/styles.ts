import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLORS_THEME, FONTWEIGHT, BORDER_STYLES } from 'src/styles/variables';

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
        cursor: 'pointer !important',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS_THEME.SECONDARY_COLOR,
            border: `${BORDER_STYLES.INPUT_HOVER_BORDER} !important`,
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
      minWidth: '174px',
      maxHeight: '256px',
      boxShadow: COLORS_THEME.GREY_BORDER,
      borderRadius: '8px',
      marginTop: '8px',
      backgroundColor: COLORS_THEME.WHITE,
    },
    listBox: {
      width: '100%',
      minWidth: '174px',
      maxHeight: '216px',
      padding: '8px',
      boxShadow: COLORS_THEME.GREY_BORDER,
      '& .MuiAutocomplete-option': {
        padding: '12px 8px',
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
    },
    optionLeftSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    label: {
      borderRadius: '12px',
      padding: theme.spacing(1),
      height: '24px',
      width: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: COLORS_THEME.MID_BLUE,
      fontSize: '11px',
      backgroundColor: 'rgba(38, 102, 184, 0.1)',
      fontWeight: FONTWEIGHT.SEMIBOLD,
    },
    labelText: {
      marginLeft: '16px',
      fontSize: '14px',
    },
    onBoardingLangDropdown: {
      width: '114px',
      cursor: 'pointer',
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
        padding: '8px 16px !important',
      },
      '& .MuiAutocomplete-inputRoot': {
        '& .MuiAutocomplete-endAdornment': {
          right: '10px',
        },
      },
      '& .MuiOutlinedInput-input': {
        height: '22px',
        fontSize: '16px',
        padding: '0 !important',
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
          borderColor: '#F0F2F4',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    onBoardingPopper: {
      width: '174px !important',
      left: '-30px !important',
    },
    arrowIcon: {},
  })
);
export default useStyles;
