
export const getProfiles = () => {
    return fetch("http://localhost:8080/userprofiles")
    .then((res) => res.json());
};

export const getImages = () => {
    return fetch("http://localhost:8080/workshoppictures")
    .then((res) => res.json())
};

export const getImage1 = () => {
    let id = 1
    return fetch("http://localhost:8080/workshoppictures/" + {id})
    .then((res) => res.json())
};

export const getImage2 = () => {
    return fetch("http://localhost:8080/workshoppictures/2")
    .then((res) => res.json())
};



// export const getProfilePics = () => {
//     async getImage()
//     fetch("http://localhost:8080/profilepictures")
//     .then(res => res.json())
//     .then(data => ({
//         this.setState({
//             image:"data:image/png;base64,"+ data})
//     }) 
// };