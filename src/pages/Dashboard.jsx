import { TicketCard } from '../components'

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='ticket-container'>
				<h1>My Projects</h1>
				<TicketCard />
			</div>
		</div>
	)
}

export default Dashboard
