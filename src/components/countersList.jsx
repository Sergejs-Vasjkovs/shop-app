import React, { useState } from 'react';
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        { id: 1, value: 0, name: 'Ненужная вещь' },
        { id: 2, value: 0, name: 'Ложка' },
        { id: 3, value: 0, name: 'Вилка' },
        { id: 4, value: 0, name: 'Тарелка' },
        { id: 5, value: 0, name: 'Набор' }
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(count => count.id !== id);
        setCounters(newCounters);
    }

    const handleReset = () => setCounters(initialState);

    const handleIncrement = (id) => {
        const index = counters.findIndex(c => c.id === id);
        counters[index].value += 1;
        setCounters([...counters]);
        //вот тут вот почему не работает без деструктуризации?
        // мы же вроде правим массив и потом запускаем setCounters
    };

    const handleDecrement = (id) => {
        const index = counters.findIndex(c => c.id === id);
        counters[index].value -= 1;
        setCounters([...counters]);
    };

    return (
        <>
            {counters.map(count =>
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />)}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}>
                Reset
            </button>
        </>
    );
};

export default CountersList;