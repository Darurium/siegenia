import React from 'react';
import { Table } from 'react-bootstrap';

import "./ListItems.scss";

const ListItems = ({currentValues}) => {

	let sortedList = currentValues.sort((a, b) => a.articule.localeCompare(b.articule))

    return (
		<div className="items-list">
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
				<th>№</th>
				<th>Артикул</th>
				<th>Наименование</th>
				<th>Количество</th>
				</tr>
			</thead>
			<tbody>
				{sortedList.map((item, index) => 
					<tr key={item.articule}>
						<td>{index+1}</td>
						<td>{item.articule}</td>
						<td>{item.name}</td>
						<td>{item.quantity}</td>
					</tr>
				)}
				
				
			</tbody>
		</Table>
		</div>
    );
};

export default ListItems;