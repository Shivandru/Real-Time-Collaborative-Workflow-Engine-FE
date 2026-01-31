"use client"

import Logo from "@/src/components/Logo";
import { GoogleButton } from "./GoogleButton";
import { signIn } from "next-auth/react";

const SignUpForm = () => {

    const handleGoogleLogin = async () => {
        signIn("google", { callbackUrl: "/home" });
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
                        <div className="mt-3">
                            <GoogleButton onClick={handleGoogleLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm