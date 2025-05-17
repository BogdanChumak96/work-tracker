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
            // Error handling could be added here
        } finally {
            setIsLoading(false);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className="flex flex-row items-center justify-center w-screen h-screen bg-blue-50">
            {/* {isConfirmed ? (
                <ConfirmCom email="" />
            ) : ( */}
            <form onSubmit={handleSubmit(handleRegister)} className="w-1/2 h-3/4 flex flex-col justify-center items-center p-10 gap-5 rounded-lg">
                <div className="flex flex-col items-start gap-2 mb-8">
                    <Title className="text-4xl text-black" title={"Register your Account"} />
                    <Subtitle className="text-gray-500" title={'Welcome! Choose register method'} />
                </div>
                <div className="w-[410px]">
                    <Input
                        {...register("email", { required: "Email is required" })}
                        className={`w-full p-3 border rounded-md font-bold ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <ErrorLabel className="text-red-500 text-sm mt-1" label={errors.email.message} />
                    )}
                </div>

                <div className="w-[410px]">
                    <Input
                        {...register("name", { required: "Name is required" })}
                        className={`w-full p-3 border rounded-md font-bold ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Name"
                    />
                    {errors.name && (
                        <ErrorLabel className="text-red-500 text-sm mt-1" label={errors.name.message} />
                    )}
                </div>

                <div className="w-[410px]">
                    <div className="relative">
                        <Input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            type={showPassword ? 'text' : 'password'}
                            className={`w-full p-3 border rounded-md bg-blue-50 font-bold ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Password"
                        />
                        <Button
                            onClick={handleClickShowPassword}
                            className="absolute right-3 top-3 text-gray-500"
                            title={showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        />
                    </div>
                    {errors.password && (
                        <ErrorLabel className="text-red-500 text-sm mt-1" label={errors.password.message || ''} />
                    )}
                </div>

                <div className="flex justify-center items-center w-full">
                    <Link href="/login" title={"Already have an account?"} className="text-blue-600 hover:text-blue-800 hover:underline" />
                </div>

                <Button
                    title={isLoading ? "Loading..." : "Register"}
                    onClick={() => { }}
                    className="w-[410px] h-[50px] font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                />
            </form>
            {/* )} */}
            <div className="w-1/2 h-screen flex justify-center items-center bg-blue-600" />
        </div>
    );
}