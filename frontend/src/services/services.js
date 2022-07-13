
export const getProfiles = () => {
    return fetch("http://localhost:8080/userprofiles")
    .then((res) => res.json());
};

export const getProfilesId = (id) => {
  return fetch("http://localhost:8080/userprofiles/" + id)
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

export const getRandomWorkshopPicture = (genre)=>{
  return fetch ("http://localhost:8080/randomworkshoppicture/" + genre)
  .then((res)=> res.json())
}

export const getRandomWorkshopPicture2 = (genre)=>{
  return fetch ("http://localhost:8080/randomworkshoppicture/" + genre)
  .then((res)=> res.json())
}

export const getRandomEmotionPicture = ()=>{
  return fetch ("http://localhost:8080/randomemotionpicture/")
  .then((res)=> res.json())
}

export const postUser = (file, data) => {

  let profilesURL = "http://localhost:8080/userprofiles"
  let body = new FormData();
  body.append('name', data.name);
  body.append('assistanceLevel', data.assistanceLevel);
  body.append('file',file)
  

  // body.append('assistanceLevel', data.assistanceLevel)

    return fetch(profilesURL, {
      method: "POST",
      body: body
      // headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => res.json());
  
};

export const getActivityPictures = () => {
  return fetch("http://localhost:8080/activitypictures")
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