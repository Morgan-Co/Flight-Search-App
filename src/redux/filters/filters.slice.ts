import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './filters.data'

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCAFilter: (state, action) => {
			const toggleFilterItem = state.connectionAmount.find(
				item => item.id === action.payload
			)
			if (!toggleFilterItem) return
			toggleFilterItem.isActive = !toggleFilterItem.isActive
		},
		setCompanyFilter: (state, action) => {
			const toggleFilterItem = state.companies.find(
				item => item.id === action.payload
			)
			if (!toggleFilterItem) return
			toggleFilterItem.isActive = !toggleFilterItem.isActive
		},
	},
})

export default filterSlice.reducer
export const { setCAFilter, setCompanyFilter } = filterSlice.actions
