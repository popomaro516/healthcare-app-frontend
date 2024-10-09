import apiClient from './apiClient';

//api通信のラッパー関数
//運動予定の取得、運動予定の追加、運動予定の削除、運動予定の更新
interface Exercise {
    id: number;
    exercise: string;
    date: string;
    time: string;
}

export const fetchExercises = async () => {
    try {
        console.log("Fetching exercises...");
        const res = await apiClient.get("/api/v1/exercise");
        console.log("Response:", res);
        return res.data;
    } catch (error) {
        console.error("Error fetching exercises:", error);
        throw new Error("運動予定の取得に失敗しました");
    }
}

export const addExercise = async (exercise: Exercise) => {
    try {
        const res = await apiClient.post("/api/v1/exercise", exercise);
        return res.data;
    } catch (error) {
        throw new Error("運動予定の追加に失敗しました");
    }
}