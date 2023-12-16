import { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../../../data/media.data'
import { useAppDispatch } from '../../../../hooks/hooks'
import { fetchByTicketsFilter } from '../../../../redux/tickets/tickets.actions'

const TicketsFilter = () => {
	const dispatch = useAppDispatch()
	const [activeButton, setActiveButton] = useState<number>(1)
	const handleClick = (buttonId: number) => {
		setActiveButton(buttonId)
	}
	return (
		<>
			<Wrapper>
				<LeftRoundedButton
					$active={activeButton === 1}
					onClick={() => {
						handleClick(1)
						dispatch(fetchByTicketsFilter('cheap'))
					}}
					type='button'
				>
					Самый дешевый
				</LeftRoundedButton>
				<Button
					$active={activeButton === 2}
					onClick={() => {
						handleClick(2)
						dispatch(fetchByTicketsFilter('fast'))
					}}
					type='button'
				>
					Самый быстрый
				</Button>
				<RightRoundedButton
					$active={activeButton === 3}
					onClick={() => {
						handleClick(3)
						dispatch(fetchByTicketsFilter('optimal'))
					}}
					type='button'
				>
					Самый оптимальный
				</RightRoundedButton>
			</Wrapper>
		</>
	)
}

export default TicketsFilter

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 29px;
`

const Button = styled.button<{ $active?: boolean }>`
	max-width: 242px;
	width: 100%;
	background: ${props => (props.$active ? '#4e148c' : 'transparent')};
	height: 55px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => (props.$active ? '#FFFFFF' : '#4e148c')};
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	border: 1px solid #4e148c;
	transition: all 0.2s ease;

	@media ${device.mobileL} {
		font-size: 12px;
		height: 42px;
	}

	${props =>
		!props.$active &&
		`&:hover {
		background: #b69fcf78;
		color: #4e148ca4;
	}`}
`
const LeftRoundedButton = styled(Button)`
	border-radius: 10px 0px 0px 10px;
	border-right: none;
`
const RightRoundedButton = styled(Button)`
	border-radius: 0px 10px 10px 0px;
	border-left: none;
`
