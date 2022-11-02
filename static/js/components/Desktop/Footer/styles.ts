import { makeStyles } from '@material-ui/core/styles';

import { COLORS_THEME } from 'src/styles/variables';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: theme.spacing(5),
    color: COLORS_THEME.TEXT_DISABLED,
    fontSize: '12px',
    textAlign: 'center',
    marginTop: theme.spacing(3),
    '& a': {
      color: COLORS_THEME.SECONDARY_COLOR,
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
