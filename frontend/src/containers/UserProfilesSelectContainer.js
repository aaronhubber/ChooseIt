import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile';
import styled from 'styled-components'
import img from '../assets/images/background.png';



const Body = styled.div`
/* background-color:green; */
background-image: url(${img});
 `

const ProfileFlex = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:row;
padding-top:5vw;
 `

const EmptyTile = styled.div`
border-style:solid;
border-width:2px;
border-color:grey;
padding: 2%;
margin:2%;
background-color:white ;
`

const ProfilePic = styled.img`
border-style:solid;
border-width:2px;
border-color:grey;
width: 15w;
`
const Text = styled.h2`
font-family:Arial, Helvetica, sans-serif;
text-align:center;
`

const NewUser = styled.img`
&:hover{
    transform:scale(1.1);}
`;

const UserProfilesSelectContainer = ({allProfiles, selectProfile}) => {

  const profileTiles = allProfiles.map((profile, index) => {
        return <UserProfile profile={profile} selectProfile = {selectProfile}key={index} />;
      });


  return (

    <>
    <Body>
    <ProfileFlex>
    {profileTiles} 
    <EmptyTile>
     <NewUser width = "200" src = "https://www.enterpriseresearch.ac.uk/wp-content/uploads/2014/08/Add-Person-Person-Add-Icon-2646097.png"/>
     <Text>Add User</Text>
    </EmptyTile>
    </ProfileFlex>
    </Body>
    </>
  )
}

export default UserProfilesSelectContainer
