import { useState, useEffect, useContext } from 'react'
import { TicketCard } from '../components'
import axios from 'axios'
import CategoriesContext from '../context'

const Dashboard = () => {
	const [tickets, setTickets] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const { categories, setCategories } = useContext(CategoriesContext)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const response = await axios.get('http://localhost:8000/tickets')

			const dataObj = response.data.data

			const arrOfKeys = Object.keys(dataObj)
			const arrOfData = arrOfKeys.map((key) => dataObj[key])

			const formattedArr = []

			arrOfKeys.forEach((key, index) => {
				const formattedData = { ...arrOfData[index] }
				formattedData['documentId'] = key
				formattedArr.push(formattedData)
			})
			setTickets(formattedArr)
			setIsLoading(false)
		}

		fetchData()

		return () => {}
	}, [])

	useEffect(() => {
		setCategories([...new Set(tickets?.map(({ category }) => category))])
	}, [setCategories, tickets])

	const colors = [
		'rgb(255,179,186)',
		'rgb(255,223,186)',
		'rgb(255,255,186)',
		'rgb(186,255,201)',
		'rgb(186,255,255)',
	]

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	]

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
									<TicketCard
										key={_index}
										id={_index}
										color={colors[categoryIndex] || colors[0]}
										ticket={filteredTicket}
									/>
								))}
						</div>
					))}
				{isLoading && <div>Loading...</div>}
			</div>
		</div>
	)
}

export default Dashboard
