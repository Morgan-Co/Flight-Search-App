import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './components/pages/homePage/HomePage'
import { useAppDispatch, useAppSelector } from './hooks'
import { fetchTickets } from './redux/tickets/tickets.actions'
import { TicketsState } from './types'

const App = () => {
	const dispatch = useAppDispatch()
	const { limit }: TicketsState = useAppSelector(state => state.tickets)
	useEffect(() => {
		dispatch(fetchTickets(limit))
	}, [limit, dispatch])

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default App
