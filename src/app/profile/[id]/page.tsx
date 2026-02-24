import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MoreVertical, Download, Edit } from 'lucide-react';
import { mockProfiles } from '@/lib/data';

export default function ProfileDetailsPage({ params }: { params: { id: string } }) {
    // Find the profile based on the ID from the URL
    const profile = mockProfiles.find((p) => p.id === params.id);

    if (!profile) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <h1 className="text-xl font-bold text-slate-800 mb-4">Profile not found</h1>
                <Link href="/">
                    <button className="px-4 py-2 bg-[#31C94F] text-white rounded-lg hover:opacity-90 transition-opacity">
                        Go Back
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <main className="h-[100dvh] bg-slate-50 overflow-hidden sm:p-6 lg:p-8 flex justify-center sm:items-center">
            <div className="w-full max-w-md bg-slate-50 h-full sm:max-h-[90vh] flex flex-col sm:rounded-2xl sm:shadow-md border border-gray-200 relative overflow-hidden">

                {/* Header */}
                <div className="flex-none flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                    <Link href="/">
                        <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100" aria-label="Go back">
                            <ArrowLeft size={20} strokeWidth={2} />
                        </button>
                    </Link>
                    <h1 className="text-lg font-bold text-slate-800">Charging Profile Details</h1>
                    <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100" aria-label="More options">
                        <MoreVertical size={20} strokeWidth={2} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-6 pb-40">

                    {/* Profile Information Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                        <h2 className="text-sm font-bold text-slate-900 mb-4">Profile Information</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Session ID</span>
                                <span className="text-slate-800">{profile.sessionId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Profile Sent At (CET)</span>
                                <span className="text-slate-800">{profile.timestamp}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Profile Start (CET)</span>
                                <span className="text-slate-800">{profile.profileStart}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Profile End (CET)</span>
                                <span className="text-slate-800">{profile.profileEnd}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Duration (SEC)</span>
                                <span className="text-slate-800">{profile.durationSec}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Charging Rate Unit</span>
                                <span className="text-slate-800">{profile.chargingRateUnit}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Min Charging Rate</span>
                                <span className="text-[#31C94F] font-medium">{profile.minChargingRate} W</span>
                            </div>
                        </div>
                    </div>

                    {/* Charging Profile Schedule Section */}
                    <div>
                        <h2 className="text-sm font-bold text-slate-900 mb-3 px-1">Charging Profile Schedule</h2>
                        <div className="space-y-3">
                            {profile.schedules && profile.schedules.length > 0 ? (
                                profile.schedules.map((schedule, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-sm">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-slate-500">Start (CET)</span>
                                                <span className="text-slate-800">{schedule.start}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-500">Duration</span>
                                                <span className="text-slate-800">{schedule.duration} SEC</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-500">Start Period</span>
                                                <span className="text-slate-800">{schedule.startPeriod}</span>
                                            </div>
                                            <div className="flex justify-between pt-1">
                                                <span className="text-slate-500">Power Limit</span>
                                                <span className="text-[#31C94F] font-medium">{schedule.powerLimit} W</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-6 px-4 bg-white rounded-xl border border-dashed border-gray-200">
                                    <p className="text-slate-400 text-sm italic">
                                        No charging profile schedule available.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Sticky Bottom Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-50 border-t border-gray-200 flex flex-col gap-3 z-10">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#31C94F] hover:opacity-90 text-white font-medium py-3 rounded-xl transition-opacity shadow-sm">
                        <Download size={18} strokeWidth={2} />
                        Export Profile
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-700 font-medium py-3 border border-gray-300 rounded-xl transition-colors shadow-sm">
                        <Edit size={18} strokeWidth={2} className="text-slate-600" />
                        Edit Schedule
                    </button>
                </div>

            </div>
        </main>
    );
}
