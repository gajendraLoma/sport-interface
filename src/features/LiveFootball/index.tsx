"use client";

import { useState } from "react";
import TitleCard from "@/components/cards/title-card";

interface MatchData {
  id: number;
  name: string;
  date: string;
  status: string; 
  teamA: string;
  teamB: string;
  score?: string; 
}

const matches: MatchData[] = [
  { id: 1, name: "Team A vs Team B", date: "2025-01-10", status: "live", teamA: "Team A", teamB: "Team B", score: "2-1" },
  { id: 2, name: "Team C vs Team D", date: "2025-01-12", status: "upcoming", teamA: "Team C", teamB: "Team D" },
  { id: 3, name: "Team E vs Team F", date: "2025-01-08", status: "completed", teamA: "Team E", teamB: "Team F", score: "1-3" },
];

function LiveFootball() {
  const [activeTab, setActiveTab] = useState<"live" | "upcoming" | "completed">("live");

  const filteredMatches = matches.filter((match) => match.status === activeTab);

  return (
    <>
      <TitleCard title="Sports | Football ⚽" topMargin="mt-2">
        <div className="tabs tabs-boxed flex justify-start mb-4">
          <button
            className={`tab ${activeTab === "live" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("live")}
          >
            Live
          </button>
          <button
            className={`tab ${activeTab === "upcoming" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Match</th>
                <th>Date</th>
                {activeTab !== "upcoming" && <th>Score</th>}
              </tr>
            </thead>
            <tbody>
              {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
                  <tr key={match.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{match.name}</div>
                          <div className="text-sm text-gray-500">
                            {match.teamA} vs {match.teamB}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{match.date}</td>
                    {activeTab !== "upcoming" && <td>{match.score}</td>}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-gray-500">
                    No matches available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default LiveFootball;
