export const getStorageData = () =>{
    return JSON.parse(localStorage.getItem('movie')) || [];
}
export const setStorageData = (data) => {
    return localStorage.setItem('movie',JSON.stringify(data));
}