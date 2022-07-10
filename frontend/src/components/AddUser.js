import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { FaCamera } from 'react-icons/fa';

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
`

const Form = styled.form`
`

const Input = styled.input`
padding: 0.5vw;
margin:0.5vw;
width: 85%;
`
const SelectedImage = styled.img`
width:85%;
margin-left:0.5vw;
`

const AddUser = () => {

    const [name, setName] = useState("");
    const [assistanceLevel, setAssistanceLevel] = useState(0);
    const [photo, setPhoto] = useState();
    const [img, setImg] = useState();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAssistanceChange = (event) => {
      setAssistanceLevel(event.target.value);
    };
  
    const handlePhotoChange = (event) => {
      setPhoto(event.target.value);
    };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   addProfile({ name: name, age: age, avatar: avatar, savedCountries: [] });
    //   setName("");
    //   setAge(0);
    //   event.target.reset();
    // };

    const handleImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };

  return (
    <>
    <FormTile>
    <Form>
        <Label for = "input">
            Select Profile Picture
            <br/>
            <FaCamera/>
            <br/>
            <hr/>
            <FileButton id = "input" type = "file" onChange= {handleImageChange}/>
            <SelectedImage  width = "100vw" src={img} alt="" />
        </Label>
        <Input type="text" placeholder="Your Name" onChange={handleNameChange} required />
        <Input type="text" placeholder="Assistance Level" onChange={handleAssistanceChange} required />
        
    </Form>
    </FormTile>
    </>
  )
}

export default AddUser
