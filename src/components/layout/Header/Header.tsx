import styled from 'styled-components'
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
`

const Title = styled.h1`
	color: #4e148c;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin-left: 34px;
`
const Img = styled.img`
	/* width: 100px;
	height: 80.447px; */
`
