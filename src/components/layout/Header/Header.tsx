import styled from 'styled-components'
import { device } from '../../../data/media.data'
import logo from '/logo.svg'

const Header = () => {
	return (
		<Wrapper>
			<Img src={logo} alt='Logo' />
			<Title>Поиск авиабилетов</Title>
		</Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 20.55px;
	justify-content: center;

	@media ${device.laptop} {
		justify-content: start;
	}
`

const Title = styled.h1`
	color: #4e148c;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin-left: 34px;
	display: none;

	@media ${device.laptop} {
		display: block;
	}
`

const Img = styled.img`
	@media ${device.mobileL} {
		width: 57px;
		height: 46px;
	}
`
