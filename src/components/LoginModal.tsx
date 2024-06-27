import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./animation.css";
import BackgroundSphere from "./BackgroundSphere";

type LoginModalProps = {
  show: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Logging in with:", email, password);
    localStorage.setItem("user", JSON.stringify({ email, role: "Admin" }));

    toast.success("Successfully logged in!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      setEmail("");
      setPassword("");
      onClose();
    }, 3000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!show) return;
      const target = event.target as HTMLElement;
      if (!target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  // Clear error message on input change
  useEffect(() => {
    setError("");
  }, [email, password]);

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-30 overflow-hidden">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fade-in modal-content relative overflow-hidden">
          <BackgroundSphere right="-60px" top="-60px" color="#A7DA7C" />
          <BackgroundSphere right="180px" top="250px" color="#DCB0FE" />
          <h2 className="text-3xl font-bold mt-6 mb-10 ml-2 z-30">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div
            className="my-7 relative rounded-full z-30"
            style={{ boxShadow: "#8972EC 0px 3px 10px" }}
          >
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border-gray-300 rounded-full focus:outline-none focus:ring"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            className="my-7 relative rounded-full z-30"
            style={{ boxShadow: "#8972EC 0px 3px 10px" }}
          >
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-3 right-3 z-30 cursor-pointer text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            className="w-full z-30 relative bg-black text-white py-2 mt-4 font-semibold rounded-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-6 mb-9 relative text-center z-50">
            Forgot details?{" "}
            <a href="#" className="text-red-500 underline">
              Contact our admin
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginModal;
