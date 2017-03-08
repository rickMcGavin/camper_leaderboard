import React from 'react';
import axios from 'axios';

class Table extends React.Component {


	constructor(props) {
		super(props);


		this.state = {
			thirtyDayArr: [],
			allTimeArr: [],
			isIt30Days: true
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
		});
	}

	renderAllTime() {
		return (
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
		)
	}

	renderThirtyDays() {
		return (
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
		)
	}

	handleThirtyDayClick() {
		this.setState({isIt30Days: true})
		this.refs.thirtyDayArrow.classList.remove('hidden');
		this.refs.allTimeArrow.classList.add('hidden');
	}

	handleAllTimeClick() {
		this.setState({isIt30Days: false})
		this.refs.thirtyDayArrow.classList.add('hidden');
		this.refs.allTimeArrow.classList.remove('hidden');
	}

	render() {

		return (<div className="container">
			<table>
				<thead>
					<tr className="head-row">
						<th>#</th>
						<th></th>
						<th className="name">Name</th>
						<th className="thirty-day-cell"
								onClick={() => this.handleThirtyDayClick()}>Points in 30 Days 
								<span ref="thirtyDayArrow">↓</span></th>
						<th className="all-time-cell"
										onClick={() => this.handleAllTimeClick()}>Points All Time
										<span ref="allTimeArrow" className="hidden">↓</span></th>		
					</tr>
				</thead>	
					{this.state.isIt30Days ? this.renderThirtyDays() : this.renderAllTime()}
			</table>
		</div>
		)
	}
}

export default Table;