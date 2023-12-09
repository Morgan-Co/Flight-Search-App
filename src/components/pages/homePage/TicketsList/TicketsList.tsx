import { useAppSelector } from '../../../../hooks/hooks'
import { TicketsState } from '../../../../types/types'
import TicketItem from './TicketItem/TicketItem'
import Loader from '../../../ui/Loader'
import Error from '../../../ui/Error'
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
		<div>
			{tickets &&
				tickets.map(ticket => <TicketItem key={ticket.id} {...ticket} />)}
		</div>
	)
}

export default TicketsList
