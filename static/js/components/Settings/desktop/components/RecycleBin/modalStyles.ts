import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS_THEME } from 'src/styles/variables';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: '640px',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    padding: '32px ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: COLORS_THEME.GREY_BORDER,
    cursor: 'pointer',
  },
  icon: {
    width: '87px',
    height: '78px',
    margin: '30px 0',
  },
  primaryText: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: COLORS_THEME.DARK_GREY,
    marginBottom: '24px',
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
  },
  buttonsContainer: {
    display: 'flex',
  },
  button: {
    padding: '15px 82px',
    borderRadius: '10px',
    boxShadow: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    margin: '16px 24px',
  },
  primaryBtn: {
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
    color: COLORS_THEME.WHITE,
    '&:hover': {
      backgroundColor: COLORS_THEME.MID_BLUE,
    },
  },
  secondaryBtn: {
    backgroundColor: 'rgba(236, 238, 241, 0.5)',
    color: COLORS_THEME.GREY_BORDER,
    '&:hover': {
      backgroundColor: COLORS_THEME.LIGHT_BLUE,
      color: COLORS_THEME.SECONDARY_COLOR,
    },
  },
}));

export default useStyles;
