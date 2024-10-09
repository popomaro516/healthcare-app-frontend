import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'

interface ScheduleCardProps {
    title: string
    date: string
    time: string
    category: string
}

export default function LightGreenScheduleCard({ title, date, time, category }: ScheduleCardProps = {
    title: "Team Meeting",
    date: "2024-03-15",
    time: "14:00",
    category: "Work"
}) {
    return (
        <Card className="w-full max-w-3xl bg-gradient-to-r from-green-50 to-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-green-700 mb-2">{title}</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center text-green-600 text-sm">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                {date}
                            </div>
                            <div className="flex items-center text-green-600 text-sm">
                                <ClockIcon className="w-4 h-4 mr-2" />
                                {time}
                            </div>
                        </div>
                    </div>
                    <Badge variant="outline" className="bg-green-200 text-green-700 border-green-300 ml-4">
                        {category}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}