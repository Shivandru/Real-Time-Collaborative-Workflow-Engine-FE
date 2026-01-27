"use client"

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/src/components/Logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserFormValues } from "@/types/user";
import { GoogleButton } from "./GoogleButton";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignUpForm = () => {
    // const form = useForm<UserFormValues>({
    //     resolver: zodResolver(userSchema),
    //     defaultValues: {
    //         username: "",
    //         email: "",
    //         auth: {
    //             provider: "local",
    //             password: "",
    //             googleId: null
    //         }
    //     }
    // })
    const { data } = useSession();

    // const { register, handleSubmit, watch, formState: { isSubmitting, errors } } = form;

    const handleGoogleLogin = async () => {
        signIn("google")
      };
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
            {/* Header */}
            <Logo />

            {/* Signup Form */}
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="bg-card border rounded-2xl p-8 shadow-lg">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2">Create your account</h1>
                            <p className="text-muted-foreground">
                                Start organizing your work for free
                            </p>
                        </div>

                        {/* <form onSubmit={handleSubmit(async (data) => {
                            await signIn("credentials", {
                                username: data.username,
                                email: data.email,
                                password: data.auth.password,
                                provider: "local",
                                redirect: false
                            })
                        })} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("username")}
                                />
                                {errors?.username && (
                                    <p className="text-xs text-destructive">
                                        {errors.username.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    {...register("email")}
                                />
                                {errors?.email && (
                                    <p className="text-xs text-destructive">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Create a strong password"
                                    {...register("auth.password")}
                                />
                                {errors?.auth?.password && (
                                    <p className="text-xs text-destructive">
                                        {errors.auth.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-start gap-2">
                                <Checkbox
                                    id="terms"
                                    onCheckedChange={(checked) =>
                                        form.setValue("termsAccepted" as any, checked as boolean)
                                    }
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-normal leading-tight"
                                >
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-primary hover:underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-primary hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                // disabled={}
                            >
                                Create account
                            </Button>
                        </form> */}
                        <div className="mt-3">
                            <GoogleButton onClick={handleGoogleLogin} />
                        </div>
                        {/* <div className="mt-6 text-center">
                            <p className="text-muted-foreground">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Log in
                                </Link>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm