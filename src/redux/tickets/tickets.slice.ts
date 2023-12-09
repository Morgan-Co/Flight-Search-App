import { createSlice } from '@reduxjs/toolkit'
import { TicketsState } from '../../types/types'
import {
	fetchByCompanyName,
	fetchByConnectionAmount,
	fetchByTicketsFilter,
	fetchTickets,
} from './tickets.actions'

const initialState: TicketsState = {
	tickets: [],
	loading: false,
	error: null,
}

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchTickets.fulfilled, (state, action) => {
				state.tickets = action.payload
				state.loading = false
			})
			.addCase(fetchTickets.rejected, state => {
				state.loading = false
				state.error = 'Server Error'
			})
			.addCase(fetchByTicketsFilter.fulfilled, (state, action) => {
				state.tickets = action.payload.data
				if (action.payload.filter === 'cheap') {
					state.tickets = state.tickets.sort((a, b) => a.price - b.price)
				} else if (action.payload.filter === 'fast') {
					state.tickets = state.tickets.sort((a, b) => {
						return a.duration - b.duration
					})
				} else if (action.payload.filter === 'optimal') {
					const totalPrice = state.tickets.reduce(
						(sum, ticket) => sum + ticket.price,
						0
					)
					const averagePrice = totalPrice / state.tickets.length

					state.tickets = state.tickets.filter(
						ticket => ticket.price <= averagePrice
					)
				}
			})
			.addCase(fetchByConnectionAmount.fulfilled, (state, action) => {
				state.loading = false
				state.tickets = action.payload
			})
			.addCase(fetchByCompanyName.fulfilled, (state, action) => {
				state.loading = false
				state.tickets = action.payload
			})
	},
})

export default ticketsSlice.reducer
