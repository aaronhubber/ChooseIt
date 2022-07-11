import React from 'react'

const WorkshopPicture = ({randomWorkshop, }) => {
  if (!randomWorkshop) return null;



  let byteSource = "data:image/png;base64," + randomWorkshop.picture





  return (
    <>
    <div>
    <h3>{randomWorkshop.title}</h3>
    <h3>{randomWorkshop.description}</h3>
      <img src = {byteSource}/>
    </div>
    </>
  )
}

export default WorkshopPicture
