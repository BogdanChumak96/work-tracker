import { ReactNode, useEffect, useState } from "react";
import { Button, Input } from "@/shared/ui";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "@/shared/ui/link";
import { Title } from "@/shared/ui/title";
import { ErrorLabel } from "@/shared/ui/error-label";
import styles from "./LoginUI.module.css";

interface IProps {
  placeholder: string;
  icon: ReactNode;
  field: string;
}

const LoginUI = () => {
  const inputs: IProps[] = [
    {
      placeholder: "Email Address",
      icon: <FaEnvelope className={styles.inputIcon} />,
      field: "email",
    },
    {
      placeholder: "Password",
      icon: <FaLock className={styles.inputIcon} />,
      field: "password",
    },
    {
      placeholder: "Username",
      icon: <FaUser className={styles.inputIcon} />,
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
        const response = await fetch("https://localhost:3000/api/login", );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <Title className={styles.title} title={"Welcome Back"} />
            <p>
              Don't have an account yet?{" "}
              <Link href="#" title={"Sign up"} className={styles.signupLink} />
            </p>
          </div>

          <div className={styles.inputContainer}>
            {inputs.map((el) => (
              <div key={el.placeholder} className={styles.inputWrapper}>
                <Input
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
                  className={`${styles.input} ${
                    errors[el.field as keyof typeof errors] ? styles.inputError : ""
                  }`}
                />
                <div className={styles.inputIcon}>
                  {el.icon}
                </div>
                {errors[el.field as keyof typeof errors] && (
                  <ErrorLabel 
                    className={styles.errorText} 
                    label={errors[el.field as keyof typeof errors]} 
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            title="Login"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginUI;