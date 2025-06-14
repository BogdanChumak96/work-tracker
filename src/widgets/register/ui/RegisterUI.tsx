import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { registerUser, sendEmail } from '@/shared/api';
import { Button, Input } from '@/shared/ui';
import { Link } from '@/shared/ui/link';
import { ErrorLabel } from '@/shared/ui/error-label';
import { Title } from '@/shared/ui/title';
import { Subtitle } from '@/shared/ui/subtitle';
import styles from './RegisterUI.module.css';

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
        console.log(data);

        try {
            await registerUser(data.name, data.email, data.password);
            await sendEmail(data.email);
            setIsConfirmed(true);
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClickShowPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPassword((show) => !show);
    };

    return (
        <div className={styles.container}>
            {/* {isConfirmed ? (
                <ConfirmCom email="" /> // TODO KOSTYA DO THIS FILE
            ) : ( */}
                <form onSubmit={handleSubmit(handleRegister)} className={styles.formSection}>
                    <div className={styles.headerSection}>
                        <Title className={styles.title} title={"Register your Account"} />
                        <Subtitle className={styles.subtitle} title={'Welcome! Choose register method'} />
                    </div>

                    <div className={styles.inputWrapper}>
                        <Input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && (
                            <ErrorLabel className={styles.errorText} label={errors.email.message || ''} />
                        )}
                    </div>

                    <div className={styles.inputWrapper}>
                        <Input
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                            placeholder="Name"
                            type="text"
                        />
                        {errors.name && (
                            <ErrorLabel className={styles.errorText} label={errors.name.message || ''} />
                        )}
                    </div>

                    <div className={styles.inputWrapper}>
                        <div className={styles.passwordWrapper}>
                            <Input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                                    }
                                })}
                                type={showPassword ? 'text' : 'password'}
                                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                onClick={handleClickShowPassword}
                                className={styles.passwordToggle}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        {errors.password && (
                            <ErrorLabel className={styles.errorText} label={errors.password.message || ''} />
                        )}
                    </div>

                    <div className={styles.linkWrapper}>
                        <Link href="/login" title={"Already have an account?"} className={styles.loginLink} />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
            {/* )} */}
        </div>
    );
};