import React from "react";
import DashboardStats from "./DashboardStats";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import FootballMatchList from "./FootballMatchList";
import TrophyIcon from "@heroicons/react/24/outline/TrophyIcon";
import PlayIcon from "@heroicons/react/24/outline/PlayIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import ScoreCard from "./scoreCard";
// import SlickSlider from "./slickSlider";

interface StatData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

const statsData: StatData[] = [
  {
    title: "Total Goals",
    value: "126",
    icon: <PlayIcon className="w-8 h-8" />,
    description: "↗︎ 15% compared to last season",
  },
  {
    title: "Active Players",
    value: "87",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↗︎ 5 new players added",
  },
  {
    title: "Top Team Wins",
    value: "24",
    icon: <TrophyIcon className="w-8 h-8" />,
    description: "↗︎ 4 wins this week",
  },
  {
    title: "Match Attendance",
    value: "45.3k",
    icon: <ChartBarIcon className="w-8 h-8" />,
    description: "↗︎ 8% higher than expected",
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => (
          <DashboardStats key={k} {...d} colorIndex={k} />
        ))}
      </div>
      <div className="score-card">
        <ScoreCard />
      </div>
      <div className="grid">
        <FootballMatchList />
      </div>
      <div className="">
        {/* <SlickSlider />  */}
      </div>
    </>
  );
};

export default Dashboard;
