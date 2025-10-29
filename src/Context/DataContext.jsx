import axios from "axios";
import {createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();

    const fetchData = async() => {
        try {
            const res = await axios.get("https://api.tvmaze.com/shows");
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const obj = {
        data, setData,
        fetchData
    };

    return <DataContext.Provider value={obj}>{children}</DataContext.Provider>
}