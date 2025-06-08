const upload_preset = "FoodSphere"; 
const cloud_name = "dupggb1ri";    

const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload `;

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', upload_preset); 

    try {
        const res = await fetch(api_url, {
            method: "POST",
            body: data,
        });

        if (!res.ok) {
            throw new Error("Image upload failed");
        }

        const fileData = await res.json();
        console.log(fileData); 
        return fileData.secure_url; 
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        return null;
    }
};