import {useState, createContext,useContext} from 'react';

const BaseContext = createContext();

export const BasePrivider = ({children})=>{
    const [search, setSearch] = useState('');

   
    

    const values = {
        search,
        setSearch
    }

    return <BaseContext.Provider value={values} >{children}</BaseContext.Provider>
}

export const useBase = () => useContext(BaseContext)