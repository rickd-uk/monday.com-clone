import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={Dashboard}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
