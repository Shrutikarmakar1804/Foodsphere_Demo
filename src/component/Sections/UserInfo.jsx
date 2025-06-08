import { useRef, useState, useEffect } from "react";

function UserInfo() {
  const [user, setUser] = useState(null);
  const [tempUser, setTempUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef(null);

  // Replace with your real Cloudinary settings
  const cloud_name = "dcconejjp";
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
  const UPLOAD_PRESET ="FoodSphere";

  useEffect(() => {
    const storedUser = localStorage.getItem("user_profile");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setTempUser(parsed);
      setPreviewImage(parsed.profilePicture || "");
    } else {
      const emptyUser = {
        name: "",
        email: "",
        phone: "",
        bio: "",
        profilePicture: "",
        address: "",
        landmark: "",
      };
      setUser(emptyUser);
      setTempUser(emptyUser);
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.secure_url) {
        setPreviewImage(data.secure_url);
        setTempUser((prev) => ({ ...prev, profilePicture: data.secure_url }));
      } else {
        alert("Image upload failed. Please check your Cloudinary preset.");
        console.error("Upload failed:", data);
      }
    } catch (error) {
      alert("Upload error.");
      console.error("Error uploading:", error);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    if (!tempUser.name || !tempUser.email || !tempUser.address || !tempUser.landmark) {
      alert("Please fill in required fields: name, email, address, landmark.");
      return;
    }
    setUser(tempUser);
    localStorage.setItem("user_profile", JSON.stringify(tempUser));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setTempUser(user);
    setPreviewImage(user.profilePicture);
    setIsEditing(true);
  };

  const handleLogout = () => {
    setIsEditing(false);
    setTempUser(user);
    alert("Logged out (data is still saved)");
  };

  if (!tempUser) return <p>Loading...</p>;

  return (
    <div className="max-w mx-auto p-6 border rounded-xl shadow space-y-6 bg-black text-white">
      {isEditing ? (
        <>
          <h2 className="text-2xl font-bold text-black-800">Edit Your Information</h2>
          <div className="space-y-4">
            {[
              { label: "Name", name: "name" },
              { label: "Email", name: "email" },
              { label: "Phone Number", name: "phone" },
              { label: "Address", name: "address" },
              { label: "Landmark", name: "landmark" },
            ].map(({ label, name }) => (
              <label key={name} className="block text-black-700">
                {label}:
                <input
                  name={name}
                  className="mt-1 block w-full p-2 rounded border border-black-300"
                  value={tempUser[name]}
                  onChange={handleChange}
                />
              </label>
            ))}
            <label className="block text-black-700">
              Bio:
              <textarea
                name="bio"
                className="mt-1 block w-full p-2 rounded border border-black-300"
                rows={3}
                value={tempUser.bio}
                onChange={handleChange}
              />
            </label>

            <div>
              <span className="block text-black-700 mb-1">Profile Picture:</span>
              <button
                type="button"
                onClick={openFilePicker}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Choose Picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-2 w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black-800">Your Profile</h2>
          {user.profilePicture && (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Landmark:</strong> {user.landmark}</p>
          <div className="space-x-4">
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-black-700"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
