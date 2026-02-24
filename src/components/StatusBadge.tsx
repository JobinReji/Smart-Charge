import React from 'react';

type StatusBadgeProps = {
    status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    let bgColor = 'bg-[#F3F4F6]';
    let textColor = 'text-[#4B5563]';

    const normalizedStatus = status.toUpperCase();

    if (['ACCEPTED', 'COMPLETED', 'ACTIVE', 'FINISHED'].includes(normalizedStatus)) {
        bgColor = 'bg-[#DCFCE7]';
        textColor = 'text-[#15803D]';
    } else if (['PENDING', 'OCCUPIED', 'CHARGING'].includes(normalizedStatus)) {
        bgColor = 'bg-[#FEF9C3]';
        textColor = 'text-[#A16207]';
    } else if (normalizedStatus === 'NONE') {
        bgColor = 'bg-[#F3F4F6]';
        textColor = 'text-[#4B5563]';
    }

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${bgColor} ${textColor}`}
        >
            {status}
        </span>
    );
}
