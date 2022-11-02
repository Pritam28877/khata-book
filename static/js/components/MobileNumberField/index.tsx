import React, { useState, memo, useEffect, useRef } from 'react';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import PhoneCountrySelector from './PhoneCountrySelector';

import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { INPUT_MODE, PATTERNS } from 'src/components/Login/constants';
import { countries, ICountryType } from 'src/constants/country-codes';
import { countryToFlag, isWindowsOS } from 'src/helpers/utils';
import ArrowIcon from 'src/components/Book/desktop/components/icons/ArrowIcon';
import errorIcon from 'src/assets/images/errorIcon.svg';

import useStyles from './styles';
import { ClickAwayListener } from '@material-ui/core';

const ReactCountryFlag = React.lazy(
  //@ts-ignore
  () => isWindowsOS() && import('react-country-flag')
);

interface IHashMap {
  [key: string]: string | undefined | boolean;
}

interface IMobileNumberField {
  values: IHashMap;
  errors: IHashMap;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryCodeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showNetworkError?: boolean;
  onCountrySelectorClick?: () => void;
  onCountrySelect?: () => void;
  shouldReset?: boolean;
  className?: string;
  disabled?: boolean;
  disableNonIndianCountries?: boolean;
}

const inputProps: { [key: string]: string } = {
  inputMode: INPUT_MODE.NUMERIC,
  pattern: PATTERNS.NUMBER_ONLY,
};

const MobileNumberField = ({
  values,
  errors,
  handleChange,
  handleCountryCodeChange,
  showNetworkError,
  onCountrySelectorClick,
  onCountrySelect,
  shouldReset,
  className,
  disabled,
  disableNonIndianCountries,
}: IMobileNumberField) => {
  const [openCountrySelector, setOpenCountrySelector] = React.useState(false);

  const countrySelectorAnchor = useRef<HTMLButtonElement>(null);
  const [networkError, setNetworkError] = useState('');

  const classes = useStyles();
  const { t } = useLanguageContext();

  const handleCountrySelectorClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setOpenCountrySelector((prevOpen) => !prevOpen);
    // analytics
    if (onCountrySelectorClick) onCountrySelectorClick();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCountryChange = (e: any, value: any) => {
    setCountryValue(value);
    handleCountryCodeChange &&
      handleCountryCodeChange({
        ...e,
        target: {
          name: 'country_code',
          value: value?.phone,
        },
      });
    // analytics
    if (onCountrySelect) onCountrySelect();
  };

  const handleClickAway = () => {
    setOpenCountrySelector(false);
  };

  useEffect(() => {
    if (!window.navigator.onLine) {
      setNetworkError('Network error, please retry');
    } else {
      setNetworkError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.navigator.onLine]);

  const getSelectedCountryCode = () => {
    const selected_country_code = values.country_code;
    if (!selected_country_code) {
      return null;
    }
    return countries.find((option) => option.phone === selected_country_code);
  };

  const [countryValue, setCountryValue] = useState<ICountryType>(
    getSelectedCountryCode() || countries[0]
  );

  return (
    <FormControl
      className={`${classes.mobileNumberField} ${className} ${
        disabled && classes.disabledField
      }`}
      fullWidth
      variant="outlined"
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <OutlinedInput
          error={errors.phone || showNetworkError ? true : false}
          inputProps={inputProps}
          id="phone"
          name="phone"
          value={shouldReset ? '' : values.phone || ''}
          onChange={handleChange}
          autoComplete="off"
          placeholder={t('mobile_number_placeholder')}
          className={`${classes.mobileNumberInput} ${
            openCountrySelector && 'Mui-focused'
          }`}
          disabled={disabled}
          startAdornment={
            <InputAdornment
              className={classes.countryAdornment}
              position="start"
            >
              <button
                className={classes.openSelectorButton}
                onClick={handleCountrySelectorClick}
                type="button"
                ref={countrySelectorAnchor}
                disabled={disabled}
              >
                <span className={classes.flag}>
                  {countryValue?.code &&
                    (isWindowsOS() ? (
                      <ReactCountryFlag countryCode={countryValue.code} svg />
                    ) : (
                      countryToFlag(countryValue.code)
                    ))}
                </span>
                <Typography className={classes.countryText}>
                  {countryValue?.phone && countryValue.phone}
                </Typography>

                <ArrowIcon
                  className={`${classes.arrowIcon} ${
                    !openCountrySelector && classes.rotateArrow
                  } ${disabled && classes.disabledArrow}`}
                  stroke={disabled ? '#94979B' : undefined}
                />
              </button>
              <Popper
                id="simple-menu"
                anchorEl={countrySelectorAnchor.current}
                open={openCountrySelector}
                className={classes.popper}
                disablePortal={true}
                placement="bottom-start"
              >
                <PhoneCountrySelector
                  className="countrySelect"
                  onChange={handleCountryChange}
                  name={'country_code'}
                  openList={openCountrySelector}
                  selectedCountryCode={getSelectedCountryCode()}
                  handleCountryClick={handleClickAway} //to close the country selector whenever the user clicks on any country
                  disabled={disabled}
                  disableNonIndianCountries={disableNonIndianCountries}
                />
              </Popper>
            </InputAdornment>
          }
          endAdornment={
            (errors.phone || showNetworkError) && (
              <img src={errorIcon} alt="error" />
            )
          }
        />
      </ClickAwayListener>
      {(errors.phone || showNetworkError) &&
        (networkError.length ? (
          <FormHelperText error>Network error, please retry</FormHelperText>
        ) : (
          <FormHelperText error>
            {values.country_code === '+91' || !values.country_code
              ? t('login_incorrect_10digit_number')
              : t('enter_valid_mobile_number')}
          </FormHelperText>
        ))}
    </FormControl>
  );
};

export default memo(MobileNumberField);
