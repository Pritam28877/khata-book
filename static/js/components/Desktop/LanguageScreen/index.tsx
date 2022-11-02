// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { LAYOUT, COLORS, FONTWEIGHT, PIXEL_SIZE } from 'src/styles/variables';

// components
import TrustScreen from 'src/components/TrustScreen';
import Header from 'src/components/Header/CustomHeader';
import Logo from 'src/components/Logo';
import SubHeader from 'src/components/Desktop/SubHeader';
import LanguagePicker from 'src/components/LanguagePicker';
import LeftPane from 'src/components/Desktop/LeftPane';
import Footer from 'src/components/Desktop/Footer';

//material components
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {},
  mainGrid: {
    minHeight: '720px',
    maxHeight: window.screen.height,
  },
  headerLogo: {
    display: `${LAYOUT.FLEX}`,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: theme.spacing(10),
  },
  right: {
    backgroundColor: COLORS.WHITE,
  },
  rightGrid: {
    width: '55%',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
  },
  subHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: COLORS.BLACK,
    fontWeight: FONTWEIGHT.BOLD,
    fontSize: `${PIXEL_SIZE['22px']}rem`,
    marginBottom: theme.spacing(3),
  },
  trustScreen: {
    justifyContent: 'center',
    backgroundColor: COLORS.TRUSTBACKGROUND,
    fontSize: `${PIXEL_SIZE['16px']}rem`,
    marginBottom: theme.spacing(4),
    '& div': {
      marginLeft: theme.spacing(2),
    },
  },
  hr: {
    border: 'solid 1px #dedede',
  },
  margin21: {
    marginBottom: theme.spacing(21),
  },
  language: {
    display: 'none',
  },
}));

function LanguageScreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header>
        <div className={classes.headerLogo}>
          <Logo width={122} height={32} />
        </div>
      </Header>
      <Grid className={classes.mainGrid} container>
        <LeftPane />
        <Grid item xs={6} className={classes.right}>
          <div className={classes.rightGrid}>
            <SubHeader>
              <div className={classes.subHeader}>Choose language</div>
            </SubHeader>
            <TrustScreen className={classes.trustScreen} />
            <LanguagePicker className={classes.language} />
            <div className={classes.margin21} />
            <hr className={classes.hr} />
            <Footer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default memo(LanguageScreen);
