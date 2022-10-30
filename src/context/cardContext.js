import React, {useState, createContext} from "react";

export const CardContext = createContext({})

const CardProvider = ({children}) => {

    const [card, setCard] = useState([])

    return(
        <CardContext.Provider
            value={{card}}
        >
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider