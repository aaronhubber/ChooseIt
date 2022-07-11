
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

export const postUser = (data, file) => {

    let profilesURL = "http://localhost:8080/userprofiles"
    let body = new FormData();
    
    body.append('picture',file)
    body.append('name', data.name)
    body.append('assistanceLevel', data.assistanceLevel)

    if (data.name && data.assistanceLevel && data.picture) {
      return fetch(profilesURL, {
        method: "POST",
        body: body,
        // headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => res.json());
    } else {
      alert("Name, Assistance Level and Picture Required");
    }
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