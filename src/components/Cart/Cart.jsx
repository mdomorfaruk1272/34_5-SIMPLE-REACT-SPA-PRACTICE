import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let index = 0; index < cart.length; index++) {
    //     const country = cart[index];
    //     totalPopulation = totalPopulation + country.population;
        
    // }
    const totalPopulation = cart.reduce((sum, country)=>sum+country.population, 0)
    return (
        <div>
            <h2>This is Cart: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;