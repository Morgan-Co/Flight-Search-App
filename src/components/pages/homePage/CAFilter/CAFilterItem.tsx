import styled from 'styled-components'
import { ConnectionAmount } from '../../../../types'
import { useAppDispatch } from '../../../../hooks'
import { setCAFilter } from '../../../../redux/filters/filters.slice'

const CAFilterItem = ({ item }: { item: ConnectionAmount }) => {
	const dispatch = useAppDispatch()

	return (
		<FormItem>
			<label htmlFor={item.name} className='ca-container'>
				<input
					type='checkbox'
					id={item.name}
					checked={item.isActive}
					onChange={() => dispatch(setCAFilter(item.id))}
				/>

				{item.name}
				<span className='checkmark'></span>
			</label>
		</FormItem>
	)
}

export default CAFilterItem

const FormItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0 19px;

	input {
		width: 21px;
		height: 21px;
		border-radius: 4px;
		cursor: pointer;
	}

	label {
		color: #858ae3;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
