"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    credits: number;
};

const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/user");
                const data = await res.json();
                if (data.success) setUser(data.user);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserData = () => useContext(UserContext);