import React, {useState, useEffect} from 'react'
import WorkshopPicture from '../components/WorkshopPicture';
import WorkshopPicture2 from '../components/WorkshopPicture2';
import {getRandomWorkshopPicture, getRandomWorkshopPicture2} from '../services/services.js';



const WorkshopSelectionContainer = () => {

  const [randomWorkshop, setRandomWorkshop] = useState(null);
  const [randomWorkshop2, setRandomWorkshop2] = useState(null);

  useEffect(() => {
    getRandomWorkshopPicture().then((res) => setRandomWorkshop(res));
    getRandomWorkshopPicture2().then((res) => setRandomWorkshop2(res));
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
      <WorkshopPicture2 randomWorkshop2={randomWorkshop2}/>
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
