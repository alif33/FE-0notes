import React from 'react';
import Select from 'react-select';

const SelectOption = ({options, handleChange, value}) =>{
    return(
        <Select 
            options={options} 
            onChange={e=>handleChange(e)} 
        />
    )
}
export default SelectOption;