import React from 'react';
import { Table } from 'react-bootstrap';

const ListItems = ({currentValues}) => {
    return (
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
				{currentValues.map((item, index) => 
					<tr key={item.articule}>
						<td>{index+1}</td>
						<td>{item.articule}</td>
						<td>{item.name}</td>
						<td>{item.quantity}</td>
					</tr>
				)}
				
				
			</tbody>
		</Table>
    );
};

export default ListItems;