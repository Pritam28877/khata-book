// libs
import React, { useState, memo, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import Slider from '@material-ui/core/Slider';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

// material components
import Modal from '@material-ui/core/Modal';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@components/Button';

// constants
import { COLORS, FONTWEIGHT, COLORS_THEME } from '@styles/variables';

// context
import { useLanguageContext } from '@components/LanguageProvider/context';

const useStyles = makeStyles((theme) => ({
  modalStyles: {
    maxHeight: '100vh',
  },
  container: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: '15px',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '15%',
    left: '15%',
  },
  btnBare: {
    color: `${COLORS.BLUE}`,
    boxShadow: 'none',
    border: `1px solid ${COLORS.BLUE}`,
    fontWeight: FONTWEIGHT.BOLD,
    width: '130px',
    '&:disabled': {
      border: 'none',
      backgroundColor: COLORS_THEME.BACKGROUND,
      color: COLORS_THEME.TEXT_DISABLED,
      opacity: 1,
    },
  },
  cropContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '80px',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '50%',
    transform: 'translateX(-50%)',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  slider: {
    width: '50%',
  },
  rotateButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  easyCropContainer: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  closeIcon: {
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: COLORS_THEME.GREY_BORDER,
    cursor: 'pointer',
    zIndex: 8,
  },
  confirmBtnWrapper: {
    display: 'flex',
  },
  circularLoader: {
    marginLeft: '20px',
  },
}));

interface IResizeImageModal {
  imageUrl: string;
  open: boolean;
  onClose: () => void;
  onEditComplete: (file: Blob) => void;
}

interface IImage {
  width: number;
  height: number;
}

const INITIAL_CROP = { x: 0, y: 0 };
const INITIAL_ZOOM = 1;
const INITIAL_ROTATION = 0;
const INITIAL_CROPPED_PX = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

function ResizeImageModal({
  imageUrl,
  open,
  onClose,
  onEditComplete,
}: IResizeImageModal) {
  const [crop, setCrop] = useState<Point>(INITIAL_CROP);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const [rotation, setRotation] = useState(INITIAL_ROTATION);
  const [isSavingImage, setIsSavingImage] = useState(false);
  const [croppedPixels, setCroppedPixels] = useState<Area>(INITIAL_CROPPED_PX);

  const onCropComplete = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedPixels(croppedAreaPixels);
    },
    []
  );

  const createImage = (url: string) => {
    return new Promise<IImage>((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });
  };

  function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180;
  }

  // set states to initial values
  const handleClose = () => {
    setIsSavingImage(false);
    setCrop(INITIAL_CROP);
    setZoom(INITIAL_ZOOM);
    setRotation(INITIAL_ROTATION);
    onClose();
  };

  /**
   * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
   * @param {File} image - Image File url
   * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
   * @param {number} rotation - optional rotation parameter
   */
  async function getCroppedImg(
    imageSrc: string,
    pixelCrop: { width: number; height: number; x: number; y: number },
    rotation = 0
  ) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    // set each dimensions to double largest dimension to allow for a safe area for the
    // image to rotate in without being clipped by canvas context
    canvas.width = safeArea;
    canvas.height = safeArea;

    // translate canvas context to a central location on image to allow rotating around the center.
    ctx?.translate(safeArea / 2, safeArea / 2);
    ctx?.rotate(getRadianAngle(rotation));
    ctx?.translate(-safeArea / 2, -safeArea / 2);

    // draw rotated image and store data.
    ctx?.drawImage(
      image as CanvasImageSource,
      safeArea / 2 - image?.width * 0.5,
      safeArea / 2 - image?.height * 0.5
    );
    const data = ctx?.getImageData(0, 0, safeArea, safeArea);

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // paste generated rotate image with correct offsets for x,y crop values.
    ctx?.putImageData(
      data as ImageData,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
    );

    handleClose();
    // As a blob
    return new Promise((resolve) => {
      canvas.toBlob((imageFile) => {
        onEditComplete(imageFile as Blob);
      });
    });
  }

  const saveEdits = async () => {
    setIsSavingImage(true);
    await getCroppedImg(imageUrl, croppedPixels, rotation);
  };

  const classes = useStyles();
  const { t } = useLanguageContext();

  return (
    <Modal open={open} onClose={handleClose} className={classes.modalStyles}>
      <div className={classes.container}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        <div className={classes.cropContainer}>
          <Cropper
            image={imageUrl}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            rotation={rotation}
            classes={{ containerClassName: classes.easyCropContainer }}
          />
        </div>
        <div className={classes.controls}>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
            className={classes.slider}
          />
          <span className={classes.rotateButtonsContainer}>
            <IconButton
              aria-label="rotate-right"
              onClick={() => setRotation(rotation + 90)}
            >
              <RotateRightIcon />
            </IconButton>
            <IconButton
              aria-label="rotate-left"
              onClick={() => setRotation(rotation - 90)}
            >
              <RotateLeftIcon />
            </IconButton>
          </span>
          <span className={classes.confirmBtnWrapper}>
            <Button
              disabled={isSavingImage}
              onClick={saveEdits}
              className={classes.btnBare}
            >
              {t('confirm')}
            </Button>
            {isSavingImage && (
              <CircularProgress className={classes.circularLoader} />
            )}
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default memo(ResizeImageModal);
