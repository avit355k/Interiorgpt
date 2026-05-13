"use client";

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

type Props = {
    AdditionalText: (value: string) => void;
}

const AdditionalReq = ({ AdditionalText }: Props) => {
    return (
        <div>
            <Label className='mb-4 font-semibold'>Enter Additonal Requirments (Optional)</Label>

            <Textarea
                placeholder="Enter Prompt"
                onChange={(e) => AdditionalText(e.target.value)}
            />
        </div>
    )
};

export default AdditionalReq;