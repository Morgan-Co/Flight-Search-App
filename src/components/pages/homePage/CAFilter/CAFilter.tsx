import styled from 'styled-components'
import { TicketsFilters } from '../../../../types'
import CAFilterItem from './CAFilterItem'
import { useAppSelector } from '../../../../hooks'

const CAFilter = ({ isMedia }: { isMedia: boolean }) => {
	const filters: TicketsFilters = useAppSelector(state => state.filters)

	return (
		<Wrapper $isMedia={isMedia}>
			<Title $isMedia={isMedia}>Количество пересадок</Title>
			<Form $isMedia={isMedia} action=''>
				{filters.connectionAmount.map(item => (
					<CAFilterItem key={item.id} item={item} />
				))}
			</Form>
		</Wrapper>
	)
}

export default CAFilter

const Wrapper = styled.div<{ $isMedia: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	${props =>
		props.$isMedia
			? `
	margin-bottom: 0;
	background: transparent;
	height: fit-content;
	border-radius: 0;
	`
			: `
	margin-bottom: 47px;
	background: #e8ebf2;
	height: 258px;
	border-radius: 10px;
	`}
`

const Form = styled.form<{ $isMedia: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 13px;
	width: ${props=> props.$isMedia && '100%'};
	label {
		color: ${props => props.$isMedia && '#fff'};
	}
	span {
		border-color: ${props => props.$isMedia && '#fff !important'};
	}
`

const Title = styled.h3<{ $isMedia: boolean }>`
	color: ${props => (props.$isMedia ? '#fff' : '#4e148c')};
	font-family: Inter;
	font-size: 20px;
	font-weight: 700;
	text-align: center;
	margin: ${props => props.$isMedia && '0 0 12px 0'};
`
