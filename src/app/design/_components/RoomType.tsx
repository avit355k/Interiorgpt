"use client";

import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'

type Props = {
    SelectedRoomType: (value: string) => void;
};

const RoomType = ({ SelectedRoomType }: Props) => {
    return (
        <div>
            <Label className='mb-4 font-semibold'>Room Type</Label>

            <Select onValueChange={(value) => SelectedRoomType(value)}>
                <SelectTrigger className='w-full '>
                    <SelectValue placeholder="Select Room Type" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectItem value='dining-room'>Dining Room</SelectItem>
                        <SelectItem value='bedroom'>Bedroom</SelectItem>
                        <SelectItem value='bathroom'>Bathroom</SelectItem>
                        <SelectItem value='kitchen'>Kitchen</SelectItem>
                        <SelectItem value='kitchen'>Kitchen</SelectItem>
                        <SelectItem value='home-office'>Home Office</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    )
}

export default RoomType;