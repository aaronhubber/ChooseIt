import React, {useState, useEffect} from 'react'
import WorkshopPicture from '../components/WorkshopPicture';


const ChoiceSelectionContainer = ({workshopPicture, allWorkshopPictures}) => {

    const pictureTiles = allWorkshopPictures?.map((workshopPicture, index) => {
        return <WorkshopPicture workshopPicture={workshopPicture} key={index} />;
      });

      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>
    <div>{pictureTiles} 
    </div>
      <h2>I am a workshoppictureslist</h2>
    </div>
    </>
  )
}

export default ChoiceSelectionContainer
