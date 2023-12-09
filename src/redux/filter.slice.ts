import { createSlice } from '@reduxjs/toolkit/react'

export type ByTicket = 'cheap' | 'fast' | 'optimal'

export type FilterState = {
	filter: {
		byTicket: ByTicket
		byCompany: string
		byConnectionAmount: number | null
	}
}

const initialState: FilterState = {
	filter: {
		byTicket: 'cheap',
		byCompany: '',
		byConnectionAmount: null,
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		// changeFilterByTicket: (state, { payload }: { payload: ByTicket }) => {
		// 	state.filter.byTicket = payload
		// },
		// changeFilterByCompany: (state, { payload }: { payload: string }) => {
		// 	state.filter.byCompany = payload
		// },
		// changeFilterByConnectionAmount: (state, { payload }: { payload: number }) => {
		// 	state.filter.byConnectionAmount = payload
		// },
	},
})

// export const { changeFilterByTicket, changeFilterByCompany, changeFilterByConnectionAmount } = filterSlice.actions
export default filterSlice.reducer
