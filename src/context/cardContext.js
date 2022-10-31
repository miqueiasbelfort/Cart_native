import React, {useState, createContext} from "react";

export const CardContext = createContext({})

const CardProvider = ({children}) => {

    const [card, setCard] = useState([])
    const [total, setTotal] = useState(0)

    function addItemCard(newItem){
        const indexItem = card.findIndex(item => item.id === newItem.id)
        if(indexItem !== -1){
            let cartList = card;
            cartList[indexItem].amount += 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
            setCard(cartList)
            totalResultCart(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCard(product => [...product, data])
        totalResultCart([...card, data])
    }
    function removeItemCart(product){
        const indexItem = card.findIndex(item => item.id === product.id)
        if(card[indexItem]?.amount > 1){
            let cartList = card
            cartList[indexItem].amount -= 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
            setCard(cartList)
            totalResultCart(cartList)
            return
        }
        const removeItem = card.filter(item => item.id !== product.id)
        setCard(removeItem)
        totalResultCart(removeItem)
    }
    function totalResultCart(itens){
        let myCart = itens
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        setTotal(result.toFixed(2))
    }

    return(
        <CardContext.Provider
            value={{card, addItemCard, removeItemCart, total}}
        >
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider