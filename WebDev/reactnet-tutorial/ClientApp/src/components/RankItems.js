import React, {useEffect, useState } from 'react';

const RankItems = () => { // dataType passed as a prop
    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`fox/${dataType}`)
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setItems(data);
        })
    }, []);

    return (
        (items.length > 0)?
            <main>
                {items.map((item) => <h1>{item.title}</h1>)}
            </main>
            : <main>Loading...</main>
    )
}

export default RankItems;
