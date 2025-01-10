import React from 'react'
interface Stat {
    title: string;
    teamA: number;
    teamB: number;
    valueA: number;
    valueB: number;
  }
  
  interface MatchData {
    title: string;
    score: string;
    stats: Stat[];
  }
  
function scoreCard() {
    const matchData: MatchData = {
        title: 'Live Match!',
        score: '62 : 24',
        stats: [
          { title: 'Shoot on Target', teamA: 7, teamB: 3, valueA: 90, valueB: 60 },
          { title: 'Shoot', teamA: 7, teamB: 3, valueA: 85, valueB: 55 },
          { title: 'Fouls', teamA: 7, teamB: 3, valueA: 70, valueB: 50 },
        ]
      };
  return (
    <div className='pt-6 pb-4 row w-full flex gap-4 flex-wrap md:flex-nowrap justify-between '>
      <div className='w-full md:w-4/6 mb-4 md:mb-0'>
  {/* left card */}
<div className="card image-full scoreCard w-full text-center">
  <figure>
    <img
      src="/images/score.jpg"
      alt="Shoes" className='w-full h-full object-cover rounded-lg' />
  </figure>
  <div className="card-body flex items-center justify-start text-center">

    <img
      src="/images/scorecup.png"
      alt="Shoes" className='w-12 h-12 mb-10' />
          <h2 className="text-center font-medium text-lg">England vs Germany</h2>
          <span className='text-sm	font-normal	'>Sunday, 21 January 2022</span>
    <p className='font-medium text-2xl'>03 : 12 : 43 : 14</p>
    <p className='text-xs	font-normal	'>Day Hours Minutes Seconds</p>
    
  </div>
</div>
{/* right card */}
      </div>
        <div className="w-full md:w-4/12">
        <div className="card bg-slate-50 shadow-lg w-full ">
                <div className="card-body text-center">
                <h6 className="text-base font-semibold">{matchData.title}</h6>
                <span className='text-sm text-[#096A00] font-medium dark:text-[#14FF00]'>{matchData.score}</span>

                <div className="card-actions justify-between gap-8 py-4">
                    <img src="/images/league1.png" alt="league1"  className='rounded-full w-12 h-12'/>
                    <button className="btn btn-primary rounded-3xl hover:bg-[#5742A91A] border-none text-[#5742A9] bg-[#5742A91A] px-5	">2 - 2</button>
                    <img src="/images/league2.png" alt="league2"  className='rounded-full w-12 h-12'/>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {matchData.stats.map((stat, index) => (
                    <div key={index} className="">
                        <div className="text-center font-medium text-xs">{stat.title}</div>
                        <div className="flex justify-between mb-1">
                        <span className='text-xs text-[#5742A9]'>{stat.teamA}</span>
                        <span className='text-xs text-[#560617]'>{stat.teamB}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                        <progress
                        style={{
                            backgroundColor: '#5742A933',  // background color
                            
                          }}
                        className="progress pgBar progress-primary w-32 md:w-56" value={stat.valueA} max="100"></progress>
                        <progress className="progress pgBar w-32 md:w-56" value={stat.valueB} max="100"></progress>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </div>

    </div>
    <style scoped>{`
  progress::-webkit-progress-bar {
    background-color: #5742A933 !important; /* Custom background color */
  }
  progress::-webkit-progress-value {
    background-color: #5742A9 !important;  /* Custom progress color */
  }
  progress::-moz-progress-bar {
    background-color: #5742A9 !important;  /* Custom progress color for Firefox */
  }
    


`}</style>
    </div>
  )
}

export default scoreCard
