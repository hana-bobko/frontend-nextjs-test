import { useState, useEffect } from "react";

type CounterProps = {
    initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const mountEvent = new CustomEvent("onCounterMount");
        window.dispatchEvent(mountEvent);

        return () => {
            const unmountEvent = new CustomEvent("onCounterUnmount");
            window.dispatchEvent(unmountEvent);
        };
    }, []);

    useEffect(() => {
        const updateEvent = new CustomEvent("onCounterUpdate", { detail: count });
        window.dispatchEvent(updateEvent);

        if (count >= 10) {
            setCount(0);
        }
    }, [count]);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div>
            <button onClick={handleDecrement}>Decrementar -</button>
            <h2>Contador: {count}</h2>
            <button onClick={handleIncrement}>Incrementar +</button>
        </div>
    );
};
