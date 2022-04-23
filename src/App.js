import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import { Dashboard, Ticket } from './pages'

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/ticket' element={<Ticket />} />
					<Route path='/ticket/:id' element={<Ticket editMode={true} />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
