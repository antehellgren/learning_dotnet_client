import React from 'react'
import { Cropper } from 'react-cropper'
import 'cropperjs/dist/cropper.css'

interface Props {
  setCropper: (copper: Cropper) => void;
  imagePreview: string;
}

const PhotoWidgetCropper = ({setCropper, imagePreview}: Props) => {
  return (
    <Cropper
      src={imagePreview}
      style={{height: '100%', width: '100%'}}
      initialAspectRatio={1}
      aspectRatio={1}
      preview='.img-preview'
      guides={false}
      viewMode={1}
      autoCropArea={1}
      background={false}
      onInitialized={cropper => setCropper(cropper)}
      />
  )
}

export default PhotoWidgetCropper