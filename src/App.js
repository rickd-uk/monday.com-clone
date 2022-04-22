import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import { Dashboard, Ticket } from './pages'

const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Dashboard />}></Route>
					<Route path='/ticket' element={<Ticket />}></Route>
					<Route path='/ticket/:id' element={<Ticket editMode={true} />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
