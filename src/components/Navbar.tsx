"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { isSignedIn } = useUser();
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-xl ">
            <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/">
                    <div className="flex gap-2 items-center">
                        <Image src="/logo.svg" alt="logo" width={40} height={40} />

                        <h2 className="font-bold text-lg">InteriorGPT</h2>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/design"
                        className="transition hover:text-primary"
                    >
                        Design
                    </Link>

                    <Link
                        href="/gallery"
                        className="transition hover:text-primary"
                    >
                        Gallery
                    </Link>

                    <Link
                        href="/pricing"
                        className="transition hover:text-primary"
                    >
                        Pricing
                    </Link>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>

                    {/* Desktop Auth */}
                    <div className="hidden items-center gap-3 md:flex">
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

                    {/* Mobile UserButton Outside Menu */}
                    {isSignedIn && (
                        <div className="md:hidden">
                            <UserButton />
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md transition hover:bg-white/20 md:hidden dark:bg-black/20"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-white/10 bg-transparent  px-6 py-5 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-5">

                        <Link
                            href="/design"
                            onClick={() => setMobileMenuOpen(false)}
                            className="transition hover:text-primary"
                        >
                            Design
                        </Link>

                        <Link
                            href="/gallery"
                            onClick={() => setMobileMenuOpen(false)}
                            className="transition hover:text-primary"
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="transition hover:text-primary"
                        >
                            Pricing
                        </Link>

                        {isSignedIn ? (
                            <Link
                                href="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button className="w-full rounded-xl">
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                href="/sign-in"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Button className="w-full rounded-xl">
                                    Sign In
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}