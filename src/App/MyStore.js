import React from 'react';
import create from 'zustand';
import { useQuery } from 'react-query';

import { devtools, persist } from 'zustand/middleware'

// const fetchPeople = async () => {
//     const res = await fetch('http://swapi.dev/api/people/');
//     return res.json();
// }





const myStore = (set) => ({
    dataHouse: [],
    fetchData: async () => {
        const res = await fetch('http://swapi.dev/api/people/');
        set({ dataHouse: res.json() });
    },
    // addCourse: (course) => {
    //     set((state) => ({
    //         dataHouse: [course, ...state.dataHouse],
    //     }))
    // },
})

const useMyStore = create(
    devtools(
        persist(myStore, {
            name: "dataHouse",
        })
    )
)


export default useMyStore;