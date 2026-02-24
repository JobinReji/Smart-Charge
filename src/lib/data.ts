import { ChargingProfileData } from '@/components/ChargingProfileCard';

export type ScheduleItem = {
    start: string;
    duration: number;
    startPeriod: number;
    powerLimit: number;
};

export type ChargingProfileDetailData = ChargingProfileData & {
    sessionId: string;
    profileStart: string;
    profileEnd: string;
    durationSec: number;
    chargingRateUnit: string;
    minChargingRate: number;
    schedules: ScheduleItem[];
};

export const mockProfiles: ChargingProfileDetailData[] = [
    {
        id: '1',
        timestamp: '2024-01-15 14:30:25 CET',
        soc: 85,
        profileName: 'Profile Sent At (CET)',
        cpoStatus: 'ACCEPTED',
        chargerStatus: 'ACTIVE',
        currentCpoStatus: 'PENDING',
        currentChargerStatus: 'NONE',

        // Details
        sessionId: 'CHG-2024-001-789456',
        profileStart: '2024-01-15 14:35:00',
        profileEnd: '2024-01-15 18:45:00',
        durationSec: 15600,
        chargingRateUnit: 'Watts (W)',
        minChargingRate: 3200,
        schedules: [
            { start: '2024-01-15 14:35:00', duration: 3600, startPeriod: 1, powerLimit: 8000 },
            { start: '2024-01-15 15:35:00', duration: 7200, startPeriod: 2, powerLimit: 11000 },
            { start: '2024-01-15 17:35:00', duration: 4200, startPeriod: 3, powerLimit: 6500 },
            { start: '2024-01-15 18:45:00', duration: 0, startPeriod: 4, powerLimit: 0 },
        ]
    },
    {
        id: '2',
        timestamp: '2024-01-15 12:15:40 CET',
        soc: 72,
        profileName: 'Profile Sent At (CET)',
        cpoStatus: 'ACCEPTED',
        chargerStatus: 'CHARGING',
        currentCpoStatus: 'NONE',
        currentChargerStatus: 'NONE',

        // Details
        sessionId: 'CHG-2024-002-123456',
        profileStart: '2024-01-15 12:20:00',
        profileEnd: '2024-01-15 15:00:00',
        durationSec: 9600,
        chargingRateUnit: 'Watts (W)',
        minChargingRate: 2000,
        schedules: [
            { start: '2024-01-15 12:20:00', duration: 3600, startPeriod: 1, powerLimit: 6000 },
            { start: '2024-01-15 13:20:00', duration: 6000, startPeriod: 2, powerLimit: 8000 },
        ]
    },
    {
        id: '3',
        timestamp: '2024-01-15 09:45:12 CET',
        soc: 95,
        profileName: 'Profile Sent At (CET)',
        cpoStatus: 'COMPLETED',
        chargerStatus: 'FINISHED',
        currentCpoStatus: 'NONE',
        currentChargerStatus: 'NONE',

        // Details
        sessionId: 'CHG-2024-003-987654',
        profileStart: '2024-01-15 09:50:00',
        profileEnd: '2024-01-15 10:30:00',
        durationSec: 2400,
        chargingRateUnit: 'Watts (W)',
        minChargingRate: 1500,
        schedules: [
            { start: '2024-01-15 09:50:00', duration: 2400, startPeriod: 1, powerLimit: 4000 },
        ]
    }
];
