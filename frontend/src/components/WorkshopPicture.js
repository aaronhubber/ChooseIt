import React from 'react'

const WorkshopPicture = ({workshopPicture}) => {

  let byteSource = "data:image/png;base64," + workshopPicture.picture

  return (
    <>
    <div>
    <h3>{workshopPicture.description}</h3>
      <img src = {byteSource}/>
    </div>
    </>
  )
}

export default WorkshopPicture
