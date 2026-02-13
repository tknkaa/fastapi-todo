import { useState, useEffect } from "react";
import { render, Text } from "ink";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text color="green">{count} tests passed</Text>;
};

render(<Counter />);
