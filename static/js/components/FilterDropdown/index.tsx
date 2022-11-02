// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// constants
import {
  COLORS_THEME,
  FONTWEIGHT,
  COLORS,
  BORDER_STYLES,
} from 'src/styles/variables';

// icons
import ArrowIcon from 'src/components/Book/desktop/components/icons/ArrowIcon';

//contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

// helpers
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    borderRadius: '6px',
    '& .MuiAutocomplete-inputRoot': {
      padding: '6px',
      '& .MuiAutocomplete-endAdornment': {
        top: 'unset',
        right: '8px',
      },
    },
    '& .MuiIconButton-root:hover': {
      backgroundColor: 'transparent',
    },
  },
  focused: {
    backgroundColor: COLORS.LIGHT_BLUE,
    '& $dropdownInput': {
      '& .MuiOutlinedInput-input': {
        backgroundColor: COLORS.LIGHT_BLUE,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1.5px solid ${COLORS_THEME.SECONDARY70}`,
      },
    },
  },
  dropdownInput: {
    '& ::placeholder': {
      opacity: 1,
      color: COLORS_THEME.SECONDARY2,
      fontWeight: 500,
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-input': {
      height: '20px',
      fontSize: '14px',
      width: '107px',
      fontWeight: 500,
      color: COLORS_THEME.SECONDARY2,
      backgroundColor: 'transparent',
      padding: '0 0 0 8px !important',
      cursor: 'pointer',
    },

    '& .MuiOutlinedInput-root': {
      cursor: 'pointer',
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `${BORDER_STYLES.INPUT_HOVER_BORDER} !important`,
        },
      },
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      paddingRight: '18px !important',
    },

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0',
        boxShadow: COLORS_THEME.PAPER_SHADOW,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ECEEF1',
      boxSizing: 'border-box',
      borderRadius: '8px',
    },
  },
  popupIcon: {
    width: '10px',
    height: '5px',
    transform: 'rotate(180deg)',
  },
  dropdownListPaper: {
    width: '100%',
    maxHeight: '256px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.18)',
    borderRadius: '8px',
    marginTop: '8px',
    backgroundColor: COLORS_THEME.WHITE,
  },
  listBox: {
    width: '100%',
    maxHeight: '256px',
    padding: '10px 8px',
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    '& .MuiAutocomplete-option': {
      padding: '10px 6px',
      borderRadius: '4px',
    },
    '& .MuiAutocomplete-option[data-focus="true"]': {
      backgroundColor: COLORS.LIGHT_BLUE,
      color: COLORS_THEME.SECONDARY2,
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: COLORS.LIGHT_BLUE,
      color: COLORS_THEME.SECONDARY2,
    },
  },
  noPadding: {
    paddingRight: '0',
  },
  dropdownOption: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    fontSize: '15px',
  },
  optionLeftSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    borderRadius: '12px',
    padding: theme.spacing(1),
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS_THEME.MID_BLUE,
    fontSize: '11px',
    backgroundColor: 'rgba(38, 102, 184, 0.1)',
    fontWeight: FONTWEIGHT.SEMIBOLD,
  },
  labelText: {
    marginLeft: '16px',
    fontSize: '14px',
  },
  startAdornmentWrapper: {
    display: 'flex',
  },
  filterText: {
    fontSize: '14px',
    color: COLORS_THEME.TEXT_DISABLED,
  },
  homeRoot: {
    backgroundColor: COLORS_THEME.WHITE,
  },
  homepageInput: {
    '& ::placeholder': {
      color: COLORS_THEME.TEXT_GREY,
    },
    '& .MuiOutlinedInput-input': {
      color: COLORS_THEME.TEXT_GREY,
      backgroundColor: COLORS_THEME.WHITE,
    },
  },
  longTextStyle: {
    fontSize: '12px',
  },
}));
interface IOptionConfig {
  name: string;
  label: string;
}

interface IFilterDropdown {
  fullWidth?: boolean;
  label?: string;
  defaultValue?: string;
  options: IOptionConfig[];
  selected?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (filter: any) => void;
  adornmentIcon?: string;
  id?: string;
  filterText: string;
  isFocused?: boolean;
  className?: string;
  handleClick?: () => void;
  isHomePageFilter?: boolean;
}

function FilterDropdown({
  fullWidth,
  label,
  options,
  selected,
  handleChange,
  handleClick,
  adornmentIcon,
  id,
  filterText,
  isFocused,
  className,
  isHomePageFilter,
}: IFilterDropdown) {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const translatedOptions = options.map((option) => ({
    ...option,
    label: t(option.label),
  }));

  const longTextClass = isLongWordsLanguageSelected()
    ? classes.longTextStyle
    : '';

  const autoCompleteClass = `
${classes.root} ${isFocused ? classes.focused : ''} ${
    isHomePageFilter ? classes.homeRoot : ''
  }`;

  const textFieldClass = `${classes.dropdownInput} ${
    isHomePageFilter ? classes.homepageInput : ''
  } ${longTextClass}`;

  const onChange = (
    event: React.ChangeEvent<{}>,
    value: IOptionConfig | null
  ) => {
    handleChange(value?.name);
  };
  const RenderDropDownPaper = (props: object) => {
    return <Paper {...props} className={classes.dropdownListPaper} />;
  };
  const getSelected = () => {
    if (!selected) return null;
    return translatedOptions.find((option) => option.name === selected);
  };

  return (
    <div className={className}>
      <Autocomplete
        id={id || 'drop-down'}
        options={translatedOptions}
        fullWidth={fullWidth}
        forcePopupIcon={true}
        closeIcon={false}
        openOnFocus
        selectOnFocus={false}
        popupIcon={
          <ArrowIcon
            stroke={
              isHomePageFilter
                ? COLORS_THEME.DARK_GREY
                : COLORS_THEME.SECONDARY70
            }
            className={classes.popupIcon}
          />
        }
        onChange={onChange}
        value={getSelected() || null}
        className={autoCompleteClass}
        classes={{
          listbox: classes.listBox,
          groupUl: classes.dropdownOption,
          popper: classes.dropdownOption,
        }}
        PaperComponent={RenderDropDownPaper}
        getOptionLabel={(option: IOptionConfig) => `${t(option.label)}`}
        renderOption={(option: IOptionConfig) => (
          <div className={classes.dropdownOption}>
            <div className={classes.optionLeftSide}>{t(option.label)}</div>
          </div>
        )}
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        renderInput={(params: any) => {
          return (
            <TextField
              {...params}
              onClick={handleClick}
              className={textFieldClass}
              id="text"
              placeholder={label}
              fullWidth
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <div className={classes.startAdornmentWrapper}>
                    {adornmentIcon && <img src={adornmentIcon} alt="filter" />}
                    <Typography
                      className={`${classes.filterText} ${longTextClass}`}
                    >
                      {filterText}:
                    </Typography>
                  </div>
                ),

                autoComplete: 'new-password', // disable autocomplete and autofill
                readOnly: true,
              }}
            />
          );
        }}
      />
    </div>
  );
}
export default memo(FilterDropdown);
