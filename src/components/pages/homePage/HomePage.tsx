import { useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../../../data/media.data'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchBySideFilters } from '../../../redux/tickets/tickets.actions'
import { updateLimit } from '../../../redux/tickets/tickets.slice'
import FilterSection from './FilterSection/FilterSection'
import MediaFilter from './MediaFilter/MediaFilter'
import TicketsFilter from './TicketsFilter/TicketsFilter'
import TicketsList from './TicketsList/TicketsList'

const HomePage = () => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(state => state.filters)

	useEffect(() => {
		dispatch(fetchBySideFilters(filters))
	}, [filters, dispatch])

	return (
		<Wrapper>
			<FilterSection />
			<TicketsSection>
				<TicketsFilter />
				<MediaFilter />
				<TicketsList />
				<LoadMoreButton
					onClick={() => {
						dispatch(updateLimit())
					}}
				>
					Загрузить еще билеты
				</LoadMoreButton>
			</TicketsSection>
		</Wrapper>
	)
}

export default HomePage

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 0 20px;

	@media ${device.laptop} {
		justify-content: space-between;
	}
`

const TicketsSection = styled.div`
	max-width: 727px;
	width: 100%;
	/* min-width: 485px; */
`

const LoadMoreButton = styled.button`
	width: 100%;
	height: 62px;
	background: #4e148c;
	border-radius: 10px;
	color: #f7f9f7;
	font-family: Inter;
	font-size: 24px;
	font-weight: 700;
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
