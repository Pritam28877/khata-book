// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// constants
import { COLORS_THEME } from 'src/styles/variables';

// context
import { useSearchContext } from '@components/SearchProvider/context';

// styles
const useStyles = makeStyles(() => ({
  highlightedText: {
    backgroundColor: COLORS_THEME.HIGHLIGHT_COLOR,
    padding: '0',
    borderRadius: '2px',
    fontWeight: 500,
    lineHeight: '15px',
  },
}));

interface ISearchHighlightedText {
  text: string;
  highlightStyle?: string;
  className?: string;
}

function SearchHighlightedText({
  text,
  highlightStyle,
}: ISearchHighlightedText) {
  const classes = useStyles();
  const { searchText } = useSearchContext();
  const isSearchApplied = searchText.length > 0;
  const textParts = isSearchApplied
    ? text.split(new RegExp(`(${searchText})`, 'gi'))
    : [];

  return (
    <>
      {isSearchApplied
        ? textParts.map((part, i) => (
            <span
              key={i}
              className={
                part.toLowerCase() === searchText.toLowerCase()
                  ? ` ${classes.highlightedText} ${highlightStyle}`
                  : ''
              }
            >
              {part}
            </span>
          ))
        : text}
    </>
  );
}
export default memo(SearchHighlightedText);
