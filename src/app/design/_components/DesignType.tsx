"use client";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";

type DesignTypeProps = {
    SelectedDesignType: (design: string) => void;
};

const DesignType = ({ SelectedDesignType }: DesignTypeProps) => {
    const Designs = [
        {
            name: "Modern",
            image: "/Design/modern.jpg",
        },
        {
            name: "Industrial",
            image: "/Design/industrial.jpg",
        },
        {
            name: "Bohemian",
            image: "/Design/bohemian.jpg",
        },
        {
            name: "Traditional",
            image: "/Design/traditional.jpg",
        },
        {
            name: "Rustic",
            image: "/Design/rustic.jpg",
        },
        {
            name: "Minimalist",
            image: "/Design/minimalist.jpg",
        },
    ];

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div>
            <Label className="font-semibold">Interior Style</Label>

            <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
                {Designs.map((design, index) => {
                    const isSelected = selectedOption === design.name;

                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedOption(design.name);
                                SelectedDesignType(design.name);
                            }}
                            className={`rounded-xl p-0.5 cursor-pointer transition-all duration-300
                ${isSelected
                                    ? "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
                                    : "bg-secondary"
                                }`}
                        >
                            <div className="bg-background rounded-xl overflow-hidden hover:shadow-lg ">
                                <Image
                                    src={design.image}
                                    alt={design.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-25 object-cover"
                                />

                                <div className="p-2 text-center font-medium">
                                    {design.name}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DesignType;