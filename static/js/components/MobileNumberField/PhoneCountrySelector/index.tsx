import React, { memo } from 'react';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { countries, ICountryType } from 'src/constants/country-codes';
import { INDIAN_COUNTRY_CODE } from 'src/constants/phone';
import { countryToFlag, isWindowsOS } from 'src/helpers/utils';
import searchIcon from 'src/assets/images/search.svg';

import useStyles from './styles';

const ReactCountryFlag = React.lazy(
  //@ts-ignore
  () => isWindowsOS() && import('react-country-flag')
);

interface IPhoneCountrySelector {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange(e: any, value: any): void;
  name: string;
  className?: string;
  openList: boolean;
  selectedCountryCode?: ICountryType | undefined | null;
  handleCountryClick: () => void;
  disabled?: boolean;
  disableNonIndianCountries?: boolean;
}

function PhoneCountrySelector(props: IPhoneCountrySelector) {
  const {
    className,
    onChange,
    openList,
    selectedCountryCode,
    handleCountryClick,
    disabled,
    disableNonIndianCountries,
  } = props;
  const classes = useStyles();

  // filter by country name or phone
  const filterOptions = createFilterOptions({
    stringify: (option: ICountryType) => `${option.phone} ${option.label}`,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any, value: any) => {
    onChange(e, value);
  };

  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      fullWidth={false}
      forcePopupIcon={false}
      closeIcon={false}
      onChange={handleChange}
      open={openList}
      value={selectedCountryCode || null}
      disablePortal={true}
      className={classes.autoComplete}
      disabled={disabled}
      filterOptions={filterOptions}
      classes={{
        option: classes.option,
        listbox: classes.listBox,
        inputRoot: classes.inputRoot,
        groupUl: classes.dropdownOption,
        popper: classes.dropdownOption,
        popperDisablePortal: classes.popperDisablePortal,
      }}
      getOptionLabel={(option: ICountryType) => {
        if (isWindowsOS()) {
          return `${option.phone}`;
        }
        return `${countryToFlag(option.code)} ${option.phone}`;
      }}
      getOptionDisabled={(option: ICountryType) => {
        if (disableNonIndianCountries) {
          return option.phone !== INDIAN_COUNTRY_CODE;
        }
        return false;
      }}
      renderOption={(option: ICountryType) => (
        <div className={classes.dropdownOption} onClick={handleCountryClick}>
          <span className={classes.flag}>
            {option?.code &&
              (isWindowsOS() ? (
                <ReactCountryFlag countryCode={option.code} svg />
              ) : (
                countryToFlag(option.code)
              ))}
          </span>
          <Typography className={classes.countryText}>
            {` ${option?.label && option.label} (${
              option?.phone && option.phone
            })`}
          </Typography>
        </div>
      )}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderInput={(params: any) => {
        return (
          <TextField
            {...params}
            className={`${className} ${classes.input}`}
            classes={{}}
            placeholder="Search country"
            variant="outlined"
            value={selectedCountryCode?.phone || '+91'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={searchIcon} alt="search" />
                </InputAdornment>
              ),
            }}
            inputProps={{
              ...params.inputProps,
            }}
            ref={params.InputProps.ref}
            autoFocus
          />
        );
      }}
    />
  );
}

export default memo(PhoneCountrySelector);
