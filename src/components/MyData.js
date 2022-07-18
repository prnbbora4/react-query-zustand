import React from 'react';
import useMyStore from '../App/MyStore';

const People = () => {

    const { dataHouse, } = useMyStore(
        (state) => ({
            dataHouse: state.dataHouse,
        })
    )

    console.log("dataHouse", dataHouse);

    return (
        <div>
            <h2>People</h2>
            {
                dataHouse.results.map((person, index) => {
                    return (
                        <div key={index}>
                            <p>{person.name}</p>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default People;