import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed left-4 top-4 bg-dark-card/90 backdrop-blur-lg px-3 py-1.5 rounded-full border border-dark-border/30 shadow-lg">
      <span className="text-white/90 font-mono text-base">
        {time.toLocaleTimeString('en-US', { hour12: false })}
      </span>
    </div>
  );
}

export default Clock;
