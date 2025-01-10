"use client"
import TitleCard from "@/components/cards/title-card";
import DummyData from "@/helper/dummy-data";
import  { Match } from "@/helper/dummy-data";
import React, { useState } from "react";




const Worldcup: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>(DummyData.MATCHES);

    const getMatchStatus = (status: string) => {
        if (status === "Won") return <div className="badge badge-success">{status}</div>;
        if (status === "Upcoming") return <div className="badge badge-primary">{status}</div>;
        else return <div className="badge badge-ghost">{status}</div>;
    }

    return (
        <>
            <TitleCard title="⚽ Football Match" topMargin="mt-2">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                            <th>Match No</th>
                                <th>Scheduled Date</th>
                                <th>Teams</th>
                                <th>Score</th>
                                <th>Status</th>
                                <th>Result Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                matches.map((match, index) => (
                                    <tr key={index}>
                                        <td>{match.matchNo}</td>
                                        <td>{match.scheduledDate}</td>
                                        <td>{match.teams}</td>
                                        <td>{match.score}</td>
                                        <td>{getMatchStatus(match.status)}</td>
                                        <td>{match.resultDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Worldcup;
