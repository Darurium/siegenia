import React from 'react';

const ListItems = ({currentValues}) => {
    return (
        <div>
            {currentValues.map((item, index) => 
					<div key={index}>
						<span>{item.articule} +++</span>				
						<span>{item.name} ---</span>				
						<span>{item.quantity} шт</span>		
					</div>		
					)}
        </div>
    );
};

export default ListItems;