import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { FaEye } from 'react-icons/fa';
import StatusBadge from './StatusBadge';

export type ChargingProfileData = {
    id: string;
    timestamp: string;
    soc: number;
    profileName: string;
    location?: string;
    cpoStatus: string;
    chargerStatus: string;
    currentCpoStatus: string;
    currentChargerStatus: string;
};

type ChargingProfileCardProps = {
    profile: ChargingProfileData;
    onRemove: (id: string) => void;
};

export default function ChargingProfileCard({ profile, onRemove }: ChargingProfileCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4">
            {/* Top Row: Timestamp and SOC */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-gray-900 text-base">{profile.timestamp}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{profile.profileName}</p>
                    {profile.location && (
                        <p className="text-xs text-gray-400 mt-0.5">{profile.location}</p>
                    )}
                </div>
                <div className="text-right">
                    <div className="font-bold text-gray-900 text-lg">{profile.soc}%</div>
                    <div className="text-xs text-gray-500">Creation SOC</div>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 mt-2">
                <div className="space-y-1.5">
                    <div className="text-xs text-gray-500">CPO Status</div>
                    <StatusBadge status={profile.cpoStatus} />
                </div>
                <div className="space-y-1.5">
                    <div className="text-xs text-gray-500">Charger Status</div>
                    <StatusBadge status={profile.chargerStatus} />
                </div>

                <div className="space-y-1.5">
                    <div className="text-xs text-gray-500">Cancel CPO Status</div>
                    <StatusBadge status={profile.currentCpoStatus} />
                </div>
                <div className="space-y-1.5">
                    <div className="text-xs text-gray-500">Cancel Charger Status</div>
                    <StatusBadge status={profile.currentChargerStatus} />
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end items-center gap-4 mt-2 pt-2">
                <Link
                    href={`/profile/${profile.id}`}
                    className="text-[#31C94F] hover:opacity-80 transition-opacity flex items-center justify-center h-5"
                    aria-label="View Details"
                >
                    <FaEye size={20} />
                </Link>
                <button
                    className="text-[#EF4444] hover:text-red-600 transition-colors flex items-center justify-center h-5"
                    aria-label="Cancel or Reject"
                    onClick={() => onRemove(profile.id)}
                >
                    <X size={20} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
}
