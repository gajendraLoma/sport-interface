"use client";
import TitleCard from "@/components/cards/title-card";
import React, { useState } from "react";
import GetApp from "./getApp";
import NewsList from "./NewsList";
import CompanyLogos from "./companyLogos";
import ShoppingCardList from "./shoppingCardList";

interface LatestMatch {
  teamA: string;
  teamAFlag: string;
  score: string;
  teamB: string;
  teamBFlag: string;
  status: string;
  date: string;
  iconNot: string;
  flowicon: string;
}
interface PremierLeague {
  position: number;
  Leagueflag: string;
  club: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  lastMatches: boolean[];
}

const FootballMatchList: React.FC = () => {
  const latestMatches: LatestMatch[] = [
    {
      teamA: "Argentina",
      teamAFlag: "images/flag1.png",
      score: "1 - 2",
      teamB: "Italy",
      teamBFlag: "images/flag6.png",
      status: "Full - Time",
      date: "18 December 2022",
      iconNot: "images/icon.png",
      flowicon: "images/flow.png",
    },
    {
      teamA: "Portugal",
      teamAFlag: "images/flag2.png",
      score: "2 - 3",
      teamB: "Belgium",
      teamBFlag: "images/flag7.png",
      status: "Full - Time",
      date: "18 December 2022",
      iconNot: "images/icon.png",
      flowicon: "images/flow.png",
    },
    {
      teamA: "Ghana",
      teamAFlag: "images/flag3.png",
      score: "1 - 3",
      teamB: "Brazil",
      teamBFlag: "images/flag8.png",
      status: "Full - Time",
      date: "17 December 2022",
      iconNot: "images/icon.png",
      flowicon: "images/flow.png",
    },
    {
      teamA: "Uruguay",
      teamAFlag: "images/flag4.png",
      score: "2 - 2",
      teamB: "Poland",
      teamBFlag: "images/flag9.png",
      status: "Full - Time",
      date: "17 December 2022",
      iconNot: "images/icon.png",
      flowicon: "images/flow.png",
    },
    {
      teamA: "Spanish",
      teamAFlag: "images/flag5.png",
      score: "3 - 3",
      teamB: "Czech",
      teamBFlag: "images/flag10.png",
      status: "Full - Time",
      date: "16 December 2022",
      iconNot: "images/icon.png",
      flowicon: "images/flow.png",
    },
  ];

  const premierLeague: PremierLeague[] = [
    {
      position: 1,
      Leagueflag: "images/pl1.png",
      club: "Chelsea F.C",
      wins: 14,
      draws: 3,
      losses: 1,
      points: 35,
      lastMatches: [true, true, true, true, true],
    },
    {
      position: 2,
      Leagueflag: "images/pl2.png",
      club: "Manchester City",
      wins: 13,
      draws: 3,
      losses: 2,
      points: 32,
      lastMatches: [true, true, true, false, true],
    },
    {
      position: 3,
      Leagueflag: "images/pl3.png",
      club: "Liverpool",
      wins: 13,
      draws: 3,
      losses: 3,
      points: 30,
      lastMatches: [true, false, true, true, true],
    },
    {
      position: 4,
      Leagueflag: "images/pl4.png",
      club: "Manchester United",
      wins: 12,
      draws: 4,
      losses: 3,
      points: 28,
      lastMatches: [false, true, true, true, true],
    },
    {
      position: 5,
      Leagueflag: "images/pl5.png",
      club: "West Ham United",
      wins: 11,
      draws: 4,
      losses: 4,
      points: 27,
      lastMatches: [true, true, true, true, false],
    },
    {
      position: 6,
      Leagueflag: "images/pl6.png",
      club: "Arsenal F.C",
      wins: 11,
      draws: 4,
      losses: 6,
      points: 25,
      lastMatches: [true, false, false, true, true],
    },
  ];

  return (
    <>
      <TitleCard title="⚽ Football Match" topMargin="mt-2">
        <div role="tablist" className="tabs tabs-bordered ">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label=" Latest Match"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10 pl-0 pr-0 ">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <tbody>
                  {latestMatches.map((match, index) => (
                    <tr key={index}>
                      <td className="flex items-center gap-2">
                        <img
                          src={match.teamAFlag}
                          alt={match.teamA}
                          className="w-6 h-6 rounded-full"
                        />
                        {match.teamA}
                      </td>
                      <td>
                        <button className="text-xs font-medium  bg-[#5742a94f] text-[#5742A9] p-2 pl-4 pr-4 rounded-full">
                          {match.score}
                        </button>
                      </td>
                      <td className="flex items-center gap-2">
                        <img
                          src={match.teamBFlag}
                          alt={match.teamB}
                          className="w-6 h-6 rounded-full"
                        />
                        {match.teamB}
                      </td>
                      <td>
                        <span className="badge text-red-500 text-xs font-medium p-4 bg-[#fb0c0c3b]">
                          {match.status}
                        </span>
                      </td>
                      <td>{match.date}</td>
                      <td className="flex">
                        <img
                          src={match.iconNot}
                          alt="iconNot"
                          className="w-6 h-6"
                        />

                        <img
                          src={match.flowicon}
                          alt="flowicon"
                          className="w-6 h-6"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Coming Match"
          />
          <div role="tabpanel" className="tab-content p-10">
            Coming Match content
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Pre-season"
          />
          <div role="tabpanel" className="tab-content p-10">
            Pre-season content
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Live Games"
          />
          <div role="tabpanel" className="tab-content p-10">
            Live Games content
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Fun Football"
          />
          <div role="tabpanel" className="tab-content p-10">
            Fun Football content
          </div>
        </div>

        <div className="divider mt-2"></div>

        <div className="Standings">
          <div className="">
            <h6>🏆 Standings</h6>
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center gap-2">
              <img src="images/plus.png" alt="flag1" width={50} height={32} />
              <p className="text-sm font-semibold">Premier League</p>
            </div>
            <div className="flex items-center gap-1">
              View All
              <img src="images/rightA.png" alt="flag1" />
            </div>
          </div>
          <div className="tableData pt-4">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Club</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>Points</th>
                  <th>Last Matches</th>
                </tr>
              </thead>
              <tbody>
                {premierLeague.map((team, index) => (
                  <tr
                    key={index}
                    className={` border-b-[4px] border-b-[#fffcfc] ${
                      index < 4
                        ? "bg-[#F2F0F9] !dark:bg-[#3B3A50]"
                        : "bg-[#FEE6EB] !dark:bg-[#502F37]"
                    }`}
                  >
                    <td className="flex items-center gap-1">
                      {team.position} &nbsp;{" "}
                      <img
                        src={team.Leagueflag}
                        alt="flag1"
                        width={20}
                        height={20}
                      />{" "}
                      {team.club}
                    </td>
                    <td>{team.wins}</td>
                    <td>{team.draws}</td>
                    <td>{team.losses}</td>
                    <td>{team.points}</td>
                    <td className="flex gap-1">
                      {team.lastMatches.map((match, idx) => (
                        <span
                          key={idx}
                          className={`badge ${
                            match ? "badge-success" : "badge-error"
                          }`}
                        >
                          {match ? "✔" : "✘"}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="">
              <ul className=" flex items-center gap-4">
                <li className="flex items-center text-sm font-semibold">
                  <span className=" text-2xl text-[#5742A9]">•</span> &nbsp;
                  Champions League
                </li>
                <li className="flex items-center text-sm font-semibold">
                  <span className=" text-2xl text-[#560617]">•</span> &nbsp;
                  Europa League
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider mt-4"></div>

        <div className="">
          <CompanyLogos />
        </div>

        <div className="divider mt-8"></div>

        <div className="">
          <ShoppingCardList />
        </div>

        <GetApp />
        <NewsList />
      </TitleCard>
    </>
  );
};

export default FootballMatchList;
