import { TicketsFilters } from '../types'

export const ticketsFilters: TicketsFilters = {
	connectionAmount: [
		{
			id: 0,
			name: 'Без пересадок',
			isActive: false,
		},
		{
			id: 1,
			name: '1 пересадка',
			isActive: false,
		},
		{
			id: 2,
			name: '2 пересадки',
			isActive: false,
		},
		{
			id: 3,
			name: '3 пересадки',
			isActive: false,
		},
	],
	companies: [
		{
			id: 1,
			name: 'Победа',
			isActive: false,
		},
		{
			id: 2,
			name: 'Red Wings',
			isActive: false,
		},
		{
			id: 3,
			name: '7 Airlines',
			isActive: false,
		},
	],
}
