import React from 'react'

const WorkshopPicture2 = ({workshopPicture2}) => {

  let byteSource = "data:image/png;base64," + workshopPicture2.picture

  return (
    <>
    <div>
    <h3>{workshopPicture2.description}</h3>
      <img src = {byteSource}/>
    </div>
    </>
  )
}

export default WorkshopPicture2