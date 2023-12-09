// import { createSelector } from '@reduxjs/toolkit'
// import { FilterState } from './filter.slice'
// import { Ticket } from '../types/type'

// export const selectAllTickets = state => state.tickets.tickets
// export const selectActiveFilter = state => state.filter

// export const selectByTicketsFilter = createSelector(
// 	[selectAllTickets, selectActiveFilter],
// 	(allTickets: Ticket[], activeFilter: FilterState) => {
// 		if (activeFilter.filter.byTicket === 'cheap') {
// 			console.log(activeFilter)
// 			const sortedTickets = [...allTickets]
// 			return sortedTickets.sort((a, b) => a.price - b.price)
// 		}
// 		// if (activeFilter === 'fast') {
// 		// 	const sortedTickets = [...allTickets]
// 		// 	return sortedTickets.sort((a, b) => b.duration - a.duration)
// 		// }

// 		// if (activeFilter.filter.byCompany === 'Победа') {
// 		// 	return allTickets.filter(ticket => ticket.company.name === 'Победа')
// 		// }
// 	}
// )
