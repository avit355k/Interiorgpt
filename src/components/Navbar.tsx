"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar() {
    const { isSignedIn } = useUser();
    const { theme, setTheme } = useTheme();

    return (
        <nav className="border-b bg-background text-foreground">
            <div className="mx-auto flex h-16 items-center justify-between px-6">

                {/* Logo */}
                <Link href="/">
                    <div className="flex gap-2 items-center">
                        <Image src="/logo.svg" alt="logo" width={40} height={40} />

                        <h2 className="font-bold text-lg">InteriorGPT</h2>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="hover:text-primary"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="hover:text-primary"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="hover:text-primary"
                    >
                        Contact
                    </Link>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="rounded-md border p-2 hover:bg-accent"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>

                    {/* User Auth Links */}
                    <div className="flex items-center gap-3">
                        {isSignedIn ? (
                            <>
                                <Link href="/dashboard">
                                    <Button>
                                        Dashboard
                                    </Button>
                                </Link>

                                <UserButton />
                            </>
                        ) : (
                            <>
                                <Link href="/sign-in">
                                    <Button>
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}