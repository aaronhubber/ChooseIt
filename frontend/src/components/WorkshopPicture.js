import React from 'react'

const WorkshopPicture = ({randomWorkshop}) => {

  // let byteSource = "data:image/png;base64," + randomWorkshopPicture.picture

  return (
    <>
    <div>
    {/* <h3>{randomWorkshopPicture.title}</h3> */}
    <h3>{randomWorkshop.description}</h3>
      {/* <img src = {byteSource}/> */}
    </div>
    </>
  )
}

export default WorkshopPicture
