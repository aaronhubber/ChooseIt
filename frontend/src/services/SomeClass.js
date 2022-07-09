import React from 'react'
class SomeClass extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            image: null,
        }
    }

async getImage() {
    fetch("http://localhost:8080/workshoppictures")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
           image: data

       })
   })
   console.log(this.state.image)
}}

export default SomeClass