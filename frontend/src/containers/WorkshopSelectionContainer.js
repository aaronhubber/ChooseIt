import React, {useState, useEffect} from 'react'
import FavoriteWorkshop from '../components/FavoriteWorkshop';
import WorkshopPicture from '../components/WorkshopPicture';
import WorkshopPicture2 from '../components/WorkshopPicture2';
import {getRandomWorkshopPicture, getRandomWorkshopPicture2} from '../services/services.js';



const WorkshopSelectionContainer = () => {

  const [randomWorkshop, setRandomWorkshop] = useState(null);
  const [randomWorkshop2, setRandomWorkshop2] = useState(null);
  const [favoriteWorkshop, setFavoriteWorkshop] = useState([])

  useEffect(() => {
    getRandomWorkshopPicture().then((res) => setRandomWorkshop(res));
    getRandomWorkshopPicture2().then((res) => setRandomWorkshop2(res));
  }, [favoriteWorkshop]);


  const onFavouriteClick = (banana) => {

    const copyList = [... favoriteWorkshop]

    const isOnList = copyList.some((workshop) => {
        return workshop.id === banana.id
    }) 

    if (!isOnList) { 
    copyList.push(banana)
    }

    setFavoriteWorkshop(copyList)
    
}


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
      <WorkshopPicture randomWorkshop={randomWorkshop} onFavouriteClick={onFavouriteClick}/> 
      <WorkshopPicture2 randomWorkshop2={randomWorkshop2}/>
      <FavoriteWorkshop favoriteWorkshop={favoriteWorkshop}/>
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
