// libs
import React, { memo, useState, ChangeEvent, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material components
import InputBase from '@material-ui/core/InputBase';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// components
import SearchResultsMenu from './SearchResultsMenu';

// icons
import searchIcon from 'src/assets/images/search.svg';

// constants
import { COLORS_THEME, COLORS } from '@styles/variables';
import { SEARCH_OPTIONS, SEARCH_TYPE_KEY } from './constants';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { useSearchContext } from '@components/SearchProvider/context';

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: 'rgba(184 196, 206,0.1)',
    height: '32px',
    width: '100%',
    maxWidth: '417px',
    display: 'flex',
    alignItems: 'center',
    color: COLORS_THEME.TEXT_GREY,
    borderRadius: '6px',
    position: 'relative',
    border: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY}`,
  },
  searchIcon: {
    position: 'absolute',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '142px',
    width: '14px',
    height: '14px',
  },
  inputRoot: {
    paddingLeft: '30px',
    maxWidth: '284px',
    width: '100%',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: '216px',
  },
  clearIcon: {
    position: 'absolute',
    width: '18px',
    height: '18px',
    right: '16px',
    color: '#DBE0E5',
    cursor: 'pointer',
  },
  autoCompleteClass: {
    backgroundColor: COLORS_THEME.LIGHT_GREY,
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
    cursor: 'pointer',
    height: '100%',
    borderRight: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY}`,
  },
  dropdownInput: {
    '& ::placeholder': {
      opacity: 1,
      color: COLORS_THEME.MEDIUM_DARK_GREY,
      fontWeight: 'normal',
      fontSize: '16px',
    },
    '& .MuiOutlinedInput-input': {
      height: '16px',
      fontSize: '14px',
      width: '86px',
      fontWeight: 'normal',
      color: COLORS_THEME.MEDIUM_DARK_GREY,
      backgroundColor: 'transparent',
      padding: '0 0 0 8px !important',
      cursor: 'pointer',
    },

    '& .MuiOutlinedInput-root': {
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'none',
        },
      },
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      paddingRight: '30px !important',
      padding: '7px',
    },

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS_THEME.SECONDARY70,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0',
      boxSizing: 'border-box',
    },
  },
  dropdownPopper: {
    '& .MuiAutocomplete-paper': {
      width: '174px',
      boxShadow: COLORS_THEME.GREY_SHADOW,
    },
  },

  listBox: {
    width: '174px',
    padding: '8px 0px',
    '& .MuiAutocomplete-option': {
      padding: '8px 12px',
    },
    '& .MuiAutocomplete-option[data-focus="true"]': {
      backgroundColor: COLORS.LIGHT_BLUE,
      color: COLORS_THEME.SECONDARY2,
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: COLORS.LIGHT_BLUE,
    },
  },
  dropdownOption: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    fontSize: '15px',
    color: COLORS_THEME.MID_BLUE,
  },
}));

function SearchBar() {
  const classes = useStyles();
  const { t } = useLanguageContext();
  const { searchText, setSearchText } = useSearchContext();

  const [selectedSearchOption, setSelectedSearchOption] = useState(
    localStorage.getItem(SEARCH_TYPE_KEY) || SEARCH_OPTIONS[0]
  );
  const [openSearchResults, setOpenSearchResults] = useState(false);

  const resultsRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    setOpenSearchResults(false);
    setSearchText('');
  };

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const search = e?.currentTarget?.value;
    setSearchText(search);
    if (search.length > 0 && !openSearchResults) {
      setOpenSearchResults(true);
    } else if (searchText.length === 0 && openSearchResults) {
      setOpenSearchResults(false);
    }
  };

  const handleSearchOptionChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value) {
      setSelectedSearchOption(value);
      localStorage.setItem(SEARCH_TYPE_KEY, value);
      clearSearch();
    }
  };

  const handleCloseResultsMenu = (event: React.MouseEvent<EventTarget>) => {
    if (
      resultsRef.current &&
      resultsRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpenSearchResults(false);
  };

  const handleCloseResults = () => {
    setOpenSearchResults(false);
  };

  return (
    <div className={classes.search}>
      <Autocomplete
        options={SEARCH_OPTIONS}
        forcePopupIcon={true}
        closeIcon={false}
        disableClearable
        openOnFocus
        selectOnFocus={false}
        onChange={handleSearchOptionChange}
        value={selectedSearchOption}
        className={classes.autoCompleteClass}
        classes={{
          listbox: classes.listBox,
          groupUl: classes.dropdownOption,
          popper: classes.dropdownPopper,
        }}
        getOptionLabel={(option: string) => t(option, [''])}
        renderOption={(option: string) => <div>{t(option, [''])}</div>}
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        renderInput={(params: any) => {
          return (
            <TextField
              {...params}
              className={classes.dropdownInput}
              id="text"
              variant="outlined"
              fullWidth
              InputProps={{
                ...params.InputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
                readOnly: true,
              }}
            />
          );
        }}
      />
      <div className={classes.searchIcon}>
        <img src={searchIcon} alt="search" />
      </div>
      <InputBase
        placeholder={`${t('search')}…`}
        onChange={handleSearch}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={searchText}
        ref={resultsRef}
      />
      <SearchResultsMenu
        open={openSearchResults}
        anchorEl={resultsRef}
        handleCloseMenu={handleCloseResults}
        handleClickAway={handleCloseResultsMenu}
        searchType={selectedSearchOption}
        searchText={searchText}
      />
      {searchText.length > 0 && (
        <CancelRoundedIcon
          className={classes.clearIcon}
          onClick={clearSearch}
        />
      )}
    </div>
  );
}
export default memo(SearchBar);
