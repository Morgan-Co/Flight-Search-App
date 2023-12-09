import styled from 'styled-components'
import { fetchByConnectionAmount } from '../../../../redux/tickets/tickets.actions'
import { useAppDispatch } from '../../../../hooks/hooks'

const CAFilter = () => {
	const dispatch = useAppDispatch()
	return (
		<Wrapper>
			<Title>Количество пересадок</Title>
			<Form action=''>
				<FormItem>
					<input
						type='checkbox'
						name='all'
						id='all'
						defaultChecked
						onClick={() => dispatch(fetchByConnectionAmount(0))}
					/>
					<label htmlFor='all'>Без пересадок</label>
				</FormItem>
				<FormItem>
					<input
						type='checkbox'
						name='1'
						id='1'
						onClick={() => dispatch(fetchByConnectionAmount(1))}
					/>
					<label htmlFor='1'>1 пересадка</label>
				</FormItem>
				<FormItem>
					<input
						type='checkbox'
						name='2'
						id='2'
						onClick={() => dispatch(fetchByConnectionAmount(2))}
					/>
					<label htmlFor='2'>2 пересадки</label>
				</FormItem>
				<FormItem>
					<input
						type='checkbox'
						name='3'
						id='3'
						onClick={() => dispatch(fetchByConnectionAmount(3))}
					/>
					<label htmlFor='3'>3 пересадки</label>
				</FormItem>
			</Form>
		</Wrapper>
	)
}

export default CAFilter

const Wrapper = styled.div`
	width: 272px;
	height: 258px;
	border-radius: 10px;
	background: #e8ebf2;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 47px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 21px;
`

const Title = styled.h3`
	color: #4e148c;
	font-family: Inter;
	font-size: 20px;
	font-weight: 700;
`

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

	/* input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;
		width: 1.6em;
		height: 1.6em;
		border-radius: 0.15em;
		margin-right: 0.5em;
		border: 0.15em solid #007a7e;
		outline: none;
		cursor: pointer;

		input.checked {
			background-color: #007a7e;
			position: relative;
		}

		input.checked::before {
			content: '2714';
			font-size: 1.5em;
			color: #fff;
			position: absolute;
			right: 1px;
			top: -5px;
		}
	} */
`
