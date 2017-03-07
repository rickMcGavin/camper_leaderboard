import React from 'react';
import axios from 'axios';

// NOTES:
// The tables aren't exactly displaying onClick. I think I need to structure it 
// differently. If I pull the table head off and keep it static, I may be able to
// just work some CSS class display: none and display: auto(?), block(?) trickery
// to make it work

class Table extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			thirtyDayArr: [],
			allTimeArr: []
		};
	}

	componentDidMount() {
	axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
		.then(res => {
			const thirtyDayArr = res.data;
			this.setState({thirtyDayArr});
		});

	axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
		.then(res => {
			const allTimeArr = res.data;
			this.setState({allTimeArr});
			console.log(this.state.allTimeArr);
		});
	}

	renderAllTime() {
		return (
			<div className="container">
				<table>
					<thead>
						<tr className="head-row">
							<th>#</th>
							<th></th>
							<th className='name'>Name</th>
							<th className="thirty-day-cell"
									onClick={() => this.renderThirtyDays()}>Points in 30 Days</th>
							<th className="all-time-cell"
									onClick={() => this.renderAllTime()}>Points All Time</th>
						</tr>
					</thead>
					<tbody>
					{this.state.allTimeArr.map((obj, index) => {
						return <tr key={index}>
										<td className="rank">{index + 1}</td>
										<td><img 
										src={obj.img} 
										alt="camper"
										className='user-pic'
										/></td>
										<td className='name'>{obj.username}</td>
										<td>{obj.recent}</td>
										<td>{obj.alltime}</td>
									</tr>
					})}
					</tbody>
				</table>
			</div>
		)
	}

	renderThirtyDays() {
		return (
			<div className="container">
				<table>
					<thead>
						<tr className="head-row">
							<th>#</th>
							<th></th>
							<th className='name'>Name</th>
							<th className="thirty-day-cell"
									onClick={() => this.renderThirtyDays()}>Points in 30 Days</th>
							<th className="all-time-cell"
									onClick={() => this.renderAllTime()}>Points All Time</th>
						</tr>
					</thead>
					<tbody>
					{this.state.thirtyDayArr.map((obj, index) => {
						return <tr key={index}>
										<td className="rank">{index + 1}</td>
										<td><img 
										src={obj.img} 
										alt="camper"
										className='user-pic'
										/></td>
										<td className='name'>{obj.username}</td>
										<td>{obj.recent}</td>
										<td>{obj.alltime}</td>
									</tr>
					})}
					</tbody>
				</table>
			</div>
		)
	}

	render() {
		return <div>{this.renderThirtyDays()}</div>
	}
}

export default Table;