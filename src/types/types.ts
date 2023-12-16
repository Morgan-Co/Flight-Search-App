// Ticket time type
export interface TicketTime {
	startTime: string
	endTime: string
}

// Ticket type
export interface Ticket {
	id?: number
	from: string
	to: string
	company: {
		name: string
		logo: string
	}
	price: number
	currency: string
	time: TicketTime
	date: string
	duration: number
	connectionAmount: number
}

// Ticket State type
export type TicketsState = {
	tickets: Ticket[]
	limit: number
	loading: boolean
	error: string | null
}

export type Company = {
	id: number
	name: string
	isActive: boolean
}

export type ConnectionAmount = {
	id: number
	name: string
	isActive: boolean
}

export interface TicketsFilters {
	connectionAmount: ConnectionAmount[]
	companies: Company[]
}
