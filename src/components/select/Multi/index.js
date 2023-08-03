import { useState } from "react";
import Select from "react-select";
import Option from "./Option";

const Multi = ({ lists })=>{
    const [selectedOption, setSelectedOption] = useState(null);

    const listOption = lists?.map(__a => ({
        label: __a.title,
        value: __a.content,
        type: __a.type
    }));

    const handleListSearch = e =>{
       
    }

    return (
        <Select
            isMulti
            name="colors"
            options={listOption}
            isClearable={true}
            onChange={handleListSearch}
            classNamePrefix="select"
            className="basic-multi-select"
            placeholder="select configuration"
            components={{ Option }}
        />
    )
}

export default Multi