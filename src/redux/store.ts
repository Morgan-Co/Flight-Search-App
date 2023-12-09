import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter.slice'
import ticketsReducer from './tickets/tickets.slice'

export const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		filter: filterReducer,
	},
})
