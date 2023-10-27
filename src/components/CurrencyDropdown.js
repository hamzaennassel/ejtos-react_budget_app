import React, { useContext, useState } from 'react';
import { AppContext, CHANGE_CURRENCY } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({ type: CHANGE_CURRENCY, payload: newCurrency });
    }

    return (
        <div className='alert alert-success'>
            <label htmlFor='currency-select'>Currency : </label>
            <select id='currency-select' value={selectedCurrency} onChange={handleCurrencyChange} className="custom-select">
                <option value='$' className={selectedCurrency === '$' ? 'selected' : 'green-text'}>$ Dollar</option>
                <option value='£' className={selectedCurrency === '£' ? 'selected' : 'green-text'}>£ Pound</option>
                <option value='€' className={selectedCurrency === '€' ? 'selected' : 'green-text'}>€ Euro</option>
                <option value='₹' className={selectedCurrency === '₹' ? 'selected' : 'green-text'}>₹ Ruppee</option>
            </select>
        </div>
        
    );
};

export default CurrencyDropdown;
