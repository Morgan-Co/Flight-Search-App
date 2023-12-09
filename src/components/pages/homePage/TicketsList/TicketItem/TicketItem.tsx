import { CgDetailsMore } from 'react-icons/cg'
import styled from 'styled-components'
import { Ticket } from '../../../../../types/types'

const TicketItem = (props: Ticket) => {
	const { price, company, time, duration, connectionAmount } = props
	const hours = new Date(duration).getHours()
	const minutes = new Date(duration).getMinutes()

	return (
		<>
			<TicketWrapper>
				<Content>
					<Top>
						<Price>{price}</Price>
						<Img src={company.logo} alt='' />
					</Top>
					<Bottom>
						<Col>
							<Title>SVO - LED</Title>
							<Info>
								{time.startTime} - {time.endTime}
							</Info>
						</Col>
						<Col>
							<Title>В пути</Title>
							<Info>
								{hours} ч {minutes} мин
							</Info>
						</Col>
						<Col>
							<Title>Пересадки</Title>
							<Info>
								{connectionAmount
									? `${connectionAmount} пересадки`
									: 'Без пересадок'}
							</Info>
						</Col>
					</Bottom>
				</Content>
				<DetailsButton type='button'>
					<CgDetailsMore />
				</DetailsButton>
			</TicketWrapper>
		</>
	)
}

export default TicketItem

const TicketWrapper = styled.div`
	max-width: 727px;
	width: 100%;
	height: 174px;
	background: #e8ebf2;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 47px;
	position: relative;
`
const Content = styled.div`
	max-width: 596px;
	height: 111px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Top = styled.div`
	display: flex;
	justify-content: space-between;
`
const Img = styled.img`
	width: auto;
	height: auto;
	align-self: flex-end;
`

const Price = styled.div`
	color: #4e148c;
	font-family: Inter;
	font-size: 32px;
	font-weight: 700;
`

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 92.5%;
`

const Col = styled.div``

const Title = styled.div`
	color: #858ae3;
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 9px;
`

const Info = styled.div`
	color: #4e148c;
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
`

const DetailsButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	background: #cacdd3;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 20px;
	border-radius: 4px;

	&:hover {
		background: #aeb1b6;
	}

	&:active {
		background: #979a9e;
	}
`
