import { Children, createContext } from "react";

export const dataContext = createContext();

const DataProvider = ({Children}) => {
    return
        <dataContext.Provider>{Children}</dataContext.Provider>;

    

};

export default DataProvider;