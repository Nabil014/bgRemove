export function BoxDragAndDrop ({ isDragging, onImageUpload, dragProps }) {
  console.log(isDragging)
  return (
    <div
      onClick={onImageUpload}
      {...dragProps}
      className={`shadow-2xl cursor-pointer rounded-lg aspect-video w-72 flex items-center justify-center flex-col p-2 ${isDragging ? 'border-red-500 border-solid border-2 hover:border-red-500' : 'border-gray-300 border-dashed border-2'}`}
    >
      <button className="font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">Upload image</button>
      <span className='pt-4'>Chosee an Image or Drag and Drop an Image 📤</span>
    </div>
  )
}