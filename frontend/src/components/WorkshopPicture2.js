import React from 'react'

const WorkshopPicture2 = ({randomWorkshop2}) => {

  if (!randomWorkshop2) return null;

  let byteSource = "data:image/png;base64," + randomWorkshop2.picture

  return (
    <>
    <div>
    <h3>{randomWorkshop2.title}</h3>
    <h3>{randomWorkshop2.description}</h3>
      <img src = {byteSource}/>
    </div>
    </>
  )
}

export default WorkshopPicture2