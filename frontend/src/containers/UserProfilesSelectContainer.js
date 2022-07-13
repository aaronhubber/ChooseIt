import React, {useState, useEffect} from 'react'
import UserProfile from '../components/UserProfile';
import styled from 'styled-components'
import img from '../assets/images/background.png';
import AddUser from '../components/AddUser';
import EmptyTile from '../components/EmptyTile';
import Navigation from '../components/Navigation';

const Body = styled.div`
/* background-color:green; */
background-image: url(${img});
 `

const ProfileFlex = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:row;
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

const UserProfilesSelectContainer = ({allProfiles, selectProfile, addProfile, signOutUser}) => {

  const [newUserForm, setNewUserForm] = useState(false);

  const handleNewProfile = () =>{
      setNewUserForm(true)
    }


  const profileTiles = allProfiles.map((profile, index) => {
        return <UserProfile profile={profile} selectProfile = {selectProfile}key={index} />;
      });


  return (

    <>
    <Navigation signOutUser = {signOutUser}/>
    <Body>
    <ProfileFlex>
    {profileTiles} 
    {/* {newUserForm==false?<EmptyTile onClick = {handleNewProfile}/> :<AddUser/>} */}
    <AddUser addProfile = {addProfile}/>
    </ProfileFlex>
    </Body>
    </>
  )
}

export default UserProfilesSelectContainer
