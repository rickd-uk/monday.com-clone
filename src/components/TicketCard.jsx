import { Link } from 'react-router-dom'
import { AvatarDisplay, StatusDisplay, PriorityDisplay, ProgressDisplay, DeleteBlock } from './'

const TicketCard = ({ color, ticket, status }) => {
	return (
		<div className='ticket-card'>
			<Link to={`/ticket/${ticket.documentId}`} id='link'>
				<div className='ticket-color'></div>
				<h3>{ticket.title}</h3>
				<AvatarDisplay ticket={ticket} />
				<StatusDisplay status={ticket.status} />
				<PriorityDisplay priority={ticket.priority} />
				<ProgressDisplay progress={ticket.progress} />
			</Link>
			<DeleteBlock />
		</div>
	)
}

export default TicketCard
