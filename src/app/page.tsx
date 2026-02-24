"use client";

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import ChargingProfileList from '@/components/ChargingProfileList';
import { ChargingProfileData } from '@/components/ChargingProfileCard';

import { mockProfiles } from '@/lib/data';

export default function Home() {
  const [profiles, setProfiles] = useState<ChargingProfileData[]>(mockProfiles);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRemoveProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate a network request with a timeout
    setTimeout(() => {
      setProfiles(mockProfiles);
      setIsRefreshing(false);
    }, 1000); // 1-second delay to show the animation
  };

  return (
    <main className="h-screen bg-slate-50 sm:p-6 lg:p-8 flex justify-center sm:items-center">
      <div className="w-full max-w-md bg-white h-full sm:h-auto sm:max-h-[85vh] flex flex-col shadow-sm sm:rounded-2xl sm:shadow-md border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex-none flex items-center justify-between p-5 border-b border-gray-200 bg-white">
          <h1 className="text-xl font-bold text-slate-800">Charging Profiles</h1>
          <button
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100 disabled:opacity-50"
            aria-label="Refresh profiles"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw size={20} strokeWidth={2} className={isRefreshing ? "animate-spin" : ""} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-5">
          <ChargingProfileList profiles={profiles} onRemove={handleRemoveProfile} />
        </div>
      </div>
    </main>
  );
}
