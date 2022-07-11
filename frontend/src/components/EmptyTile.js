import React from 'react'
import styled from 'styled-components'


const Tile = styled.div`
border-style:solid;
border-width:2px;
border-color:grey;
padding: 2%;
margin:2%;
background-color:white ;
height:20em;
`

const NewUser = styled.img`
&:hover{
    transform:scale(1.1);}
`;

const Text = styled.h2`
font-family:Arial, Helvetica, sans-serif;
text-align:center;
`


const EmptyTile = ({handleNewProfile}) => {

  return (
    <Tile>
      <NewUser width = "200" src = "https://www.enterpriseresearch.ac.uk/wp-content/uploads/2014/08/Add-Person-Person-Add-Icon-2646097.png" onClick = {handleNewProfile}/>
     <Text>Add User</Text>
    </Tile>
  )
}

export default EmptyTile
