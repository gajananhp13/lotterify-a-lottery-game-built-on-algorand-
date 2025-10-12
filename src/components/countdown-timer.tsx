"use client";

import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const TimeValue = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-sm font-body text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
);

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

   useEffect(() => {
    // Set initial value on client-side to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
        <div className="text-2xl font-headline text-accent font-bold">
            Draw in progress!
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      <TimeValue value={timeLeft.days} label="Days" />
      <span className="text-4xl font-headline text-muted-foreground pb-5">:</span>
      <TimeValue value={timeLeft.hours} label="Hours" />
      <span className="text-4xl font-headline text-muted-foreground pb-5">:</span>
      <TimeValue value={timeLeft.minutes} label="Minutes" />
      <span className="text-4xl font-headline text-muted-foreground pb-5">:</span>
      <TimeValue value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
