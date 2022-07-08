
export const getUsers = () => {
    return fetch("http://localhost:8080/userprofiles")
    .then((res) => res.json());
};

export const getProfilePics = () => {
    
    var myImage = document.querySelector('img');

    return fetch("http://localhost:8080/profilepictures")
    .then(res => res.blob())
    .then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
});
}