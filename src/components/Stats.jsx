
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [stats, setStats] = useState([
    { id: 1, label: ' "Years of Excellence"', value: 0, endValue: 15 },
    { id: 2, label: 'Satisfaction Rate', value: 0, endValue: 95 },
    { id: 3, label: 'Teacher-Student Ratio', value: 0, endValue: 20 },
    { id: 4, label: 'Qualified Teachers', value: 0, endValue: 100 },
  ]);

  const startCounting = React.useCallback(() => {
    stats.forEach((stat) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < stat.endValue) {
          count += Math.ceil(stat.endValue / 100);
          if (count > stat.endValue) count = stat.endValue;
          setStats((prevStats) =>
            prevStats.map((prevStat) =>
              prevStat.id === stat.id ? { ...prevStat, value: count } : prevStat
            )
          );
        } else {
          clearInterval(interval);
        }
      }, 80);
    });
  }, [stats]);

  const handleScroll = React.useCallback(() => {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startCounting();
      window.removeEventListener('scroll', handleScroll);
    }
  }, [startCounting]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div id="stats-section" className=" flex flex-col  justify-center md:grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center w-[250px]  bg-amber-400 px-[2em] py-[2em] text-[#004d24]  flex flex-col items-center justify-center space-y-5 ">
          <h2 className="text-4xl font-bold border-2 border-white rounded-[100%] h-[100px] w-[100px] text-center pt-6 bg-white">{stat.value.toLocaleString()} </h2>
          <p className="text-lg text-white font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;