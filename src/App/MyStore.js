import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'


const myStore = (set) => ({
    dataHouse: {},
    addData: (data) => {
        set((state) => ({
            dataHouse: { data, ...state },
        }))
    },
})

const useMyStore = create(
    devtools(
        persist(myStore, {
            name: "dataHouse",
        })
    )
)


export default useMyStore;