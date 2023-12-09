// Ticket time type
export interface TicketTime {
	startTime: string
	endTime: string
}

// Ticket type
export interface Ticket {
	id: number
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
	connectionAmount: number | null
}

// Ticket State type
export type TicketsState = {
	tickets: Ticket[]
	loading: boolean
	error: string | null
}
