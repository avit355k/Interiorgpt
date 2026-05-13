"use client";

import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";

export default function Designpage() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedRoomType, setSelectedRoomType] = useState<string>("");
    const [selectedDesign, setSelectedDesign] = useState<string>("");
    const [additionalReq, setAdditionalReq] = useState<string>("");

    return (
        <div className="flex min-h-screen flex-col items-center bg-background px-6 py-6 text-center text-foreground">

            <h1 className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                AI Interior Design Tool
            </h1>

            <span className="mt-4 block max-w-2xl font-light italic text-muted-foreground">
                Transform any room with AI-generated designs
            </span>

            {/* Main Layout */}
            <div className="mt-12 grid w-full max-w-7xl gap-6 lg:grid-cols-2 ">
                {/*left side*/}
                <div className="space-y-6">
                    {/* Image Selection*/}
                    <ImageSelection
                        selectedImage={(file: File | null) =>
                            setSelectedImage(file)
                        }
                    />
                </div>

                {/*right side*/}
                <Card className="flex flex-col gap-6 p-6 border border-border bg-white/40 backdrop-blur-xl transition hover:border-primary/30 dark:bg-black/40">
                    {/*room type*/}
                    <RoomType
                        SelectedRoomType={(value: string) =>
                            setSelectedRoomType(value)
                        }
                    />
                    {/*Design type */}
                    <DesignType SelectedDesignType={(value: string) =>
                        setSelectedDesign(value)
                    }
                    />
                    {/*Additional Text Area requiremenets */}
                    <AdditionalReq
                        AdditionalText={(value: string) =>
                            setAdditionalReq(value)
                        }
                    />
                    {/*button to generate image */}
                    <Button size='lg' className="w-full">
                        Generate
                    </Button>

                    <p className="text-sm ">1 Credit will use to redesign your room</p>
                </Card>

            </div>

        </div>
    );
}