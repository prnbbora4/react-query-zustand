import React from 'react';
import { useQuery } from 'react-query';
import useMyStore from '../App/MyStore';

const People = () => {

    const { dataHouse, fetchData, } = useMyStore(
        (state) => ({
            dataHouse: state.dataHouse,
        })
    )

    console.log("dataHouse", dataHouse);

    return (
        <div>
            <h2>People</h2>
        </div>
    );
}

export default People;