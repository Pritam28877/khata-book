// libs
import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// material components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Badge from '@material-ui/core/Badge';
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import TextInputField from 'src/components/TextInputField';
import UploadImage from 'src/components/UploadImage';
import ResizeImageModal from 'src/components/ResizeImageModal';
import DeletionConfirmationModal from '@components/DeletionConfirmationModal';
import SaveChangesModal from './SaveChangesModal';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import { BOOKS_URI, LOGIN_URI } from 'src/constants/url';
import { MAX_BOOK_NAME_LENGTH } from 'src/constants/book';

// selectors
import { useAppState } from 'src/store/app/selectors';

// defs
import { IBookValue } from 'src/webWorkers/DB/types';
import { IAttachmentInfo } from 'src/components/Settings/types';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { optimizeImage } from '@components/Customer/TransactionForm/components/helpers';

// worker api
import workerApi from 'src/webWorkers/Api';

// actions
import { useAppActions } from 'src/store/app/actions';

// icons
import BinIcon from 'src/components/Settings/desktop/components/icons/BinIcon';

// contexts
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import {
  onProfileSaveClick,
  onProfileSaveConfirmClick,
} from '@components/Profile/analytics';

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '512px',
    padding: '56px',
    borderRadius: '8px',
    backgroundColor: COLORS_THEME.WHITE,
    boxShadow: COLORS_THEME.PAPER_SHADOW,
    margin: 'auto',
    '@media only screen and (max-width: 1440px)': {
      padding: '24px 56px',
    },
  },
  from: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignContent: 'center',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarBorder: {
    width: '158px',
    height: '158px',
    border: `2px solid ${COLORS_THEME.MID_BLUE}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
  },
  avatar: {
    width: '142px',
    height: '142px',
    backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
    fontSize: '38px',
    color: COLORS_THEME.MID_PRIMARY,
  },
  badgeAnchor: {
    bottom: '11%',
  },
  deleteImageButton: {
    width: '34px',
    height: '34px',
    borderRadius: '17px',
    backgroundColor: COLORS_THEME.WHITE,
    border: 'none',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
    padding: '8px 9px',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'default',
    },
    '@media only screen and (max-width: 1440px)': {
      width: '24px',
      height: '24px',
      padding: '3px 4px',
    },
  },
  editPhotoButton: {
    padding: '10px 32px',
    borderRadius: '10px',
    boxShadow: 'none',
    backgroundColor: COLORS_THEME.LIGHT_BLUE,
    fontSize: '16px',
    fontWeight: 500,
    color: COLORS_THEME.SECONDARY_COLOR,
    textTransform: 'capitalize',
    margin: '24px 0 48px 0',
    '@media only screen and (max-width: 1440px)': {
      margin: '14px 0',
    },
  },
  fieldset: {
    marginBottom: '24px',
    '@media only screen and (max-width: 1440px)': {
      marginBottom: '14px',
    },
  },
  fieldsetText: {
    fontSize: '18px',
    color: COLORS_THEME.TEXT_GREY,
    marginBottom: '16px',
    '@media only screen and (max-width: 1440px)': {
      marginBottom: '8px',
      fontSize: '16px',
    },
  },
  disabledText: {
    color: COLORS_THEME.GREY_BORDER,
  },
  error: {
    margin: '13px 0',
  },

  saveButton: {
    borderRadius: '10px',
    padding: '16px 0',
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
    boxShadow: 'none',
    fontSize: '24px',
    fontWeight: 700,
    textTransform: 'capitalize',
    color: COLORS_THEME.WHITE,
    marginTop: '8px',
    '@media only screen and (max-width: 1440px)': {
      padding: '8px 0',
      fontSize: '20px',
    },
  },
  circularLoader: {
    margin: '0 auto',
  },
  formHeader: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '32px',
    textAlign: 'center',
    letterSpacing: '0.2px',
    color: '#2B2F32',
    marginBottom: '24px',
  },
}));

function EditProfileForm() {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useLanguageContext();
  const { getCurrentBook, getUserInfo, getDeviceInfo } = useAppState();
  const { setBook } = useAppActions();
  const book = getCurrentBook();
  const user = getUserInfo();
  const [hasError, setHasError] = useState(false);
  const [businessName, setBusinessName] = useState(book?.business_name || '');
  const [businessOwner, setBusinessOwner] = useState(
    book?.business_owner_name || ''
  );
  const [businessImage, setBusinessImage] = useState(
    book?.business_image || ''
  );
  //const [showUploadImage, setShowUploadImage] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<IAttachmentInfo>();
  const [openResizeImageModal, setOpenResizeImageModal] = useState(false);
  const [openDeleteImageModal, setOpenDeleteImageModal] = useState(false);
  const [openSaveChangesModal, setOpenSaveChangesModal] = useState(false);

  const shouldDisableButtons = isSubmitting || isUploading;
  const country_code = user?.country_code || '';
  const phone = user?.phone || '';

  const handleBusinessNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value.indexOf(' ') !== 0) {
      setBusinessName(value);
      if (hasError && value.trim().length > 0) {
        setHasError(false);
      }
    }
  };

  const handleBusinessOwnerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.indexOf(' ') !== 0) {
      setBusinessOwner(event.target.value);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (file === undefined) {
      return;
    }
    setIsUploading(true);
    const optimizedImage = await optimizeImage(file, file.name);
    const newFile = {
      preview: URL.createObjectURL(file),
      ...optimizedImage,
    };
    setBusinessImage(newFile.preview);
    setImageFile(newFile);
    setIsUploading(false);
  };

  const handleEditPhotoClick = async () => {
    if (imageFile) {
      setIsUploading(true);
      setBusinessImage(imageFile.preview);
      setImageFile(undefined);
    }
    setOpenResizeImageModal(true);
    setIsUploading(false);
  };

  const handleCloseDeleteImageModal = () => setOpenDeleteImageModal(false);

  const handleDeleteImage = () => {
    setBusinessImage('');
    setImageFile(undefined);
    setOpenDeleteImageModal(false);
  };

  const onDeleteImageClick = () => setOpenDeleteImageModal(true);

  const handleOpenSaveChangesModal = () => {
    onProfileSaveClick();
    if (businessName.trim().length === 0) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
      setOpenSaveChangesModal(true);
    }
  };

  const handleCloseSaveChangesModal = () => setOpenSaveChangesModal(false);

  const onSubmit = () => {
    setOpenSaveChangesModal(false);
    setIsSubmitting(true);
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    // analytics
    onProfileSaveConfirmClick({
      bookId: book?.book_id || '',
      bookName: businessName,
      businessOwnerName: businessOwner,
      image: businessImage,
    });

    workerApi
      .updateBook({
        bookId: book?.book_id || '',
        bookName: businessName,
        businessOwnerName: businessOwner,
        image: businessImage,
        imageFile,
        user,
        deviceInfo,
      })
      .then((book: IBookValue) => {
        setIsSubmitting(false);
        setBook(book);
        history.replace(BOOKS_URI);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        // TODO - show error screen
      });
  };

  const onEditComplete = async (blob: Blob) => {
    const file = new File([blob], 'edited-book-profile-picture.jpg', {
      type: 'image/jpg',
    });

    handleImageUpload(file);
  };

  return (
    <div className={classes.root}>
      <form className={classes.from} onSubmit={onSubmit}>
        <Typography className={classes.formHeader}>{t('profile')}</Typography>
        <div className={classes.avatarWrapper}>
          <div className={classes.avatarBorder}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              classes={{ anchorOriginBottomRightCircle: classes.badgeAnchor }}
              badgeContent={
                businessImage && (
                  <button
                    className={classes.deleteImageButton}
                    type="button"
                    onClick={onDeleteImageClick}
                    disabled={shouldDisableButtons}
                  >
                    <BinIcon
                      width={15}
                      height={18}
                      stroke={
                        shouldDisableButtons
                          ? COLORS_THEME.GREY_BORDER
                          : COLORS_THEME.PRIMARY_COLOR
                      }
                    />
                  </button>
                )
              }
            >
              <Avatar className={classes.avatar} src={businessImage}>
                {getInitials(businessName)}
              </Avatar>
            </Badge>
          </div>
          <UploadImage
            onImageUpload={async (file) => {
              await handleImageUpload(file);
              handleEditPhotoClick();
            }}
            selectedImageUrl={businessImage}
            type="profileForm"
          />
          <ResizeImageModal
            open={openResizeImageModal}
            imageUrl={businessImage}
            onEditComplete={onEditComplete}
            onClose={() => setOpenResizeImageModal(false)}
          />
        </div>
        <div className={classes.fieldset}>
          <Typography className={classes.fieldsetText}>
            {t('your_name')}
          </Typography>
          <TextInputField
            name="businessOwner"
            value={businessOwner}
            autoComplete="off"
            placeholder={t('your_name')}
            onChangeHandler={handleBusinessOwnerChange}
            maxLength={MAX_BOOK_NAME_LENGTH}
          />
        </div>
        <div className={classes.fieldset}>
          <Typography className={classes.fieldsetText}>
            {t('business_name')}
          </Typography>
          <TextInputField
            name="businessName"
            value={businessName}
            autoComplete="off"
            placeholder={t('business_name')}
            onChangeHandler={handleBusinessNameChange}
            maxLength={MAX_BOOK_NAME_LENGTH}
            error={hasError}
          />
          {hasError && (
            <FormHelperText className={classes.error} error>
              Enter a valid name
            </FormHelperText>
          )}
        </div>
        <div className={classes.fieldset}>
          <Typography
            className={`${classes.fieldsetText} ${classes.disabledText}`}
          >
            {t('registered_phone_number')}
          </Typography>
          <TextInputField
            name=""
            value={country_code + phone}
            autoComplete="off"
            placeholder=""
            disabled
          />
        </div>
        {shouldDisableButtons && (
          <CircularProgress className={classes.circularLoader} />
        )}
        <Button
          onClick={handleOpenSaveChangesModal}
          color="primary"
          variant="contained"
          className={classes.saveButton}
          disabled={hasError || shouldDisableButtons}
        >
          {t('save')}
        </Button>
      </form>
      <DeletionConfirmationModal
        open={openDeleteImageModal}
        onClose={handleCloseDeleteImageModal}
        secondaryAction={handleCloseDeleteImageModal}
        primaryAction={handleDeleteImage}
        secondaryActionText={t('cancel')}
        primaryActionText={t('delete')}
        title={t('delete_photo')}
        confirmationText={t('sure_you_want_to_delete_your_photo')}
      />
      <SaveChangesModal
        open={openSaveChangesModal}
        onClose={handleCloseSaveChangesModal}
        handleSave={onSubmit}
      />
    </div>
  );
}
export default memo(EditProfileForm);
