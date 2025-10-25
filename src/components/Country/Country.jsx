import React from 'react';

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    const flagStyle = {height: '50px'}
    return (
        <div>
            <h4>This is a {name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="" />
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;