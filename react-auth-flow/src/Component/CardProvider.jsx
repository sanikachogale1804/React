const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export { CartProvider };
  