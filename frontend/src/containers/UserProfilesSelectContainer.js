import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile';

const UserProfilesSelectContainer = ({allProfiles, allProfilePics}) => {

    const profileTiles = allProfiles.map((profile, index) => {
        return <UserProfile profile={profile} key={index} />;
      });

      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>
    <div>{profileTiles} 
    </div>
    {/* <div>
    {profilePicTiles}
    </div> */}
      <h4>I am a profiles container</h4>
    </div>
    </>
  )
}

export default UserProfilesSelectContainer
