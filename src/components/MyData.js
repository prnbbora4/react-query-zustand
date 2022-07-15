import React from 'react';
import { useQuery } from 'react-query';
import useMyStore from '../App/MyStore';

const People = () => {

    const { dataHouse, fetchData, } = useMyStore(
        (state) => ({
            dataHouse: state.dataHouse,
            fetchData: state.fetchData,
        })
    )

    // const fetchPeople = async () => {
    //     const res = await fetch('http://swapi.dev/api/people/');
    //     return res.json();
    // }
    const { data, status } = useQuery('people', fetchData);

    console.log('data', data);
    console.log("dataHouse", dataHouse);

    return (
        <div>
            <h2>People</h2>
        </div>
    );
}

export default People;