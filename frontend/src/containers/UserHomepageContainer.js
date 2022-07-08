import React from 'react';
import styled from 'styled-components'
import schedule from "../assets/images/schedule2.png"
import choices from "../assets/images/choices.png"

const ImageBanners = styled.img`
width: 100%;
padding-bottom:2%;
margin:0;
`;

const TextAndImage = styled.div`
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  left: 10%;
  bottom: 50%;;
`;

const Text = styled.h3`
  color: white;
  font-size: 40px;
`;

const UserHomepageContainer = () => {
  return (
    <>
    <TextAndImage>
      <ImageBanners src = {schedule}/>
        <TextOverlay>
              <Text> To Do Today</Text>
        </TextOverlay>
      </TextAndImage>
      <TextAndImage>
      <ImageBanners src = {choices}/>
        <TextOverlay>
              <Text> Make A Choice</Text>
        </TextOverlay>
      </TextAndImage>
    </>
  )
}

export default UserHomepageContainer
