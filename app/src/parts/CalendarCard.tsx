import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar"; // カレンダーコンポーネントをインポート

const CalendarCard: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>ホーム</CardTitle>
                </CardHeader>
                <CardContent>
                    <Calendar onDayClick={handleDateSelect} /> {/* onDayClickプロップを追加 */}
                    {selectedDate && (
                        <p>選択された日付: {selectedDate.toLocaleDateString()}</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default CalendarCard;