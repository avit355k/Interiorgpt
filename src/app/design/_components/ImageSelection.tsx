"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";

type Props = {
    selectedImage: (file: File | null) => void;
};

const ImageSelection = ({ selectedImage }: Props) => {

    const [file, setFile] = useState<File | null>(null);

    const onFileSelected = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = event.target.files?.[0];

        if (selectedFile) {
            setFile(selectedFile);

            // Send file to parent
            selectedImage(selectedFile);
        }
    };

    const removeImage = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        setFile(null);

        // Remove file from parent
        selectedImage(null);
    };

    return (
        <div>

            {/* Upload Card */}
            <label htmlFor="upload-image">

                <Card className="relative flex h-87.5 cursor-pointer items-center justify-center overflow-hidden border border-border bg-white/40 backdrop-blur-xl transition hover:border-primary/30 dark:bg-black/40">

                    {/* Image Preview */}
                    {file ? (
                        <>
                            <Image
                                src={URL.createObjectURL(file)}
                                alt="Uploaded Room"
                                fill
                                className="object-cover"
                            />

                            {/* Remove Button */}
                            <button
                                onClick={removeImage}
                                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white backdrop-blur-md transition hover:bg-black/80"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center">

                            <div className="rounded-full border border-white/10 bg-white/5 p-4">
                                <Upload className="h-8 w-8 text-muted-foreground" />
                            </div>

                            <h2 className="mt-6 text-xl font-semibold">
                                Drag & drop or click to upload
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Upload a photo of your room to redesign
                            </p>

                        </div>
                    )}
                </Card>
            </label>

            {/* Hidden Input */}
            <input
                type="file"
                accept="image/*"
                id="upload-image"
                className="hidden"
                onChange={onFileSelected}
            />

        </div>
    );
};

export default ImageSelection;