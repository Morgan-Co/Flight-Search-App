import { createAsyncThunk } from '@reduxjs/toolkit'
import { Ticket } from '../../types/types'

// Fetch All Tickets
export const fetchTickets = createAsyncThunk<
	Ticket[],
	number,
	{ rejectValue: string }
>('tickets/fetchTickets', async (limit, { rejectWithValue }) => {
	const response = await fetch(
		`http://localhost:3001/tickets?${limit && `_limit=${limit}`}`
	)
	if (!response.ok) return rejectWithValue('Server Error')
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
	return { filter, data }
})

// Fetch Tickets by Connection Amount
export const fetchByConnectionAmount = createAsyncThunk<
	Ticket[],
	number | string,
	{ rejectValue: string }
>('tickets/fetchByConnectionAmount', async (filter, { rejectWithValue }) => {
	const response = await fetch(
		`http://localhost:3001/tickets?connectionAmount=${filter}`
	)
	if (!response.ok) rejectWithValue('Server Error')
	return await response.json()
})

// export const fetchByCompanyName = createAsyncThunk<
// 	Ticket[],
// 	string,
// 	{ rejectValue: string }
// >('tickets/fetchByCompanyName', async (filter, { rejectWithValue }) => {
// 	const response = await fetch(
// 		`http://localhost:3001/tickets?company.name=${filter}`
// 	)
// 	if (!response.ok) rejectWithValue('Server Error')
// 	return await response.json()
// })
export const fetchByCompanyName = createAsyncThunk<
	Ticket[],
	string,
	{ rejectValue: string }
>('tickets/fetchByCompanyName', async (filter, { rejectWithValue }) => {
	const response = await fetch(`http://localhost:3001/tickets`)
	if (!response.ok) rejectWithValue('Server Error')
	const data: Ticket[] = await response.json()
	return data.filter(ticket => ticket.company.name === filter)
})

// const formatTimeForDatabase = (hours: number, minutes: number) => {
// 	const time = new Date()
// 	time.setHours(hours)
// 	time.setMinutes(minutes)
// 	const formattedTime = time.getTime()
// 	return formattedTime
// }

// const time = formatTimeForDatabase(4, 30)
// console.log(time)
