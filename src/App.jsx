import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const weddingDate = new Date("2025-08-25T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft("The wedding is happening today! 🎉");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="wedding-container">
      <header className="wedding-header">
        <h1>💍 John & Jane</h1>
        <p className="subtitle">We’re getting married!</p>
      </header>

      <main>
        <section className="details">
          <p>
            Join us on <strong>August 25, 2025</strong>  
            at <strong>Sunset Beach</strong>
          </p>
        </section>

        <section className="countdown">
          <h2>Countdown to Our Big Day</h2>
          <div>{timeLeft}</div>
        </section>
      </main>

      <footer>
        <p>With love, John & Jane ❤️</p>
      </footer>
    </div>
  );
}

export default App;
