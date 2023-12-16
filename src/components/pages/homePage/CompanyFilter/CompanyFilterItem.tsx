import styled from 'styled-components'
import { Company } from '../../../../types'
import { useAppDispatch } from '../../../../hooks'
import { setCompanyFilter } from '../../../../redux/filters/filters.slice'


const CompanyFilterItem = ({item}: {item: Company}) => {
	const dispatch = useAppDispatch()

	return (
		<FilterItem>
			<label htmlFor={item.name} className='com-container'>
				<input
					type='checkbox'
					id={item.name}
					checked={item.isActive}
					onChange={()=> dispatch(setCompanyFilter(item.id))}
				/>
				{item.name}
				<span className='checkmark'></span>
			</label>
		</FilterItem>
	)
}

export default CompanyFilterItem

const FilterItem = styled.div`
	display: flex;
	align-items: center;
	height: fit-content;
`
