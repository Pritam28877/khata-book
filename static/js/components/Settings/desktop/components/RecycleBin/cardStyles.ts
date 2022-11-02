import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS_THEME } from 'src/styles/variables';

import activeBorder from 'src/assets/images/cardBorder.svg';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    border: `1px solid ${COLORS_THEME.CARD_BORDER}`,
    borderRadius: '8px',
    margin: '8px 0',
  },
  cardLeftWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  cardRightWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    color: COLORS_THEME.DARK_GREY,
    lineHeight: '32px',
    maxWidth: '120px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  avatarWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '16px',
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
  },
  entryAvatarWrapper: {
    backgroundColor: COLORS_THEME.LIGHT_BLUE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookIconWrapper: {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryIcon: {
    width: '24px',
    height: '32px',
  },
  khataIcon: {
    width: '19px',
    height: '26px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    marginRight: '16px',
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
    fontSize: '24px',
    fontWeight: 700,
    color: COLORS_THEME.PRIMARY_COLOR,
  },
  infoWrapper: {},
  text: {
    fontSize: '14px',
    color: COLORS_THEME.GREY_BORDER,
  },
  bookName: {
    maxWidth: '120px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  amount: {
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.MID_BLUE,
    marginLeft: '8px',
  },
  undoButton: {
    padding: '12px 30px',
    borderRadius: '10px',
    backgroundColor: COLORS_THEME.LIGHT_BLUE,
    boxShadow: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: COLORS_THEME.SECONDARY_COLOR,
    marginTop: '8px',
  },
  checkbox: {
    marginRight: '16px',
  },
  selectedCard: {
    position: 'relative',
    minHeight: '110px',
    backgroundColor: 'rgba(66, 136, 222, 0.03)',
    '&::before': {
      content: `url(${activeBorder})`,
      height: '102px',
      width: '3px',
      position: 'absolute',
      left: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
}));

export default useStyles;
