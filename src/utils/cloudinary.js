
const cloudinary = require('cloudinary').v2;
const config = require("../config/config");

cloudinary.config({ 
    cloud_name: config.cloudinaryKey.cloud_name, 
    api_key: config.cloudinaryKey.api_key, 
    api_secret: config.cloudinaryKey.api_secret,
    secure: true
});
  

 async function uploadImage(filePath) {
    

     return await cloudinary.uploader.upload(filePath, {
        resource_type:'image',
       folder:"memes"
   })
      
}
    
module.exports = { uploadImage }

