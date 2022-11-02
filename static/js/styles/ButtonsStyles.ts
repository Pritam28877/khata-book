import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS_THEME } from 'src/styles/variables';

const useButtonStyles = makeStyles({
  secondaryBtn: {
    backgroundColor: COLORS_THEME.SECONDARY1,
    fontSize: '18px',
    fontWeight: 700,
    color: COLORS_THEME.WHITE,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: COLORS_THEME.SECONDARY1,
      opacity: 0.8,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.DARK_SECONDARY,
      color: COLORS_THEME.WHITE,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.DARK_SECONDARY,
      opacity: 1,
      boxShadow: 'none',
    },
  },
  primaryBtn: {
    backgroundColor: COLORS_THEME.DARK_PRIMARY,
    fontSize: '18px',
    fontWeight: 700,
    color: COLORS_THEME.WHITE,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: COLORS_THEME.DARK_PRIMARY,
      opacity: 0.8,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.DARK_PRIMARY,
      color: COLORS_THEME.WHITE,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.DARK_RED,
      opacity: 1,
      boxShadow: 'none',
    },
  },
  greenBtn: {
    backgroundColor: COLORS_THEME.DARK_GREEN,
    fontSize: '18px',
    fontWeight: 700,
    color: COLORS_THEME.WHITE,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: COLORS_THEME.DARK_GREEN,
      opacity: 0.8,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.DARK_GREEN,
      color: COLORS_THEME.WHITE,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: '#056338',
      opacity: 1,
      boxShadow: 'none',
    },
  },
  paleSecondaryBtn: {
    backgroundColor: COLORS_THEME.PALE_BLUE,
    fontSize: '18px',
    fontWeight: 700,
    color: COLORS_THEME.SECONDARY1,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(194, 222, 254, 0.7)',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.PALE_BLUE,
      color: COLORS_THEME.SECONDARY1,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.SECONDARY4,
      opacity: 1,
      boxShadow: 'none',
    },
  },
  palePrimaryBtn: {
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.DARK_PRIMARY,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(255, 173, 185, 0.7)',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
      color: COLORS_THEME.DARK_PRIMARY,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.PALE_RED,
      opacity: 1,
      boxShadow: 'none',
    },
  },
  paleGreenBtn: {
    backgroundColor: COLORS_THEME.PALE_GREEN,
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.DARK_GREEN,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(60, 177, 124, 0.3)',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.PALE_GREEN,
      color: COLORS_THEME.DARK_GREEN,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: 'rgba(60, 177, 124, 0.5)',
      opacity: 1,
      boxShadow: 'none',
    },
  },
  outlinedSecondaryBtn: {
    backgroundColor: COLORS_THEME.WHITE,
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.SECONDARY2,
    boxShadow: 'none',
    textTransform: 'capitalize',
    border: `1px solid ${COLORS_THEME.SECONDARY2}`,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#F5FBFF',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.WHITE,
      color: COLORS_THEME.SECONDARY2,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.PALE_BLUE,
      border: 'none',
      opacity: 1,
      boxShadow: 'none',
    },
  },
  outlinedPrimaryBtn: {
    backgroundColor: COLORS_THEME.WHITE,
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.DARK_PRIMARY,
    boxShadow: 'none',
    textTransform: 'capitalize',
    border: `1px solid ${COLORS_THEME.PALE_RED}`,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(253, 232, 234, 0.5)',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.WHITE,
      color: COLORS_THEME.DARK_PRIMARY,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
      border: '0',
      opacity: 1,
      boxShadow: 'none',
    },
  },
  outlinedGreenBtn: {
    backgroundColor: COLORS_THEME.WHITE,
    fontSize: '14px',
    fontWeight: 500,
    color: COLORS_THEME.DARK_GREEN,
    boxShadow: 'none',
    textTransform: 'capitalize',
    border: `1px solid ${COLORS_THEME.PALE_GREEN}`,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(216, 239, 229, 0.5)',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.WHITE,
      color: COLORS_THEME.DARK_GREEN,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: COLORS_THEME.PALE_GREEN,
      opacity: 1,
      boxShadow: 'none',
    },
  },
  greyBtn: {
    backgroundColor: COLORS_THEME.LIGHT_GREY,
    fontSize: '18px',
    fontWeight: 700,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#E5E8EB',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: COLORS_THEME.LIGHT_GREY,
      color: COLORS_THEME.MEDIUM_DARK_GREY,
      opacity: 0.5,
    },
    '&:active': {
      backgroundColor: '#DADDDF',
      opacity: 1,
      boxShadow: 'none',
    },
  },
});

export default useButtonStyles;
