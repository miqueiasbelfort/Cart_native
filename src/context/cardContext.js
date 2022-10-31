import React, {useState, createContext} from "react";

export const CardContext = createContext({})

const CardProvider = ({children}) => {

    const [card, setCard] = useState([])

    function addItemCard(newItem){
        const indexItem = card.findIndex(item => item.id === newItem.id)
        if(indexItem !== -1){
            let cartList = card;
            cartList[indexItem].amount += 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
            setCard(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCard(product => [...product, data])
    }
    function removeItemCart(product){
        const indexItem = card.findIndex(item => item.id === product.id)
        if(card[indexItem]?.amount > 1){
            let cartList = card
            cartList[indexItem].amount -= 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
            setCard(cartList)
            return
        }
        const removeItem = card.filter(item => item.id !== product.id)
        setCard(removeItem)
    }

    return(
        <CardContext.Provider
            value={{card, addItemCard, removeItemCart}}
        >
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider