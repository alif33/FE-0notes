import Select from "react-select";
import Option from "./Option";

const Single = ({ lists, selected, handleSelect })=>{

    const listOption = lists?.map(__ => ({
        label: __.title,
        value: __._id,
    }));

    return (
        <Select
            name="colors"
            options={listOption}
            value={selected}
            onChange={handleSelect}
            classNamePrefix="select"
            className="basic-multi-select"
            placeholder="search"
            components={{ Option }}
        />
    )
}

export default Single

