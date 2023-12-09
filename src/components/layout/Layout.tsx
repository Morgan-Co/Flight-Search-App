import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<Wrapper>
			<Header />
			<Outlet />
		</Wrapper>
	)
}

export default Layout

const Wrapper = styled.div`
	max-width: 1048px;
	width: 100%;
`
