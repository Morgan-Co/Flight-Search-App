import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './components/pages/homePage/HomePage'
import { useAppDispatch } from './hooks/hooks'
import { fetchTickets } from './redux/tickets/tickets.actions'

const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchTickets(3))
	}, [dispatch])

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default App
