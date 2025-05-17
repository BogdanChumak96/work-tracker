import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/shared/ui";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

interface IProps {
  placeholder: string;
  icon: ReactNode;
  field: string;
}

const LoginUI = () => {
  const inputs: IProps[] = [
    {
      placeholder: "Email Address",
      icon: <FaEnvelope className="text-white" />,
      field: "email",
    },
    {
      placeholder: "Password",
      icon: <FaLock className="text-white" />,
      field: "password",
    },
    {
      placeholder: "Username",
      icon: <FaUser className="text-white" />,
      field: "username",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", username: "" });

  const validateEmail = (val: string) => /@/.test(val);
  const validatePassword = (val: string) => /^[A-Za-z0-9]+$/.test(val);
  const validateUsername = (val: string) => val.length >= 3;

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case "email":
        setEmail(value);
        setErrors((prev) => ({
          ...prev,
          email: validateEmail(value) ? "" : "Invalid email address",
        }));
        break;
      case "password":
        setPassword(value);
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(value)
            ? ""
            : "Incorrect password",
        }));
        break;
      case "username":
        setUsername(value);
        setErrors((prev) => ({
          ...prev,
          username: validateUsername(value) ? "" : "Incorrect username",
        }));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password) || !validateUsername(username)) {
      alert("Please fix the errors before submitting");
      return;
    }
    alert("Login successful");
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos/random");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // Added dependency array to prevent infinite calls
  }, []);

  return (
    <div className="h-screen w-screen bg-[#101011] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#323232] w-full max-w-[28rem] p-8 rounded-lg flex flex-col items-center gap-6">
          <div className="text-white text-center">
            <h5 className="text-xl font-medium mb-2">Welcome Back</h5>
            <p>
              Don't have an account yet?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full">
            {inputs.map((el) => (
              <div key={el.placeholder} className="relative">
                <input
                  placeholder={el.placeholder}
                  type={el.field === "password" ? "password" : "text"}
                  value={
                    el.field === "email"
                      ? email
                      : el.field === "password"
                        ? password
                        : username
                  }
                  onChange={(e) => handleChange(el.field, e.target.value)}
                  className={`w-full bg-[#101011] text-white p-3 rounded-md
                    ${errors[el.field as keyof typeof errors] ? "border border-red-500" : ""}
                  `}
                />
                <div className="absolute right-3 top-3">
                  {el.icon}
                </div>
                {errors[el.field as keyof typeof errors] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[el.field as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <Button
            core="Login"
            className="bg-white text-[#323232] w-full py-3 rounded-md mt-4 hover:bg-gray-200 transition-colors"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginUI;