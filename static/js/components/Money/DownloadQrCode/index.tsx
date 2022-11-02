// libs
import React from 'react';
import { saveAs } from 'file-saver';

// material components
import { makeStyles, Typography } from '@material-ui/core';

// components
import QrCode from '@components/QrCode';
import Button from '@components/Button';

// icons
import QrCodeImage from 'src/assets/images/qrCode.svg';
import DownloadIcon from 'src/assets/images/download-icon.svg';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// icons
import blurredQrCode from 'src/assets/images/blurredQrCode.svg';
import infoIcon from 'src/assets/images/infoIcon.svg';

// constants
import { COLORS_THEME } from '@styles/variables';

// analytics
import { onQRCodeDownloadQRClicked } from 'src/components/Money/analytics';

import useButtonStyles from '@styles/ButtonsStyles';

interface IIconsList {
  [key: string]: string;
}

const importAllIcons = (r: __WebpackModuleApi.RequireContext) => {
  const icons: IIconsList = {};
  r.keys().map((item: string): void => {
    icons[item.replace('./', '')] = r(item);
  });
  return icons;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '352px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    height: '100%',
    maxHeight: '568px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px 16px',
    borderBottom: '1px solid #ECEEF1',
    '&:first-child': {
      padding: '32px 16px',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  qrImage: {
    width: '177px',
    height: '177px',
    marginTop: '20px',
    marginBottom: '28px',
  },
  logosSection: {
    width: '100%',
    backgroundColor: COLORS_THEME.APP_BACKGROUND,
  },
  logosList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0 8px',
    listStyle: 'none',
    padding: 0,
    margin: 0,

    '& li': {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      boxSizing: 'border-box',
      borderRadius: '4px',

      '& img': {
        maxWidth: '44px',
      },
    },
  },
  iconsNote: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
    maxWidth: '273px',
    textAlign: 'center',
    fontWeight: 400,
    marginBottom: '16px',
  },

  scanSubTitle: {
    fontSize: '14px',
    color: COLORS_THEME.DARK_GREY,
    marginBottom: '16px',
  },

  downloadQrCodeBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px',
  },
  invalidQrContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  invalidQRText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    color: COLORS_THEME.MEDIUM_DARK_GREY,
  },
  dangerIcon: {
    width: '18px',
    height: '18px',
    marginRight: '4px',
  },
}));

function DownloadQrCode(props: { qrUrl?: string; isQrCodeEnabled: boolean }) {
  const { qrUrl, isQrCodeEnabled } = props;
  const { t } = useLanguageContext();
  const classes = useStyles();
  const buttonsClasses = useButtonStyles();
  const iconsList: IIconsList = importAllIcons(
    require.context('src/assets/images/social-icons/', false, /.svg$/)
  );

  const renderIconsList = () => {
    return (
      <ul className={classes.logosList}>
        {Object.keys(iconsList).map((icon: string) => (
          <li key={icon}>
            <img src={iconsList[icon]} alt={icon} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        {!isQrCodeEnabled ? (
          <>
            <img
              src={blurredQrCode}
              alt={'invalid qr code'}
              className={classes.qrImage}
            />
            <Typography className={classes.invalidQRText}>
              <img
                src={infoIcon}
                alt="invalid qr code"
                className={classes.dangerIcon}
              />
              {t('invalid_qr_code')}
            </Typography>
          </>
        ) : (
          <QrCode image={qrUrl || QrCodeImage} className={classes.qrImage} />
        )}
      </div>
      <div className={`${classes.section} ${classes.logosSection}`}>
        <Typography className={classes.scanSubTitle}>
          {t('myqrcode_scan')}
        </Typography>
        {renderIconsList()}
      </div>
      <div className={classes.section}>
        <Typography className={classes.iconsNote}>
          {t('trademark_owners_message')}
        </Typography>
        <Button
          startIcon={<img src={DownloadIcon} alt="any" />}
          className={`${buttonsClasses.greenBtn} ${classes.downloadQrCodeBtn}`}
          disabled={!isQrCodeEnabled}
          onClick={() => {
            saveAs(qrUrl || QrCodeImage, 'qrCode');
            //analytics
            onQRCodeDownloadQRClicked();
          }}
        >
          {t('qrcode_downloadqrcode')}
        </Button>
      </div>
    </div>
  );
}

export default DownloadQrCode;
