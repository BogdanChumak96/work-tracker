import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Link
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { LogButtons } from '../../components/LogButtons';
// import { ConfirmCom } from '../../components/ConfirmCom';
import RegisterStyles from './RegisterStyles.module.css';
import { registerUser } from '@/shared/api';
import { sendEmail } from '@/shared/api';

export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export const RegisterUI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegister>();

    const handleRegister = async (data: IRegister) => {
        setIsLoading(true);
        try {
            await registerUser(data.name, data.email, data.password);
            await sendEmail(data.email);
            setIsConfirmed(true);
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <div className="register-wrapper">
            {/* {isConfirmed ? (
                <ConfirmCom email="" />
            ) : ( */}
                <form onSubmit={handleSubmit(handleRegister)} className="register-form">
                    <div className="register-header">
                        <h1 className="register-title">Register your Account</h1>
                        <p className="register-subtitle">Welcome! Choose register method</p>
                    </div>

                    {/* <LogButtons /> */}

                    <TextField
                        {...register("email", { required: "Email is required" })}
                        className="register-input"
                        label="Email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        {...register("name", { required: "Name is required" })}
                        className="register-input"
                        label="Name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            error={!!errors.password}
                        />
                        {errors.password && (
                            <p className="error-message">{errors.password.message}</p>
                        )}
                    </FormControl>

                    <Link
                        href="/login"
                        className="register-link"
                        underline="hover"
                    >
                        Already have an account?
                    </Link>

                    <Button
                        type="submit"
                        className="register-button"
                        variant="contained"
                        disabled={isLoading}
                        fullWidth
                        size="large"
                    >
                        {isLoading ? "Loading..." : "Register"}
                    </Button>
                </form>
            {/* )} */}
            <Box className="register-right-box" />
        </div>
    );
};