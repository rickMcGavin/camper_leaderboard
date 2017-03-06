import React, { Component } from 'react';

class Table extends Component {
	render() {
		return (
			<div className="container">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Points in 30 Days</th>
							<th>Points All Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>John</td>
							<td>300</td>
							<td>400</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;