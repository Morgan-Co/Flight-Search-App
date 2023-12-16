import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from './tickets.data'
import {
	fetchBySideFilters,
	fetchByTicketsFilter,
	fetchTickets,
} from './tickets.actions'
import { Ticket } from '../../types'

type Func = {
	[key: string]: (a: Ticket, b: Ticket) => number
	cheap: (a: Ticket, b: Ticket) => number
	fast: (a: Ticket, b: Ticket) => number
	optimal: (a: Ticket, b: Ticket) => number
}

const sortFunctions: Func = {
	cheap: (a, b) => a.price - b.price,
	fast: (a, b) => a.duration - b.duration,
	optimal: (a, b) => a.connectionAmount - b.connectionAmount,
}

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		updateLimit: state => {
			fetchTickets(state.limit)
			state.limit += 3
		},
	},
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
			.addCase(fetchByTicketsFilter.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchByTicketsFilter.fulfilled, (state, { payload }) => {
				state.error = null
				state.loading = false
				const sortFunction = sortFunctions[payload.filter]
				state.tickets = sortFunction ? payload.data.sort(sortFunction) : []
			})
			.addCase(fetchBySideFilters.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchBySideFilters.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.tickets = action.payload
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
	},
})

export const { updateLimit } = ticketsSlice.actions
export default ticketsSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
