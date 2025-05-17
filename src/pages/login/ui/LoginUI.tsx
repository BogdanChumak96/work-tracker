import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import {
  Link,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import styles from "./LoginStyles.module.css";

interface IProps {
  placeholder: string;
  icon: ReactNode;
  field: string;
}

const LoginUI = () => {
  const inputs: IProps[] = [
    {
      placeholder: "Email Address",
      icon: <LocalPostOfficeOutlinedIcon className="text-white" />,
      field: "email",
    },
    {
      placeholder: "Password",
      icon: <LockOutlinedIcon className="text-white" />,
      field: "password",
    },
    {
      placeholder: "Username",
      icon: <FolderSharedIcon className="text-white" />,
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
  });


  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.heading}>
            <Typography variant="h5">Welcome Back</Typography>
            <Typography>
              Don't have an account yet? <Link href="#">Sign up</Link>
            </Typography>
          </div>
          <div className={styles.fields}>
            {inputs.map((el) => (
              <TextField
                key={el.placeholder}
                placeholder={el.placeholder}
                value={
                  el.field === "email"
                    ? email
                    : el.field === "password"
                      ? password
                      : username
                }
                onChange={(e) => handleChange(el.field, e.target.value)}
                className={styles.input}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {el.icon}
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                error={Boolean(errors[el.field as keyof typeof errors])}
                helperText={errors[el.field as keyof typeof errors] || ""}
              />
            ))}
          </div>
          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginUI;
