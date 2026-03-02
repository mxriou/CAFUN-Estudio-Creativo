import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

type CardItem = { id: string; nombre: string; precio: number; imagen?: string; quantity: number };
type State = { items: CardItem[] };
type Action = 
    | { type: 'ADD_ITEM'; payload: Omit<CardItem, 'quantity'> }
    | { type: 'REMOVE_ITEM'; payload: { id: string } }
    | { type: 'SET_QUANTITY'; payload: { id: string; quantity: number } }
    | { type: 'CLEAR'};

const CartContext = createContext<any>(null);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const exists = state.items.find(i => i.id === action.payload.id);
            if(exists){
                return { items: state.items.map(i => i.id === action.payload.id ? {...i, quantity: i.quantity + 1}: i)};
            }
            return { items: [...state.items, {...action.payload, quantity: 1}]};
        }
        case 'REMOVE_ITEM':
            return { items: state.items.filter(i => i.id !== action.payload.id) };
        case 'SET_QUANTITY':
            return { items: state.items.map(i => i.id === action.payload.id ? {...i, quantity: action.payload.quantity} : i) };
        case 'CLEAR': 
            return { items: [] };
        default: return state;
    }
};
  
export const CartProvider = ({ children}: {children: ReactNode}) => {
    const [ state, dispatch ] = useReducer( reducer, {items: [] }, (init) => {
        try { const raw = localStorage.getItem('cart'); 
            return raw ? JSON.parse(raw): init;
        }
        catch{
            return init;
        }
    });
/*useEffect sirve para ejecutar efectos secundarios en un componente de React. Es el puente entre React y el mundo exterior*/
    useEffect(() => { localStorage.setItem('cart', JSON.stringify(state)); }, [state]);
/*Omit se utiliza para crear un nuevo tipo a partir de otro, excluyendo una o mas propiedades*/
    const addItem = (item: Omit<CardItem, 'quantity'>) => dispatch( { type: 'ADD_ITEM', payload: item } );
    const removeItem = ( id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { id }});
    const setQuantity = ( id: string, quantity: number) => dispatch({ type: 'SET_QUANTITY', payload: { id, quantity }});
    const clearCart = () => dispatch({ type: 'CLEAR'});

    return (
        /* CardContext.Provider es el componete que "inyecta" datos y funciones en un arbol de componentes usando Context API de React*/
        <CartContext.Provider value={{ cart: state, addItem, removeItem, setQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de CartProvider');
    }
    return { 
        ...context, 
        totalItems: context.cart.items.reduce((sum: number, item: CardItem) => sum + item.quantity, 0) 
    };
};

