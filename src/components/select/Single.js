import { useState } from "react";
import Select from "react-select";
import MyOption from "./MyOption";

const Single = ({ lists })=>{
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
            name="colors"
            options={listOption}
            value={selectedOption}
            isClearable={true}
            onChange={handleListSearch}
            classNamePrefix="select"
            className="basic-multi-select"
            placeholder="search"
            components={{ Option: MyOption }}
        />
    )
}

export default Single