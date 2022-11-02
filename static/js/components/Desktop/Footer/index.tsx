// libs
import React, { memo } from 'react';
import useStyles from './styles';
import { useLanguageContext } from '@components/LanguageProvider/context';

//analytics
import {
  onPrivacyPolicyClicked,
  onTermsAndConditionClicked,
} from 'src/components/Desktop/OnBoarding/analytics';

function Footer() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  return (
    <div className={classes.root}>
      {t('by_logging_in_you_agree')}{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://khatabook.com/privacy.html"
        target="_blank"
        onClick={onPrivacyPolicyClicked}
        rel="noopener noreferrer"
      >
        {t('privacy_policy')}
      </a>{' '}
      {t('and')} {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://khatabook.com/terms"
        target="_blank"
        onClick={onTermsAndConditionClicked}
        rel="noopener noreferrer"
      >
        {t('terms_and_conditions')}
      </a>
    </div>
  );
}

export default memo(Footer);
