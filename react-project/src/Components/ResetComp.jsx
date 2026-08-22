import React, { useEffect, useState } from "react";

function ResetCopm({ start }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const handleReset = () => {
    setCount(start);
  };

  return (
    <div>
      <h2>Countdown: {count}</h2>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetCopm;