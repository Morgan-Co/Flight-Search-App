import { createAsyncThunk } from '@reduxjs/toolkit'
import { TicketsFilters, Ticket } from '../../types'
// Fetch All Tickets
export const fetchTickets = createAsyncThunk<
	Ticket[],
	number,
	{ rejectValue: string }
>('tickets/fetchTickets', async (limit, { rejectWithValue }) => {
	const response = await fetch(
		`http://localhost:3001/tickets?${limit && `_limit=${limit}`}`
	)
	if (!response.ok) return rejectWithValue('Oops, it seems to be a mistake!')
	return await response.json()
})

// Fetch Tickets by filter
export const fetchByTicketsFilter = createAsyncThunk<
	{ filter: string; data: Ticket[] },
	string,
	{ rejectValue: string }
>('tickets/fetchByTicketsFilter', async (filter, { rejectWithValue }) => {
	const response = await fetch('http://localhost:3001/tickets?_limit=3')
	if (!response.ok) rejectWithValue('Server error!')
	const data: Ticket[] = await response.json()
	if (!response.ok) return rejectWithValue('Oops, tickets are not filtered!')
	return { filter, data }
})

// Fetch Tickets by Connection Amount
export const fetchBySideFilters = createAsyncThunk<
	Ticket[],
	TicketsFilters,
	{ rejectValue: string }
>(
	'tickets/fetchBySideFilters',
	async (filter, { rejectWithValue, dispatch }) => {
		const response = await fetch(`http://localhost:3001/tickets`)
		const data: Ticket[] = await response.json()
		if (!response.ok) rejectWithValue('Oops, tickets are not filtered!')
		const filteredData: Ticket[] = []

		for (let i = 0; i < filter.connectionAmount.length; i++) {
			const filterItem = filter.connectionAmount[i]
			if (filterItem.isActive) {
				const filteredItems = data.filter(
					ticket => ticket.connectionAmount === filterItem.id
				)
				for (let elem = 0; elem < filteredItems.length; elem++) {
					if (filteredData.some(ticket => ticket.id === filteredItems[elem].id))
						return filteredData
					filteredData.push(filteredItems[elem])
				}
			}
		}
		for (let f = 0; f < filter.companies.length; f++) {
			const filterItem = filter.companies[f]
			if (filterItem.isActive) {
				const filteredItems = data.filter(
					ticket => ticket.company.name === filterItem.name
				)
				for (let elem = 0; elem < filteredItems.length; elem++) {
					if (filteredData.some(ticket => ticket.id === filteredItems[elem].id))
						return filteredData
					filteredData.push(filteredItems[elem])
				}
			}
		}
		if (!filteredData.length) dispatch(fetchTickets(3))
		return filteredData
	}
)
