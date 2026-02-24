import React from 'react';
import ChargingProfileCard, { ChargingProfileData } from './ChargingProfileCard';

type ChargingProfileListProps = {
    profiles: ChargingProfileData[];
    onRemove: (id: string) => void;
};

export default function ChargingProfileList({ profiles, onRemove }: ChargingProfileListProps) {
    if (profiles.length === 0) {
        return (
            <div className="flex justify-center items-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No charging profiles available.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {profiles.map((profile) => (
                <ChargingProfileCard key={profile.id} profile={profile} onRemove={onRemove} />
            ))}
        </div>
    );
}
