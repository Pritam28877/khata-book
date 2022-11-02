import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// constants
import { PIXEL_SIZE, COLORS } from 'src/styles/variables';
import { countries, ICountryType } from 'src/constants/country-codes';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: `${PIXEL_SIZE['12px']}rem`,
    // marginRight: "60px"
  },
  img: {
    marginRight: theme.spacing(1),
  },
  countryCode: {
    display: 'flex',
    alignSelf: 'center',
    color: `${COLORS.BASE_FONT}`,
    fontSize: `${PIXEL_SIZE['12px']}rem`,
  },
  div: {
    display: 'flex',
    alignSelf: 'center',
  },
  option: {
    fontSize: 15,
    width: '300px',
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  dropdownRoot: {
    width: '100px',
  },
  dropdownOption: {
    width: '300px',
  },
  input: {},
  inputRoot: {
    padding: `${theme.spacing(0, 0.5)}!important`,
  },
  listBox: {
    width: '300px',
  },
  inputAdornedStart: {
    padding: theme.spacing(0),
  },
}));

interface IPhoneCountrySelector {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  className?: string;
}

// ISO 3166-1 alpha-2
// // ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

function PhoneCountrySelector(props: IPhoneCountrySelector) {
  const { className, onChange, name } = props;
  const classes = useStyles();

  const handleChange = (e: any, value: any) => {
    onChange({
      ...e,
      target: {
        name,
        value: value?.phone,
      },
    });
  };

  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      fullWidth={false}
      forcePopupIcon={false}
      closeIcon={false}
      defaultValue={countries.filter((x) => x.phone === '+91')[0]}
      onChange={handleChange}
      classes={{
        option: classes.option,
        root: classes.dropdownRoot,
        listbox: classes.listBox,
        inputRoot: classes.inputRoot,
        groupUl: classes.dropdownOption,
        popper: classes.dropdownOption,
      }}
      getOptionLabel={(option: ICountryType) =>
        `${countryToFlag(option.code)}${option.phone}`
      }
      renderOption={(option: ICountryType) => (
        <div className={classes.dropdownOption}>
          <span>{countryToFlag(option.code)}</span>
          {option.phone}
        </div>
      )}
      renderInput={(params: any) => {
        return (
          <TextField
            {...params}
            className={`${className} ${classes.input}`}
            classes={{}}
            // label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        );
      }}
    />
  );
}

export default memo(PhoneCountrySelector);
