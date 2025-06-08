import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Password reset link sent to ${email}!`);
      navigate('/'); // Redirect to login page
    } else {
      alert('The Otp sent to your email.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-pink-50 to-white flex items-center justify-center p-8">

      <form 
        onSubmit={handleForgotPassword} 
        style={{ 
          backgroundColor: "#000", 
          padding: "30px", 
          borderRadius: "20px", 
          width: "300px",
          color: "white"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>  
        <input 
          type="email" 
          placeholder="Enter your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            width: "100%", 
            padding: "10px", 
            marginBottom: "20px", 
            borderRadius: "5px", 
            border: "1px solid gray" 
          }}
        />

        <button 
          type="submit" 
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: "#00d2ff", 
            border: "none", 
            borderRadius: "5px", 
            color: "#000", 
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
