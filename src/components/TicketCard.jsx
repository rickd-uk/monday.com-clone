import { Link } from 'react-router-dom'
import { AvatarDisplay, StatusDisplay, PriorityDisplay, ProgressDisplay, DeleteBlock } from './'

const TicketCard = ({ color, ticket }) => {
	return (
		<div className='ticket-card'>
			<Link to={`/ticket/${ticket.documentId}`} id='link'>
				<div className='ticket-color'></div>
				<h3>{ticket.title}</h3>
				<AvatarDisplay ticket={ticket} />
				<StatusDisplay />
				<PriorityDisplay />
				<ProgressDisplay />
			</Link>
			<DeleteBlock />
		</div>
	)
}

export default TicketCard
