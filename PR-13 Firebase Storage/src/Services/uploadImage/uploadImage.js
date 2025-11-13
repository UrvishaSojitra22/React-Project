import axios from "axios";

const uploadImage = async (fileData) => {

    console.log(fileData)
    let imageData = new FormData();

    imageData.append('file', fileData);
    imageData.append('upload_preset', 'Megamart');
    imageData.append('cloude_name', 'doc8sm62b');

    let res = await axios.post(`https://api.cloudinary.com/v1_1/doc8sm62b/image/upload`, imageData)
    return res.data.secure_url;

}
export default uploadImage;