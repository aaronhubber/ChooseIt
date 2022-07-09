import React from 'react';
import styled from 'styled-components'
import schedule from "../assets/images/schedule2.png"
import choices from "../assets/images/choices.png"
import ChoiceSelectionContainer from './ChoiceSelectionContainer';
import {Link } from "react-router-dom";

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
    <Link style={{ textDecoration: "none" }} to="/">
    <TextAndImage>
      <ImageBanners src = {schedule}/>
        <TextOverlay>
              <Text> To Do Today</Text>
        </TextOverlay>
      </TextAndImage>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <TextAndImage>
        <ImageBanners src = {choices}/>
          <TextOverlay>
                  <Text> Make A Choice</Text>
          </TextOverlay>
        </TextAndImage>
        </Link>
    </>
  )
}

export default UserHomepageContainer
