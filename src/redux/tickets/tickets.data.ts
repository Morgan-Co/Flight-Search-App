import { TicketsState } from '../../types'

export const initialState: TicketsState = {
	tickets: [],
	limit: 3,
	loading: false,
	error: null,
}