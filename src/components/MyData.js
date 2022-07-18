import React from 'react';
import { useQuery } from 'react-query';
import useMyStore from '../App/MyStore';

const People = () => {
    const myfunction = async () => {
        const response = await fetch('http://swapi.dev/api/people/')
        const savedData = await response.json()
        return savedData.results
    }

    const dataHouse = useMyStore((state) => state.dataHouse)
    const addData = useMyStore((state) => state.addData)


    const { data, status } = useQuery('people', myfunction);

    console.log("data", data);

    if (status === 'loading') {
        return <div>Loading...</div>
    }
    if (status === 'error') {
        return <div>Error!</div>
    }


    return (
        <div>
            <h2>People</h2>
            <button onClick={() => { addData(data) }}>set</button>
        </div>
    );
}

export default People;