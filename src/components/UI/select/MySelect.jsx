import React from 'react';
import "./MySelect.scss";

const MySelect = ({options, defaultValue, value, onChange}) => {

    return (
        <select 
            className="my-select"
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            {/* <option disabled value="">{defaultValue}</option> */}
            {options.map(item => 
                <option value={item.value} key={item.value}>
                    {item.name}
                </option>
            )}
		</select>
    );
};

export default MySelect;