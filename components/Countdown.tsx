
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactNode[] = [];

  const intervalLabels: Record<string, string> = {
  days: 'ngày',
  hours: 'giờ',
  minutes: 'phút',
  seconds: 'giây',
};

Object.keys(timeLeft).forEach((interval) => {
  const label = intervalLabels[interval] || interval;
  if (!timeLeft[interval as keyof TimeLeft]) {
    // Don't render if the value is 0, but keep rendering if it has other values
    if (Object.values(timeLeft).some(val => val > 0)) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
          <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-700">
            {String(timeLeft[interval as keyof TimeLeft]).padStart(2, '0')}
          </span>
          <span className="text-xs sm:text-sm uppercase font-serif text-amber-600 tracking-wide">{label}</span>
        </div>
      );
    }
  } else {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-700">
          {String(timeLeft[interval as keyof TimeLeft]).padStart(2, '0')}
        </span>
        <span className="text-xs sm:text-sm uppercase font-serif text-amber-600 tracking-wide">{label}</span>
      </div>
    );
  }
});

  return (
    <div className="flex justify-center my-6">
      {timerComponents.length ? timerComponents : <span className="text-2xl text-amber-800 font-serif">Ngày trọng đại đã đến!</span>}
    </div>
);
};

export default Countdown;
