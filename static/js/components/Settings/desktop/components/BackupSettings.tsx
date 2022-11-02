import { useLanguageContext } from '@components/LanguageProvider/context';
import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BackupIcon from './icons/BackupIcon';
import TickMarkIcon from './icons/TickMarkIcon';
import { useAppState } from '@store/app/selectors';
import { COLORS_THEME } from 'src/styles/variables';
import { makeStyles } from '@material-ui/core/styles';
import { getDateTime, periodFromNow } from 'src/helpers/utils/time';
import { getLocale } from 'src/helpers/locale';
import { getAllBookSyncInfo } from 'src/webWorkers/DB/bookSyncInfo';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '512px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    fontWeight: 500,
    fontSize: '18px',
    color: COLORS_THEME.DARK_GREY,
    marginLeft: '16px',
  },
  contentWrapper: {
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: '24px',
  },
  contentHeader: {
    fontSize: '16px',
    color: COLORS_THEME.DARK_GREY,
    fontWeight: 500,
    marginTop: '11.5px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
  },
  contentText: {
    fontSize: '16px',
    color: COLORS_THEME.TEXT_DISABLED,
    fontWeight: 400,
    marginTop: '24px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
  },
  contentTextLabel: {
    marginTop: '32px',
  },
  timeFromNow: {
    marginTop: '8px',
    color: COLORS_THEME.DARK_GREY,
    fontWeight: 500,
  },
  updatedAt: {
    fontSize: '14px',
    color: COLORS_THEME.GREY_BORDER,
    fontWeight: 400,
    marginTop: '8px',
    lineHeight: '32px',
    letterSpacing: '0.2px',
  },
}));
function BackupSettings() {
  const classes = useStyles();
  const [syncedAt, setSyncedAt] = useState<number | undefined | string>('');
  const { getCurrentBook } = useAppState();
  const currentLocale = getLocale();

  const { t } = useLanguageContext();

  useEffect(() => {
    const getAllUpdatedBooks = async () => {
      const currentSelectedBook = getCurrentBook();
      const books = await getAllBookSyncInfo();
      const syncedTimestamp = books.find(
        (iteratableBook) =>
          iteratableBook.book_id === currentSelectedBook?.book_id
      )?.lastSyncAt;
      if (syncedTimestamp) {
        setSyncedAt(syncedTimestamp);
      }
    };

    getAllUpdatedBooks();
  }, [getCurrentBook]);

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <BackupIcon width={24} height={24} />
        <Typography className={classes.title}>{t('backup_title')}</Typography>
      </div>
      <div>
        <div className={classes.contentWrapper}>
          <TickMarkIcon width={66} height={66} />
          <Typography className={classes.contentHeader}>
            {t('backup_msg')}
          </Typography>
          <Typography className={classes.contentText}>
            {`${t('backup_text1')} ${t('backup_text2')}`}
          </Typography>
          <Typography
            className={`${classes.contentText} ${classes.contentTextLabel}`}
          >
            {`${t('backup_label')}:`}
          </Typography>
          <Typography
            className={`${classes.contentText} ${classes.timeFromNow}`}
          >
            {!syncedAt ? null : periodFromNow(String(syncedAt), currentLocale)}
          </Typography>
          <Typography className={`${classes.updatedAt}`}>
            {!syncedAt ? null : getDateTime(String(syncedAt))}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default BackupSettings;
