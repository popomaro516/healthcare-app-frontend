import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Activity } from "lucide-react";

const Home: React.FC = () => {
  return (
    <Card className="w-full max-w-sm bg-purple-500 text-white sm:w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">今日のアクティビティ</CardTitle>
        <Activity className="h-4 w-4 text-white" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">9000steps</div>
        <p className="text-xs text-white/70">Steps taken today</p>
        <div className="flex items-center pt-1">
          <TrendingUp className="h-4 w-4 text-white mr-1" />
          <span className="text-xs text-white/70">
             昨日より16%多い
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Home;