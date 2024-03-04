"use client";

import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "./inputs/Input";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {

    const router = useRouter();

    const [variant, setVariant] = useState<Variant>("LOGIN");

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else setVariant("LOGIN");
    }, [variant]);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>(
        {
            defaultValues: {
                name: "",
                email: "",
                password: ""
            }
        }
    );

    function onSubmit(data: FieldValues) {
        console.log(data);

        router.push("/users");
    }

    function socialAction(action: string) {
        console.log(action);
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === "REGISTER" && (
                        <Input
                            id="name"
                            label="Name"
                            errors={errors}
                            disabled={isSubmitting}
                            register={register}
                        />
                    )}
                    <Input
                        id="email"
                        label="Email address"
                        type="email"
                        errors={errors}
                        disabled={isSubmitting}
                        register={register}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        errors={errors}
                        disabled={isSubmitting}
                        register={register}
                    />
                    <div>
                        <Button
                            disabled={isSubmitting}
                            fullWidth
                            type="submit"
                        >
                            {variant === "LOGIN" ? "Sign in" : "Register"}
                        </Button>
                    </div>
                </form>

                <div
                    className="mt-6"
                >
                    <div
                        className="relative"
                    >
                        <div
                            className="absolute inset-0 flex flex-row items-center"
                        >
                            <div
                                className="w-full border-t border-gray-300"
                            />
                        </div>
                        <div
                            className="relative flex flex-row justify-center text-sm"
                        >
                            <span
                                className="bg-white px-2 text-gray-500"
                            >
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div
                        className="mt-6 flex flex-row gap-2"
                    >
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction("github")}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction("google")}
                        />
                    </div>
                </div>

                <div
                    className="flex flex-row gap-2 justify-center text-sm mt-6 px-2 text-gray-500"
                >
                    <div>
                        {variant === "LOGIN" ? "New to Messenger?" : "Already have an account?"}
                    </div>
                    <div
                        className="underline cursor-pointer"
                        onClick={toggleVariant}
                    >
                        {variant === "LOGIN" ? "Create an Account" : "Login"}
                    </div>
                </div>

            </div>
        </div>
    );
}