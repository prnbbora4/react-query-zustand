import React from 'react';
import create from 'zustand';
import { useQuery } from 'react-query';
import { devtools, persist } from 'zustand/middleware'


const fetchData2 = async () => {
    const response = await fetch('https://swapi.co/api/people');
    const data = await response.json();
    return data.results;
}

const ApiCall = (set) => {
    const { data, status } = useQuery('people', fetchData2);
    return set({ dataHouse: data });

}


const myStore = (set) => ({
    dataHouse: [],
    fetchdata: ApiCall
})

const useMyStore = create(
    devtools(
        persist(myStore, {
            name: "dataHouse",
        })
    )
)


export default useMyStore;