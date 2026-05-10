import { db } from "@/db/db";
import { Users } from "@/db/schema";
import { eq } from "drizzle-orm";

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json(
            { success: false, message: "Unauthorized" },
            { status: 401 }
        );
    }


    const user = await currentUser();

    if (!user) {
        return NextResponse.json(
            { success: false, message: "User not found" },
            { status: 404 }
        );
    }

    const email = user?.emailAddresses[0].emailAddress;
    //check if email exists in neon db
    let [dbUser] = await db.select().from(Users).where(eq(Users.email, email));

    if (!dbUser) {
        const [newUser] = await db.insert(Users).values({
            name: user?.fullName || "",
            email,
            imageUrl: user.imageUrl,
            credits: 5,
        }).returning();

        dbUser = newUser;
    }

    //return user data from neon db
    return NextResponse.json({
        success: true,
        user: {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            imageUrl: dbUser.imageUrl,
            credits: dbUser.credits,
        },
    });
}