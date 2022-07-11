import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { FaCamera } from 'react-icons/fa';
import add from '../assets/images/add.png';

const FileButton = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
    
;
`
const Label = styled.label`
cursor:pointer;
font-family:Arial, Helvetica, sans-serif;
text-align:center;
font-size:1.5vw;
font-style:bold;

`

const FormTile = styled.div`
border-style:solid;
border-width:2px;
border-color:grey;
padding: 2%;
margin:2%;
background-color:white ;
width:13em;
height:20em;
`

const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
`

const Input = styled.input`
padding: 0.5vw;
margin:0.5vw;
width: 85%;
`
const Add = styled.input`
padding: 0.5vw;
margin-left:5vw;
`

const SelectedImage = styled.img`
width:50%;
;
`

const AddUser = ({addProfile}) => {

    const [name, setName] = useState("");
    const [assistanceLevel, setAssistanceLevel] = useState("");
    const [picture, setPicture] = useState(); //setting image to profile
    const [img, setImg] = useState(); // viewing selected image
  

    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAssistanceChange = (event) => {
      setAssistanceLevel(event.target.value);
    };
  
    const handlePictureChange = (event) => {
      setPicture(event.target.value)
    };

    const handleImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };

    const handlePictureAndImage = (event) => {
        handleImageChange(event);
        handlePictureChange(event)
     };

      const handleSubmit = (event) => {
        event.preventDefault();
        addProfile(img,{ name: name, assistanceLevel: assistanceLevel},);
        setName("");
        setAssistanceLevel("");
        event.target.reset();
      };
  

  return (
    <>
    <FormTile>
    <Form onSubmit = {handleSubmit} >
        <Label>
            Select Profile Picture
            <br/>
            <FaCamera/>
            <br/>
            <hr/>
            <FileButton id = "input" type = "file" onChange= {handlePictureAndImage}/>
            <SelectedImage  width = "100vw" src={img} alt="" />
        </Label>
        <Input type="text" placeholder="Your Name" onChange={handleNameChange} required />
        <Input type="text" placeholder="Assistance Level" onChange={handleAssistanceChange} required />
        <Add type="image" width = "50vw" src={add} alt="Submit"/>
        
    </Form>
    </FormTile>
    </>
  )
}

export default AddUser
