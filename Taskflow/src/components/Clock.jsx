
import { useEffect, useState } from 'react';
import '../styles/Clock.css';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6 + seconds * 0.1;
  const secondRotation = seconds * 6;

  const digitalTime = currentTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const date = currentTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="clock-widget">
      <div className="clock-face">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className="clock-number"
            style={{
              transform: `rotate(${index * 30}deg) translateY(-43px) rotate(-${index * 30}deg)`,
            }}
          >
            {index === 0 ? 12 : index}
          </span>
        ))}

        <div
          className="clock-hand clock-hour"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        />

        <div
          className="clock-hand clock-minute"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        />

        <div
          className="clock-hand clock-second"
          style={{ transform: `rotate(${secondRotation}deg)` }}
        />

        <div className="clock-center" />
      </div>

      <div className="clock-info">
        <span className="clock-label">CURRENT TIME</span>

        <h2 className="clock-digital">{digitalTime}</h2>

        <p className="clock-date">{date}</p>

        <span className="clock-timezone">INDIA STANDARD TIME · IST</span>
      </div>
    </div>
  );
}

export default Clock;
