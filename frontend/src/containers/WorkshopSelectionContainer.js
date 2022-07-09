import React, {useState, useEffect} from 'react'
import WorkshopPicture from '../components/WorkshopPicture';


const WorkshopSelectionContainer = ({workshopPicture, allWorkshopPictures}) => {


    const pictureTiles = allWorkshopPictures?.map((workshopPicture, index) => {
        return <WorkshopPicture workshopPicture={workshopPicture} key={index} />;
      });

      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>{pictureTiles}</div>
    </>
  )
}

export default WorkshopSelectionContainer
