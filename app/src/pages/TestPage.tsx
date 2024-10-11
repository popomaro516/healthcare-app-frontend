import React from 'react';
import { fetchExercises } from '@/api/exercise';

const TestPage: React.FC = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a test page.</p>
            <button onClick={async () => {
                const exercises = await fetchExercises();
                console.log(exercises);
            }}>Fetch Exercises</button>
        </div>
    );
};

export default TestPage;