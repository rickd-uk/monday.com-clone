import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import { Dashboard, Ticket } from './pages'
import CategoriesContext from './context'
import { useState } from 'react'

const App = () => {
	const [categories, setCategories] = useState(null)
	const value = { categories, setCategories }

	return (
		<div className='app'>
			<CategoriesContext.Provider value={value}>
				<Router>
					<Nav />
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/ticket' element={<Ticket />} />
						<Route path='/ticket/:id' element={<Ticket editMode={true} />} />
					</Routes>
				</Router>
			</CategoriesContext.Provider>
		</div>
	)
}

export default App
