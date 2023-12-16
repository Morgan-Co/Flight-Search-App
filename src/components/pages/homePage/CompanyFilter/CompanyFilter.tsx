import styled from 'styled-components'
import { device } from '../../../../data/media.data'
import { useAppSelector } from '../../../../hooks'
import { TicketsFilters } from '../../../../types'
import CompanyFilterItem from './CompanyFilterItem'

const CompanyFilter = ({ isMedia }: { isMedia: boolean }) => {
	const filters: TicketsFilters = useAppSelector(state => state.filters)
	return (
		<FilterWrapper $isMedia={isMedia}>
			<Content>
				<Title $isMedia={isMedia}>Компании</Title>
				<Form $isMedia={isMedia}>
					{filters.companies.map(item => (
						<CompanyFilterItem key={item.id} item={item} />
					))}
				</Form>
			</Content>
		</FilterWrapper>
	)
}

export default CompanyFilter

const FilterWrapper = styled.div<{ $isMedia: boolean }>`
	height: 198px;
	border-radius: 10px;
	box-sizing: border-box;
	${props =>
		props.$isMedia
			? `
		background: transparent
		padding: 0;
	`
			: `
	background: #e8ebf2;
	padding: 19px;
	`}
`

const Content = styled.div``

const Title = styled.h3<{ $isMedia: boolean }>`
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 0;
	margin-bottom: 15px;
	${props =>
		props.$isMedia
			? `
		color: #fff
	`
			: `
			color: #4e148c;
	`}
`

const Form = styled.form<{ $isMedia: boolean }>`
	display: flex;
	flex-direction: column;

	${props =>
		props.$isMedia
			? `
		padding: 0;
		gap: 24px;
		`
			: `
		padding: 0 0 0 24px;
		gap: 13px;
	`}

	span {
		${props =>
			props.$isMedia &&
			`
		background-color: transparent !important;
		border-color: #fff !important;
		`}

		&::after {
			${props =>
				props.$isMedia &&
				`
		background: #fff !important;
		`}
		}
	}

	input {
		width: 21px;
		height: 21px;
		border-radius: 4px;
		cursor: pointer;
		margin: 0;
	}

	label {
		font-family: Inter;
		font-size: 16px;
		font-weight: 500;
		margin-left: 10px;
		@media ${device.mobileL} {
			font-size: 12px;
		}
		${props =>
			props.$isMedia
				? `
		color: #fff;
		margin: 0;
	`
				: `
			color: #858ae3;
	`}
	}
`
