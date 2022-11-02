// libs
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Link from '@material-ui/core/Link';

// components
import Header from 'src/components/Header';
import CodeBox from 'src/components/Login/CodeBox';

// constants
import { FONTWEIGHT } from 'src/styles/variables';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';

// defs
import VerifyForm from './VerifyForm';

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: FONTWEIGHT.SEMIBOLD,
  },
  div: {
    marginLeft: theme.spacing(2),
    flex: '1 1 auto',
  },
}));

interface IVerifyMobileProps {
  location: {
    state: {
      country_code: string;
      phone: string;
      app_signature: string;
    };
  };
  className?: string;
  buttonContainerClassName?: string;
}

const VerifyMobilePropsDefaults: IVerifyMobileProps = {
  location: {
    state: {
      country_code: '',
      phone: '',
      app_signature: '',
    },
  },
  className: '',
  buttonContainerClassName: '',
};

function VerifyMobile(props: IVerifyMobileProps) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const state = props.location.state || VerifyMobilePropsDefaults;

  return (
    <>
      <Header />
      <CodeBox>
        <div className={classes.div}>
          {t('login_code_sent', {
            'phone number': state.country_code + ' ' + state.phone,
          })}
        </div>
        <div className={`${classes.div} ${classes.link}`}>
          <Link href="/login"> {t('login_edit_number')}</Link>
        </div>
      </CodeBox>
      <VerifyForm
        className={props.className}
        buttonContainerClassName={props.buttonContainerClassName}
        location={props.location}
      />
    </>
  );
}

export default VerifyMobile;
