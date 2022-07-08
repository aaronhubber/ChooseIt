
export const getUsers = () => {
    return fetch("http://localhost:8080/getalluserprofiles").then((res) => res.json());
};