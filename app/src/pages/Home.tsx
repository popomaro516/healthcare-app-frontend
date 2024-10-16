import React, { useEffect, useState } from 'react';
import CalendarCard from '@/parts/CalendarCard';
import LightGreenScheduleCard from '@/parts/ScheduleCard';
import { fetchExercises } from '@/api/exercise';
import { Schedule } from '@/types/schedulecard'; // インターフェースをインポート

const Home: React.FC = () => {
  const [exercises, setExercises] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ホームページ</h1>
      {exercises.map((exercise, index) => (
        <LightGreenScheduleCard
          key={index}
          title={exercise.title}
          date={exercise.date}
          time={exercise.time}
          exercise={exercise.exercise}
        />
      ))}
    </div>
  );
};

export default Home;