import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Ticket } from './pages'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
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
