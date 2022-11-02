// libs
import React, { memo, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// material components
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';
import Divider from '@material-ui/core/Divider';

// components
import TextInputField from 'src/components/TextInputField';
import MobileNumberField from 'src/components/MobileNumberField';
import UploadImage from 'src/components/UploadImage';
import ResizeImageModal from 'src/components/ResizeImageModal';
import CustomerErrorModal from '@components/Customer/AddCustomer/desktop/CustomerErrorModal';

// context
import { useLanguageContext } from 'src/components/LanguageProvider/context';
import { useErrorContext } from 'src/components/ErrorBoundary/context';

// constants
import { COLORS_THEME } from 'src/styles/variables';
import {
  MAX_ADDRESS_LANDMARK_LENGTH,
  MAX_ADDRESS_PIN_CODE_LENGTH,
  MAX_ADDRESS_FIELDS_LENGTH,
  EMPTY_CUSTOMER_ADDRESS,
} from 'src/constants/customers';
import { HOME_URI, LOGIN_URI } from 'src/constants/url';
import { SENTRY_TAG } from 'src/constants/sentry';

// defs
import { ICustomerValue } from '@webWorkers/DB/types';
import { IAttachmentInfo } from 'src/components/Settings/types';

// hooks
import useAddCustomer from 'src/components/Customer/AddCustomer/hooks/useAddCustomer';

// icons
import BinIcon from 'src/components/Book/desktop/components/icons/DeleteIcon';
import editCustomer from 'src/assets/images/editCustomer.svg';
import addressIcon from 'src/assets/images/address.svg';
import personalDetails from 'src/assets/images/personalDetails.svg';
import closeIcon from 'src/assets/images/closeModalIcon.svg';

// helpers
import { getInitials } from 'src/helpers/utils/name';
import { captureException } from 'src/helpers/sentry';
import { isExistingCustomer } from '@components/Customer/AddCustomer/CustomerFormValidationRules';
import { isAnEmptyAddress } from 'src/helpers/utils';
import { isLongWordsLanguageSelected } from 'src/helpers/locale';

// selectors
import { useAppState } from 'src/store/app/selectors';

// worker api
import workerApi from 'src/webWorkers/Api';
import { optimizeImage } from '@components/Customer/TransactionForm/components/helpers';

// analytics
import { onSaveCustomerClicked } from 'src/components/Customer/analytics';

// styles
import useButtonStyles from '@styles/ButtonsStyles';

const useStyles = makeStyles((theme) => ({
  modal: {
    height: '100%',
    display: 'flex',
  },
  paper: {
    position: 'relative',
    width: '696px',
    backgroundColor: COLORS_THEME.WHITE,
    borderRadius: '15px',
    boxShadow: COLORS_THEME.GREY_SHADOW,
    padding: '32px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '600px',
    margin: 'auto',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10px',
    marginBottom: '16px',
    borderBottom: `1px solid ${COLORS_THEME.LIGHT_MEDIUM_GREY}`,
  },
  editIcon: {
    width: '25px',
    height: '30px',
    marginRight: '11.5px',
  },
  closeIcon: {
    position: 'absolute',
    top: '36px',
    right: '40px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: COLORS_THEME.DARK_GREY,
  },
  form: {
    width: '100%',
    overflowY: 'auto',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: 'rgba(240, 242, 244, 0.73)',
    padding: '10px',
    marginBottom: '16px',
  },
  sectionIcon: {
    width: '12px',
    height: '12px',
    marginRight: '10px',
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(50% - 8px)',
  },
  fieldset: {
    marginBottom: '16px',
  },
  label: {
    fontSize: '18px',
    marginBottom: '16px',
    '@media only screen and (max-width: 1440px)': {
      marginBottom: '10px',
    },
  },
  uploadImageContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  deleteImageButton: {
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: COLORS_THEME.WHITE,
    border: 'none',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
    padding: '5px 6px',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'default',
    },
  },
  avatar: {
    width: '72px',
    height: '72px',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS_THEME.SECONDARY_COLOR,
  },
  uploadImageWrapper: {
    marginLeft: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  circularLoader: {
    margin: '25px 16px',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    height: '48px',
    padding: '0 23px',
    textTransform: 'capitalize',
  },
  saveButton: {
    padding: '0 30.5px',
    marginLeft: '16px',
  },
  error: {
    margin: '13px 0',
    fontSize: '16px',
    color: COLORS_THEME.PRIMARY_COLOR,
  },
  mobileNumberField: {
    '& .MuiOutlinedInput-input': {
      fontSize: '16px',
      height: '24px',
    },
    '& .MuiOutlinedInput-root': {
      padding: '8px',
    },
  },
  cityWrapper: {
    display: 'flex',
    '& > div:first-child': {
      marginRight: '16px',
    },
  },
  divider: {
    width: '100%',
    marginTop: '8px',
    marginBottom: '16px',
    backgroundColor: COLORS_THEME.LIGHT_MEDIUM_GREY,
  },
  deletePhotoBtn: {
    width: '137px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: 700,
    color: COLORS_THEME.MEDIUM_DARK_GREY,
    textTransform: 'capitalize',
    border: `1px solid ${COLORS_THEME.LIGHT_GREY}`,
    marginTop: '8px',
    '&:hover': {
      backgroundColor: COLORS_THEME.LIGHT_PRIMARY,
    },
  },
  deleteIcon: {
    marginRight: '8px',
  },
  reducedText: {
    fontSize: '12px',
    whiteSpace: 'nowrap',
    padding: '0 12px',
  },
  reducedMargin: {
    marginLeft: '12px',
  },
}));
interface IEditCustomerModal {
  open: boolean;
  onClose: VoidFunction;
  customer: ICustomerValue;
  onEditCustomerSuccess: (customer: ICustomerValue) => void;
}

interface IAddress {
  building: string;
  landmark: string;
  city: string;
  state: string;
  pinCode: string;
}

function EditCustomerModal({
  open,
  onClose,
  customer,
  onEditCustomerSuccess,
}: IEditCustomerModal) {
  const [imageUrl, setImageUrl] = useState(customer.image || '');
  const [imageFile, setImageFile] = useState<IAttachmentInfo>();
  const [openResizeImageModal, setOpenResizeImageModal] = useState(false);
  const [openCustomerErrorModal, setOpenCustomerErrorModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [customerState, setCustomerState] = useState({
    customer_id: customer.customer_id,
    customer_name: customer.name || '',
    phone: customer.phone || '',
    country_code: customer.country_code || '+91',
  });

  const [address, setAddress] = useState({ ...EMPTY_CUSTOMER_ADDRESS });

  const classes = useStyles();
  const btnClasses = useButtonStyles();
  const { t } = useLanguageContext();
  const { getUserInfo, getDeviceInfo, getCurrentBook } = useAppState();
  const history = useHistory();
  const { showError } = useErrorContext();
  const book = getCurrentBook();
  const user = getUserInfo();
  const isEdit = true;
  const shouldDisableButtons = isSubmitting || isUploading;
  const deleteImageBtnClass = isLongWordsLanguageSelected()
    ? classes.reducedText
    : '';

  // update customerState upon customer update
  useEffect(() => {
    setCustomerState({
      customer_id: customer.customer_id,
      customer_name: customer.name || '',
      phone: customer.phone || '',
      country_code: customer.country_code || '+91',
    });

    if (customer?.address && !isAnEmptyAddress(customer?.address)) {
      const addressProperties = customer?.address.split(',');
      const addressKeys = Object.keys(address);
      const constructedAddress = address;
      for (let i = 0; i < addressProperties.length; i++) {
        constructedAddress[addressKeys[i] as keyof IAddress] =
          addressProperties[i];
      }
      setAddress(constructedAddress);
    } else {
      setAddress({
        ...EMPTY_CUSTOMER_ADDRESS,
      });
    }
    setImageUrl(customer?.image || '');
    setImageFile(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer, open]);

  const onSuccess = (customer: ICustomerValue) => {
    setIsSubmitting(false);
    onEditCustomerSuccess(customer);
  };

  const {
    handleChange,
    handlePhoneNumberChange,
    errors,
    values,
    handleCountryCodeChange,
  } = useAddCustomer({ onSuccess, isEdit });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    switch (fieldName) {
      case 'country_code':
        handleCountryCodeChange(e);
        setCustomerState({
          ...customerState,
          [fieldName]: e.target.value,
        });
        break;
      case 'phone':
        const onlyDigits = e.target.value.replace(/[^0-9]/g, '');
        setCustomerState({
          ...customerState,
          [fieldName]: onlyDigits,
        });
        handlePhoneNumberChange(e);
        break;
      default:
        if (e.target.value.indexOf(' ') !== 0) {
          setCustomerState({
            ...customerState,
            [fieldName]: e.target.value,
          });
          handleChange(e);
        }
    }
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.indexOf(' ') !== 0) {
      let newAddress = { ...address };
      if (event.target.name === 'pinCode') {
        const onlyDigits = event.target.value.replace(/[^0-9]/g, '');
        newAddress = {
          ...address,
          pinCode: onlyDigits,
        };
      } else {
        newAddress = {
          ...address,
          [event.target.name]: event.target.value,
        };
      }
      setAddress(newAddress);
    }
  };

  const onImageUploaded = async (file: File) => {
    if (file === undefined) {
      return;
    }
    setIsUploading(true);
    const optimizedImage = await optimizeImage(file, file.name);
    const newFile = {
      preview: URL.createObjectURL(file),
      ...optimizedImage,
    };
    setImageUrl(newFile.preview);
    setImageFile(newFile);
    setIsUploading(false);
  };

  const onDeleteImage = () => {
    setImageUrl('');
    setImageFile(undefined);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const completeAddress = `${address.building},${address.landmark},${address.city},${address.state},${address.pinCode}`;
    values.address = completeAddress;
    // analytics
    onSaveCustomerClicked();
    const deviceInfo = getDeviceInfo();

    if (user === undefined || deviceInfo === undefined) {
      history.replace(LOGIN_URI);
      return;
    }

    if (book === undefined) {
      history.replace(HOME_URI);
      return;
    }
    const bookId = book.book_id;
    if (customer.phone?.length) {
      const isCustomerExisting = await isExistingCustomer(
        bookId,
        customerState.phone,
        customer.customer_id,
        customerState.country_code
      );
      if (isCustomerExisting) {
        setOpenCustomerErrorModal(true);
        setIsSubmitting(false);
        return;
      }
    }

    workerApi
      .updateCustomer({
        bookId,
        customerName: customerState.customer_name,
        phone: customerState.phone,
        user,
        deviceInfo,
        address: completeAddress,
        country_code: customerState.country_code,
        localImage: imageFile,
        image: imageUrl,
        customerId: customerState.customer_id,
      })
      .then((customer: ICustomerValue) => {
        onSuccess(customer);
      })
      .catch((e: Error) => {
        showError();
        captureException(e, {
          tags: {
            module: SENTRY_TAG.ADD_CUSTOMER,
          },
        });
      });
  };

  const onEditComplete = async (blob: Blob) => {
    const file = new File([blob], 'edited-profile-picture.jpg', {
      type: 'image/jpg',
    });

    onImageUploaded(file);
  };

  const onEditPhotoClick = async () => {
    if (imageFile) {
      setIsUploading(true);
      setImageUrl(imageFile.preview);
      setImageFile(undefined);
    }
    setOpenResizeImageModal(true);
    setIsUploading(false);
  };

  const handleClose = () => {
    errors.name = '';
    errors.phone = '';
    values.phone = customer.phone || '';
    values.customer_name = customer.name;
    onClose();
  };

  return (
    <Modal
      open={open}
      className={classes.modal}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <div className={classes.paper}>
        <div className={classes.titleContainer}>
          <img
            src={editCustomer}
            alt={t('edit_customer')}
            className={classes.editIcon}
          />
          <Typography className={classes.title}>
            {t('edit_customer')}
          </Typography>
          <img
            className={classes.closeIcon}
            src={closeIcon}
            alt="close"
            onClick={handleClose}
          />
        </div>
        <form onSubmit={onSubmit} className={classes.form}>
          <div className={classes.formSection}>
            <Typography className={classes.sectionTitle}>
              <img
                src={personalDetails}
                className={classes.sectionIcon}
                alt={t('personal_details')}
              />
              {t('personal_details')}
            </Typography>
            <div className={classes.sectionContent}>
              <div className={classes.fieldsWrapper}>
                <div className={classes.fieldset}>
                  <TextInputField
                    value={customerState.customer_name}
                    name="customer_name"
                    placeholder={t('customer_name')}
                    onChangeHandler={onChange}
                    error={errors?.name ? true : false}
                  />
                  {errors?.name && (
                    <FormHelperText className={classes.error}>
                      {t('enter_name')}
                    </FormHelperText>
                  )}
                </div>
                <div className={classes.fieldset}>
                  <MobileNumberField
                    values={customerState}
                    errors={errors}
                    handleChange={onChange}
                    handleCountryCodeChange={onChange}
                    className={classes.mobileNumberField}
                  />
                </div>
              </div>
              <div
                className={`${classes.fieldset} ${classes.uploadImageContainer}`}
              >
                {(isSubmitting || isUploading) && (
                  <CircularProgress className={classes.circularLoader} />
                )}
                <Avatar className={classes.avatar} src={imageUrl}>
                  {getInitials(customer.name)}
                </Avatar>
                <div
                  className={`${classes.uploadImageWrapper} ${
                    isLongWordsLanguageSelected() ? classes.reducedMargin : ''
                  }`}
                >
                  <UploadImage
                    onImageUpload={async (file) => {
                      await onImageUploaded(file);
                      onEditPhotoClick();
                    }}
                    selectedImageUrl={imageUrl}
                    type="profileForm"
                  />
                  <Button
                    onClick={onDeleteImage}
                    className={`${classes.deletePhotoBtn} ${deleteImageBtnClass}`}
                    disabled={imageUrl.length > 0 ? false : true}
                  >
                    <BinIcon
                      width={16}
                      height={16}
                      className={classes.deleteIcon}
                      stroke={
                        imageUrl.length === 0
                          ? COLORS_THEME.TEXT_DISABLED
                          : COLORS_THEME.DARK_PRIMARY
                      }
                    />
                    {t('delete')}
                  </Button>
                  <ResizeImageModal
                    open={openResizeImageModal}
                    imageUrl={imageUrl}
                    onEditComplete={onEditComplete}
                    onClose={() => setOpenResizeImageModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.formSection}>
            <Typography className={classes.sectionTitle}>
              <img
                src={addressIcon}
                className={classes.sectionIcon}
                alt={t('address')}
              />
              {t('address')}
            </Typography>
            <div className={classes.sectionContent}>
              <div className={classes.fieldsWrapper}>
                <div className={classes.fieldset}>
                  <TextInputField
                    value={address.building}
                    name="building"
                    placeholder={t('building_number')}
                    onChangeHandler={handleAddressChange}
                    maxLength={MAX_ADDRESS_LANDMARK_LENGTH}
                  />
                </div>
                <div className={classes.fieldset}>
                  <TextInputField
                    value={address.pinCode}
                    name="pinCode"
                    placeholder={t('pin_code')}
                    onChangeHandler={handleAddressChange}
                    maxLength={MAX_ADDRESS_PIN_CODE_LENGTH}
                  />
                </div>
              </div>
              <div className={classes.fieldsWrapper}>
                <div className={classes.fieldset}>
                  <TextInputField
                    value={address.landmark}
                    name="landmark"
                    placeholder={t('landmark')}
                    onChangeHandler={handleAddressChange}
                    maxLength={MAX_ADDRESS_LANDMARK_LENGTH}
                  />
                </div>
                <div className={classes.cityWrapper}>
                  <div className={classes.fieldset}>
                    <TextInputField
                      value={address.city}
                      name="city"
                      placeholder={t('city')}
                      onChangeHandler={handleAddressChange}
                      maxLength={MAX_ADDRESS_FIELDS_LENGTH}
                    />
                  </div>
                  <div className={classes.fieldset}>
                    <TextInputField
                      value={address.state}
                      name="state"
                      placeholder={t('state')}
                      onChangeHandler={handleAddressChange}
                      maxLength={MAX_ADDRESS_FIELDS_LENGTH}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.buttonsContainer}>
            <Button
              className={`${classes.button} ${btnClasses.greyBtn}`}
              onClick={onClose}
            >
              {t('discard')}
            </Button>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              className={`${btnClasses.secondaryBtn} ${classes.saveButton}`}
              disabled={
                errors?.phone?.length > 0 ||
                errors?.name?.length > 0 ||
                shouldDisableButtons
              }
            >
              {t('save_changes')}
            </Button>
          </div>
        </form>
        <CustomerErrorModal
          open={openCustomerErrorModal}
          onClose={() => setOpenCustomerErrorModal(false)}
          errorMessage={t('mobile_number_already_exists_error')}
        />
      </div>
    </Modal>
  );
}

export default memo(EditCustomerModal);
