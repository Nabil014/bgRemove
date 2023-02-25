import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { BoxDragAndDrop } from './BoxDragAndDrop';
import { ImageSelected } from './ImageSelected';

export function Upload () {
    const [images, setImages] = useState([])
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);

    const handleChange = (imageList) => {
        setImages(imageList)
    }
    console.log(images)

    const onUpload = () => { }

    return (
        <ImageUploading multiple={false} maxNumber={1} value={images} onChange={handleChange}>
            {({
                imageList,
                onImageUpload,
                dragProps,
                isDragging,
                onImageRemove,
                onImageUpdate,
            }) => (
                <>
                    {
                        imageList[0]
                            ? <ImageSelected img={imageList[0].dataURL} {...{ onUpload, onImageUpdate, loading }} />
                            : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
                    }
                </>
            )}
        </ImageUploading>
    )
}
