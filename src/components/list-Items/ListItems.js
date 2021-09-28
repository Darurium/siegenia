import React from 'react';
import { Table } from 'react-bootstrap';

const ListItems = (props) => {
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
				{props.totalList.map((item, index) => 
					<tr>
						<td>{index}</td>
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