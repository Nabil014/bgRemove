import React from 'react'

export function ImageSelected ({ loading, img, onUpload, onImageUpdate }) {
  return (
    <div>
      {loading
        ? <p>loading...</p>
        :
        <img src={img} alt="image selected" className='w-72' />

      }
    </div>
  )
}
