import apiClient from "./apiClient";

//api通信のラッパー関数
//運動予定の取得、運動予定の追加、運動予定の削除、運動予定の更新

export const fetchExercises = async () => {
    try {
        const res = await apiClient.get("/api/v1/exercise");
        return res.data;
    } catch (error) {
        throw new Error("運動予定の取得に失敗しました");
    }
}
