import { createContext, ReactNode, useState } from "react";


interface NameContextData {
   name: string,
   setName: (name: string) => void
}

interface NameProviderProps {
    children: ReactNode;
}

export const NameContext = createContext({} as NameContextData);

export function NameProvider({children}: NameProviderProps) {


    const [name, setName] = useState("");


    return (
        <NameContext.Provider value={{
            name,
            setName,
        }}>
            {children}
        </NameContext.Provider>
    )
}