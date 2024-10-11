import React, { useEffect, useState } from 'react';
import CalendarCard from '@/parts/CalendarCard';
import LightGreenScheduleCard from '@/parts/ScheduleCard';
import { fetchExercises } from '@/api/exercise';

const Home: React.FC = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='flex'>
        <CalendarCard />
        <div className='grid grid-cols-1 gap-1'>
        {exercises.map((exercise) => (
          <LightGreenScheduleCard
            key={exercise.id}
            title={exercise.exercise}
            date={exercise.date}
            time={exercise.time}
            exercise={exercise.exercise}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;