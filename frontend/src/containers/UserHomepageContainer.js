import React from 'react';
import styled from 'styled-components'
import schedule from "../assets/images/schedule2.png"
import choices from "../assets/images/choices.png"
import countdown from "../assets/images/countdown.png"
import {Link } from "react-router-dom";
import SideBar from '../components/SideBar';

const ImageBanners = styled.img`
width: 100%;
padding-bottom:0.5vw;
margin:0;
`;

const TextAndImage = styled.div`
  position: relative;
  margin-top:0.5vw;
  &:hover{
    transform:scaleY(1.1);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  left: 10%;
  bottom: 50%;;
`;

const Text = styled.h3`
  color: white;
  font-size: 3vw;
`;

const NavFlex = styled.div`
position: sticky;
top: 0;
width: 20% ;
position: relative;
`;

const FlexBox = styled.div`
display: flex;
flex-direction:row;
background-image: url("/Users/jasminemills/CodeClan_work/final_project/chooseit/ChooseIt/frontend/src/assets/images/background.png");
`;

const UserHomepageContainer = ({currentProfile}) => {
  return (
    <>
    <FlexBox>
    <NavFlex>
      <SideBar/>
    </NavFlex>
    <div>
    <Link style={{ textDecoration: "none" }} to="/todo">
    <TextAndImage>
      <ImageBanners src = {schedule}/>
        <TextOverlay>
              <Text> To Do Today</Text>
        </TextOverlay>
      </TextAndImage>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/whatchoice">
        <TextAndImage>
        <ImageBanners src = {choices}/>
          <TextOverlay>
                  <Text> Make A Choice</Text>
          </TextOverlay>
        </TextAndImage>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
        <TextAndImage>
        <ImageBanners src = {countdown}/>
          <TextOverlay>
                  <Text> Countdown</Text>
          </TextOverlay>
        </TextAndImage>
        </Link>
    </div>
    </FlexBox>
    </>
  )
}

export default UserHomepageContainer
