// libs
import React, { memo, useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//material components
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

// components
import SearchHighlightedText from 'src/components/Book/desktop/components/Search/SearchHighlightedText';

// styles
const useStyles = makeStyles({
  tooltip: {
    fontSize: '14px',
    opacity: 1,
  },
});

interface ITextOverflowToolTip {
  text: string;
  className?: string;
  placement?:
    | 'top-start'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top'
    | undefined;
  arrow?: boolean;
  isSearchResult?: boolean;
}

function TextOverflowTooltip({
  text,
  className,
  placement,
  arrow,
  isSearchResult,
}: ITextOverflowToolTip) {
  const classes = useStyles();
  const textRef = useRef<HTMLDivElement>(null);
  const [hoverStatus, setHover] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (textRef.current) {
        setHover(textRef?.current.scrollWidth > textRef?.current.clientWidth);
      }
    }, 1000); // wait 1 second to make sure the child component is rendered
  }, [textRef]);
  return (
    <Tooltip
      title={text}
      disableHoverListener={!hoverStatus}
      placement={placement || 'top-start'}
      arrow
      TransitionComponent={(props) => <Fade {...props} timeout={0} />}
      classes={{ tooltip: classes.tooltip }}
    >
      <Typography ref={textRef} className={className}>
        {isSearchResult ? (
          <SearchHighlightedText text={text} className={className} />
        ) : (
          text
        )}
      </Typography>
    </Tooltip>
  );
}
export default memo(TextOverflowTooltip);
