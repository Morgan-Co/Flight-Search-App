import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './tickets/tickets.slice'
import filtersReducer from "./filters/filters.slice"

export const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		filters: filtersReducer
	},
})
