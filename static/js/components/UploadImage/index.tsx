// libs
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';

// material components
import Typography from '@material-ui/core/Typography';

// contexts
import { useLanguageContext } from '@components/LanguageProvider/context';

//constants
import { COLORS_THEME } from 'src/styles/variables';

// helpers
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

const useStyles = makeStyles((theme) => ({
  dropZone: {
    display: 'flex',
    alignItems: 'center',
  },
  addPhotoButton: {
    padding: '7px 9px',
    fontSize: '18px',
    marginRight: '8px',
    cursor: 'pointer',
  },
  uploadPhotoButton: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    height: '32px',
    border: 'none',
    padding: '0 24px',
    cursor: 'pointer',
  },
  fileName: {
    fontSize: '18px',
    color: COLORS_THEME.TEXT_GREY,
    wordBreak: 'break-word',
  },
  reducedText: {
    fontSize: '12px',
    whiteSpace: 'nowrap',
    padding: '0 12px',
  },
}));

interface IUploadImage {
  onImageUpload: (file: File) => void;
  selectedImageUrl?: string;
  type?: string;
}

function UploadImage({ onImageUpload, selectedImageUrl, type }: IUploadImage) {
  const isProfile: boolean = type === 'profileForm';
  const { t } = useLanguageContext();
  const classes = useStyles();
  const btnClasses = useButtonStyles();

  const buttonClass = isLongWordsLanguageSelected() ? classes.reducedText : '';

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: false,
    onDrop: (files) => {
      if (files[0]) onImageUpload(files[0]);
    },
    accept: isProfile ? ['.jpeg', '.jpg'] : ['.png', '.jpeg', '.jpg'],
  });

  return (
    <div {...getRootProps({ className: classes.dropZone })}>
      <input {...getInputProps()} />
      <button
        type="button"
        onClick={open}
        className={`${btnClasses.paleSecondaryBtn} ${
          isProfile ? classes.uploadPhotoButton : classes.addPhotoButton
        } ${buttonClass}`}
      >
        {selectedImageUrl?.length ? t('change_photo') : t('upload_photo')}
      </button>
      {isProfile ? null : (
        <Typography className={classes.fileName}>
          {acceptedFiles.length && selectedImageUrl?.length
            ? acceptedFiles[0].name
            : t('no_chosen_file')}
        </Typography>
      )}
    </div>
  );
}
export default memo(UploadImage);
