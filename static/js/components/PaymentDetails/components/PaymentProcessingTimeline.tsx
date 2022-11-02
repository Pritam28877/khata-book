// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

// icons
import CompletedIcon from './icons/CompletedIcon';
import PendingIcon from './icons/PendingIcon';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import {
  JOURNEY_STATUSES,
  JOURNEY_TYPES,
} from '@components/PaymentHistory/constants';
import { PAYMENTS_TRANSACTIONS_TYPES } from '@components/PaymentHistory/constants';

// defs
import { IJourney } from 'src/types/payments';

// helpers
import { getDateTime } from 'src/helpers/utils/time';
import { useLanguageContext } from '@components/LanguageProvider/context';

// styles
const useStyles = makeStyles({
  paymentTimeline: {
    width: '100%',
    '& .MuiStepper-root': {
      padding: 'unset ',
    },
  },
  stepper: {
    backgroundColor: 'transparent',
    height: '100%',
    marginBottom: '16px',
    '& .Mui-active': {
      backgroundColor: 'yellow',
      '& .MuiStepConnector-line': {
        borderColor: 'red',
      },
    },
    '& .MuiStepConnector-lineHorizontal': {
      '& .Mui-active': {
        borderColor: 'red',
      },
      borderTopStyle: 'dotted',
      borderTopWidth: '4px',
      margin: '0 7px',
    },
    '& .MuiStepConnector-line': {
      borderColor: '#ECEEF1',
      height: '95%',
      '& .Mui-active': {
        borderColor: 'red',
      },
    },
    '& .MuiStepContent-root': {
      borderLeft: '4px dotted #ECEEF1',
    },
    '& .MuiStep-horizontal': {
      paddingLeft: 'unset',
      paddingRight: 'unset',
    },
  },
  step: {
    '&:last-child': {
      '& .MuiStepContent-root': {
        borderLeft: 'none',
      },
    },
    '& .MuiStepLabel-iconContainer': {
      paddingRight: 'unset',
    },
  },
  successStep: {
    '& + div': {
      '& .MuiStepConnector-line': {
        borderColor: '#3CB17C',
      },
    },
  },

  stepType: {
    color: COLORS_THEME.MEDIUM_GREY,
    fontSize: '16px',
    fontWeight: 500,
    marginTop: '16px',
  },
  successText: {
    color: COLORS_THEME.DARK_GREY,
  },
  date: {
    fontSize: '14px',
    color: COLORS_THEME.MEDIUM_GREY,
  },
});

interface IPaymentProcessingTimeline {
  transactionType: string;
  journey: IJourney[];
}

function PaymentProcessingTimeline({
  transactionType,
  journey,
}: IPaymentProcessingTimeline) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  let journeySliced = journey;
  if (transactionType === PAYMENTS_TRANSACTIONS_TYPES.QR) {
    journeySliced = journey.slice(1);
  } else if (transactionType === PAYMENTS_TRANSACTIONS_TYPES.GIFT) {
    journeySliced = journey.slice(2);
  }

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case JOURNEY_STATUSES.SUCCESS:
        return <CompletedIcon />;

      case JOURNEY_STATUSES.IN_PROGRESS:
        return <PendingIcon stroke="#3CB17C" />;

      default:
        return <PendingIcon />;
    }
  };

  const renderType = (type: string) => {
    switch (type) {
      case JOURNEY_TYPES.GENERATE:
        return t('link_generated');
      case JOURNEY_TYPES.DEPOSIT:
        return t('money_deposited');
      case JOURNEY_TYPES.PAY:
        return t('user_paid');
      case JOURNEY_TYPES.PAYOUT_INIT:
        return t('payment_initiated');
      case JOURNEY_TYPES.PAYMENT_PROCESSING:
        return t('payment_processing');
    }
  };
  const isActiveStep = (status: string) =>
    status === JOURNEY_STATUSES.SUCCESS ||
    status === JOURNEY_STATUSES.IN_PROGRESS;

  return (
    <div className={classes.paymentTimeline}>
      <Stepper className={classes.stepper} nonLinear={true} alternativeLabel>
        {journeySliced.map((step: IJourney) => (
          <Step
            active={isActiveStep(step.status)}
            key={step.type}
            className={`${classes.step} ${
              isActiveStep(step.status) ? classes.successStep : ''
            }`}
          >
            <StepLabel icon={renderStatusIcon(step.status)}>
              <Typography
                className={`${classes.stepType} ${
                  isActiveStep(step.status) ? classes.successText : ''
                }`}
              >
                {' '}
                {renderType(step.type)}
              </Typography>
              <Typography className={classes.date}>
                {getDateTime(step?.timestamp?.toString())}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
export default memo(PaymentProcessingTimeline);
