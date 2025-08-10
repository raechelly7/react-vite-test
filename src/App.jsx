import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const weddingDate = new Date("2025-11-25T00:00:00").getTime();
  const [countdown, setCountdown] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRSVP = () => {
    alert("Thank you for your RSVP! We can't wait to see you!");
  };

  return (
    <div className="invitation">
      <h1>John & Jane</h1>
      <p className="date">November 25, 2025</p>
      <p className="location">Sunset Beach Resort, Boracay</p>

      <div className="countdown">
        <div>
          <span>{countdown.days}</span>
          <small>Days</small>
        </div>
        <div>
          <span>{countdown.hours}</span>
          <small>Hours</small>
        </div>
        <div>
          <span>{countdown.minutes}</span>
          <small>Minutes</small>
        </div>
        <div>
          <span>{countdown.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>

      <button onClick={handleRSVP}>RSVP Now</button>
    </div>
  );
}

export default App;



