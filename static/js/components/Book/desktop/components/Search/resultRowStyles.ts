import { makeStyles } from '@material-ui/core/styles';
import { COLORS_THEME, COLORS } from 'src/styles/variables';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: COLORS.LIGHT_BLUE,
      '& $customerAvatar': {
        backgroundColor: COLORS_THEME.SECONDARY_COLOR,
      },
    },
  },
  result: {
    display: 'flex',
    padding: '16px 24px',
  },
  icon: {
    marginRight: '16px',
    width: '40px',
    height: '40px',
  },
  customerAvatar: {
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.WHITE,
    backgroundColor: COLORS_THEME.SECONDARY2,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  customerName: {
    fontSize: '16px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '180px',
  },
  phone: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },
  divider: {
    width: '100%',
    maxWidth: '236px',
    margin: '0 auto',
  },
}));

export default useStyles;
