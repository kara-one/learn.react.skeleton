import './App.css';

import React, { useEffect, useState } from 'react';

import CardList from './components/CardList';
import SkeletonCard from './components/SkeletonCard';
import dummyData from './data';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setVideos(dummyData);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="App">
            {loading && <SkeletonCard />}
            {!loading &&
                videos.map((list, index) => {
                    return (
                        <section key={index}>
                            <h2 className="section-title">{list.section}</h2>
                            <CardList list={list} />
                            <hr />
                        </section>
                    );
                })}
        </div>
    );
};
export default App;
