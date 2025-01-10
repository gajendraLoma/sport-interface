"use client"
import TitleCard from "@/components/cards/title-card";
import React, { useState } from "react";
import GetApp from "./getApp";


const NewsList: React.FC = () => {
  const truncateText = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  };

    return (
        <>
          <div className="text-xl font-normal pt-8 pb-4">
          📰 All News and Transfer Today
          </div>
            <div role="tablist" className="tabs tabs-bordered ">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="All News"
                    defaultChecked />
                <div role="tabpanel1" className="tab-content p-10 pl-0 pr-0 ">
          <div className="flex flex-wrap justify-between">
            <div className=' mb-4'>
              <div className="w-72 dark:bg-slate-900 dark:text-white">
                <figure><img src="/images/news1.png" alt="news1" className="w-full h-full" /></figure>
                <div className="card-body pt-3 pl-0 pr-0">
                  <h4 className="card-title text-xs	font-semibold text-[#F5C451]">PREMIER LEAGUE</h4>
                  <p className="font-medium	text-base leading-5	">Signs of Arsenal getting stronger in the Premier League</p>
                <span className="text-sm font-normal text-gray-500 leading-4	">
                {truncateText("The victory over Wolves provided a comfortable distance for Arsenal at the top of the Premier League standings",70)}                
                  </span>
                </div>
              </div>
            </div>
            <div className=' mb-4'>
              <div className="w-72 dark:bg-slate-900 dark:text-white">
                <figure><img src="/images/news2.png" alt="news2" className="w-full h-full" /></figure>
                <div className="card-body pt-3 pl-0 pr-0">
                  <h4 className="card-title text-xs	font-semibold text-[#F5C451]">PREMIER LEAGUE</h4>
                  <p className="font-medium	text-base leading-5	">Erling Haaland Leads Premier League Top Scorers 2022</p>
                <span className="text-sm font-normal text-gray-500 leading-4	">
                {truncateText("Until the competition break in facing the 2022 World Cup in Qatar, Haaland is still the top scorer or top scorer for the 2022/2023 Premier League temporarily.",70)}                
                  </span>
                </div>
              </div>
            </div>
            <div className=' mb-4'>
              <div className="w-72 dark:bg-slate-900 dark:text-white">
                <figure><img src="/images/news3.png" alt="news3" className="w-full h-full" /></figure>
                <div className="card-body pt-3 pl-0 pr-0">
                  <h4 className="card-title text-xs	font-semibold text-[#F5C451]">PREMIER LEAGUE</h4>
                  <p className="font-medium	text-base leading-5	">Chelsea were humiliated 1-4 at Brighton headquarters</p>
                <span className="text-sm font-normal text-gray-500 leading-4	">
                {truncateText("Chelsea were humiliated by losing with a big score of 1-4 when they visited Brighton headquarters in Matchday 14 of the English Premier League at the Amex Stadium on Saturday night",70)}                
                  </span>
                </div>
              </div>
            </div>
            <div className=' mb-4'>
              <div className="w-72 dark:bg-slate-900 dark:text-white">
                <figure><img src="/images/news4.png" alt="news4" className="w-full h-full" /></figure>
                <div className="card-body pt-3 pl-0 pr-0">
                  <h4 className="card-title text-xs	font-semibold text-[#F5C451]">PREMIER LEAGUE</h4>
                  <p className="font-medium	text-base leading-5	">Garnacho led Manchester United to beat Fulham</p>
                <span className="text-sm font-normal text-gray-500 leading-4	">
                {truncateText("Midfielder Christian Eriksen not only put United ahead in the 14th minute but also scored his first goal for United since joining the Red Devils last summer.",70)}                
                  </span>
                </div>
              </div>
            </div>
          </div>

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Hot News" />
                 <div role="tabpanel1" className="tab-content p-10">
                 Hot News content 

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Transfer" />
                <div role="tabpanel1" className="tab-content p-10">
                Transfer content 
                </div>
              
            </div>

            <div className="divider mt-2"></div>
       
        </>
    )
}

export default NewsList;
