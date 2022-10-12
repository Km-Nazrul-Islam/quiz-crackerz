import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const topics = useLoaderData();
    const topic = topics.data
    const topicQues = topics.data.questions
    console.log(topics)
    return (
        <div>
            <div>
                <h1>{topic.name}</h1>
            </div>
            <div className='grid grid-cols-1'>
            
            {
                topicQues.map(topicQues => <Quiz key={topicQues.id} topicQues={topicQues}></Quiz>)
            }
        </div>
        </div>
    );
};

export default Topics;