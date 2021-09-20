import React from 'react';

const MySelect = ({options}) => {

    return (
        <select>
            {options.map(item => 
                <option value={item.name} key={item.value}>
                    {item.name}
                </option>
            )}
		</select>
    );
};

export default MySelect;