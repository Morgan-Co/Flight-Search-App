import styled from 'styled-components'
import { useAppSelector } from '../../../../hooks'
import { TicketsState } from '../../../../types'
import Error from '../../../ui/Error'
import Loader from '../../../ui/Loader'
import TicketItem from '../TicketItem/TicketItem'
const TicketsList = () => {
	const { tickets, loading, error }: TicketsState = useAppSelector(
		state => state.tickets
	)

	if (loading) {
		return <Loader />
	}
	if (error) {
		return <Error error={error} />
	}

	return (
		<Wrapper>
			{tickets.length ? (
				tickets.map(ticket => <TicketItem key={ticket.id} {...ticket} />)
			) : (
				<div>No Tickets</div>
			)}
		</Wrapper>
	)
}

export default TicketsList

const Wrapper = styled.div`
	/* width: 100%; */
`
