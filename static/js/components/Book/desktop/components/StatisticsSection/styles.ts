import { makeStyles } from '@material-ui/core/styles';
import { LAYOUT, COLORS_THEME } from 'src/styles/variables';

const useStyles = makeStyles((theme) => ({
  root: {
    display: `${LAYOUT.FLEX}`,
    flexDirection: 'column',
    maxWidth: '340px',
    width: '100%',
    overflowY: 'auto',
    padding: '16px 16px 24px 8px',
    '@media only screen and (max-width: 1280px)': {
      maxWidth: '309px',
    },
  },
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '8px',
    marginBottom: '24px',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  groupText: {
    fontSize: '12px',
    color: COLORS_THEME.MEDIUM_GREY,
    whiteSpace: 'nowrap',
  },
  netBalanceTitle: {
    color: COLORS_THEME.DARK_GREY,
  },
  netBalanceIcon: {
    width: '48px',
    height: '48px',
    marginBottom: '16px',
    marginTop: '24px',
  },
  statisticsWrapper: {
    width: '100%',
    display: 'flex',
    marginTop: '24px',
    backgroundColor: COLORS_THEME.APP_BACKGROUND,
    padding: '24px',
    overflowX: 'auto',
  },
  productsPaper: {
    padding: '16px',
  },
  productsWrapper: {
    border: `1px solid ${COLORS_THEME.LIGHT_GREY}`,
    borderRadius: '6px',
    padding: '16px',
  },
  productsIcon: {
    width: '48px',
    height: '48px',
    marginRight: '8px',
  },
  productItem: {
    display: 'flex',
    textDecoration: 'none',
  },

  arrowIcon: {
    width: '7.13px',
    height: '11.67px',
    marginRight: '36px',
    '@media only screen and (max-width: 1800px)': {
      marginRight: '0',
    },
  },
  arrowWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: COLORS_THEME.SECONDARY2,
    marginTop: '8px',
    whiteSpace: 'nowrap',
    '@media only screen and (max-width: 1280px)': {
      fontSize: '22px',
    },
  },

  linkTitle: {
    fontSize: '16px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    maxWidth: '123px',
    fontWeight: 500,
    '@media only screen and (max-width: 1800px)': {
      maxWidth: 'unset',
    },
    '@media only screen and (max-width: 1280px)': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },

  youWillGive: {
    color: COLORS_THEME.DARK_GREEN,
  },
  youWillGet: {
    color: COLORS_THEME.DARK_PRIMARY,
  },
  youWillGiveTitle: {
    color: COLORS_THEME.TEXT_DISABLED,
  },
  amountDivider: {
    color: COLORS_THEME.LIGHT_GREY,
    margin: '0 12px',
  },
}));

export default useStyles;
