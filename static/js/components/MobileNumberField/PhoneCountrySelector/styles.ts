import { makeStyles, createStyles } from '@material-ui/core/styles';
import { PIXEL_SIZE, COLORS, COLORS_THEME } from 'src/styles/variables';

const useStyles = makeStyles((theme) =>
  createStyles({
    autoComplete: {
      position: 'absolute',
      width: '100%',
    },
    root: {
      fontSize: `${PIXEL_SIZE['12px']}rem`,
    },
    img: {
      marginRight: theme.spacing(1),
    },
    countryCode: {
      display: 'flex',
      alignSelf: 'center',
      color: `${COLORS.BASE_FONT}`,
      fontSize: `${PIXEL_SIZE['12px']}rem`,
    },
    div: {
      display: 'flex',
      alignSelf: 'center',
    },
    option: {
      fontSize: 15,
      height: '36px',
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
    dropdownOption: {
      display: 'flex',
      alignItems: 'center',
    },
    flag: {
      fontSize: '24px',
    },
    countryText: {
      fontSize: '14px',
      margin: '0 8px',
    },
    popperDisablePortal: {
      position: 'relative',
      top: '42px',
      '& .MuiAutocomplete-paper': {
        boxShadow: 'none',
      },
    },
    input: {
      borderColor: 'transparent !important',
      '& ::placeholder': {
        fontSize: '12px !important',
      },
      '& .MuiInputBase-fullWidth': {
        width: '316px',
        height: '32px',
        margin: '0 auto',
      },
      '& .MuiOutlinedInput-input': {
        height: '22px !important',
        padding: '0 0 2px 8px !important',
        borderLeft: 'none !important',
        backgroundColor: '#F0F2F4',
      },
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#F0F2F4',
        padding: '8px 12px !important',
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent !important',
            boxShadow: 'none !important',
          },
        },
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent  !important',
          boxShadow: 'none !important',
        },
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none',
        boxSizing: 'border-box',
        borderRadius: '8px',
      },
    },
    inputRoot: {
      padding: `${theme.spacing(0, 0.5)}!important`,
    },
    listBox: {
      maxHeight: '230px',
      '& .MuiAutocomplete-option': {
        minHeight: '36px',
      },
      '& .MuiAutocomplete-option[data-focus="true"]': {
        backgroundColor: COLORS_THEME.LIGHT_BLUE,
      },
      '& .MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: COLORS_THEME.LIGHT_BLUE,
      },
    },
    inputAdornedStart: {
      padding: theme.spacing(0),
    },
  })
);

export default useStyles;
