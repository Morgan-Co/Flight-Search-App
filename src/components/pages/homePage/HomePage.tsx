import TicketsList from './TicketsList/TicketsList'
import TicketsFilter from './TicketsFilter/TicketsFilter'
import styled from 'styled-components'
import CAFilter from './CAFilter/CAFilter'
import { useAppDispatch } from '../../../hooks/hooks'
import { fetchByCompanyName } from '../../../redux/tickets/tickets.actions'
// import { useAppSelector } from '../../../hooks/hooks'
// import { TicketsState } from '../../../types/types'

const HomePage = () => {
	const dispatch = useAppDispatch()
	// const { tickets }: TicketsState = useAppSelector(state => state.tickets)
	return (
		<Wrapper>
			<div>
				<CAFilter />
				<FilterWrapper>
					<Content>
						<Title>Компании</Title>
						<Form>
							{/* {tickets.map(ticket => (
							<>
								<input type='checkbox' />
								<label htmlFor=''>{ticket.company.name}</label>
							</>
						))} */}
							<FilterItem>
								<input
									type='checkbox'
									id='Pobeda'
									onClick={() => dispatch(fetchByCompanyName('Победа'))}
								/>
								<label htmlFor='Pobeda'>Победа</label>
							</FilterItem>
							<FilterItem>
								<input
									type='checkbox'
									id='RedWings'
									onClick={() => dispatch(fetchByCompanyName('Red Wings'))}
								/>
								<label htmlFor='RedWings'>Red Wings</label>
							</FilterItem>
							<FilterItem>
								<input
									type='checkbox'
									id='S7Airlines'
									onClick={() => dispatch(fetchByCompanyName('7 Airlines'))}
								/>
								<label htmlFor='S7Airlines'>S7 Airlines</label>
							</FilterItem>
						</Form>
					</Content>
				</FilterWrapper>
			</div>
			<TicketsSection>
				<TicketsFilter />
				<TicketsList />
				<LoadMoreButton onClick={() => {}}>Загрузить еще билеты</LoadMoreButton>
			</TicketsSection>
		</Wrapper>
	)
}

export default HomePage

const FilterWrapper = styled.div`
	width: 272px;
	height: 198px;
	background: #e8ebf2;
	border-radius: 10px;
	/* padding: 19px 0 0 19px; */
	padding: 19px;
	box-sizing: border-box;
`

const Content = styled.div``

const FilterItem = styled.div`
	display: flex;
	align-items: center;
	height: fit-content;
`

const Title = styled.h3`
	color: #4e148c;
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 0;
	margin-bottom: 15px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 21px;
	padding: 0 0 0 24px;

	input {
		width: 21px;
		height: 21px;
		border-radius: 4px;
		cursor: pointer;
		margin: 0;
	}

	label {
		color: #858ae3;
		font-family: Inter;
		font-size: 16px;
		font-weight: 500;
		margin-left: 10px;
	}
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const TicketsSection = styled.div`
	max-width: 727px;
`

const LoadMoreButton = styled.button`
	width: 100%;
	height: 62px;
	background: #4e148c;
	border-radius: 10px;
	color: var(--colors-white, #f7f9f7);
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	cursor: pointer;
	transition: all 0.2s;
	outline: none;
	border: none;

	&:hover {
		opacity: 0.9;
	}

	&:active {
		background: #3b0f69;
	}
`
