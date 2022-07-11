import React, {useState, useEffect} from 'react'
import WorkshopPicture from '../components/WorkshopPicture';
import {getRandomWorkshopPicture} from '../services/services.js';



const WorkshopSelectionContainer = ({allWorkshopPictures}) => {

  const [randomWorkshop, setRandomWorkshop] = useState();

  useEffect(() => {
    getRandomWorkshopPicture().then((res) => setRandomWorkshop(res));
  }, []);

  // const randomWorkshopPicture = (()=>{
  //  return getRandomWorkshopPicture
  // })

    // const pictureTiles = allWorkshopPictures?.map((workshopPicture, index) => {
    //     return <WorkshopPicture workshopPicture={workshopPicture} key={index} />;
    //   });

      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>
      <WorkshopPicture randomWorkshop={randomWorkshop}/> 
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
