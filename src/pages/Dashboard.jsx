import { TicketCard } from '../components'

const Dashboard = () => {
	const tickets = [
		{
			category: 'Q1 2022',
			color: 'red',
			title: 'Metting about Project Status',
			owner: 'Dave Larson',
			avatar:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fstorage%2Fimg%2Fthumb%2Fda5id1-Manga-Face.png&f=1&nofb=1',
			status: 'done',
			priority: 5,
			progress: 40,
			description: 'Make a slideshow about Crypto',
			timestamp: '2022-02-18T09:25:00+0000',
		},
		{
			category: 'Q2 2022',
			color: 'red',
			title: 'AI Conference',
			owner: 'Dave Larson',
			avatar:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fstorage%2Fimg%2Fthumb%2Fda5id1-Manga-Face.png&f=1&nofb=1',
			status: 'working on it',
			priority: 3,
			progress: 40,
			description: 'Make a slideshow about Crypto',
			timestamp: '2022-02-18T09:25:00+0000',
		},

		{
			category: 'Q3 2022',
			color: 'red',
			title: 'Improve Efficiency',
			owner: 'Dave Larson',
			avatar:
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fstorage%2Fimg%2Fthumb%2Fda5id1-Manga-Face.png&f=1&nofb=1',
			status: 'stuck',
			priority: 1,
			progress: 40,
			description: 'Make a slideshow about Crypto',
			timestamp: '2022-02-18T09:25:00+0000',
		},
	]

	const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))]

	console.log(uniqueCategories)

	return (
		<div className='dashboard'>
			<div className='ticket-container'>
				<h1>My Projects</h1>
				{tickets &&
					uniqueCategories?.map((uniqueCategory, categoryIndex) => (
						<div className='' key={categoryIndex}>
							<h3>{uniqueCategory}</h3>
							{tickets
								.filter((ticket) => ticket.category === uniqueCategory)
								.map((filteredTicket, _index) => (
									<TicketCard key={_index} id={_index} color={filteredTicket.color} ticket={filteredTicket} />
								))}
						</div>
					))}
			</div>
		</div>
	)
}

export default Dashboard
