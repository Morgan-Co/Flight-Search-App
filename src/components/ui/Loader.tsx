import styled from 'styled-components'
import Preloader from "/Preloader.gif"


const Loader = () => {
	return (
			<LoaderWrapper>
				<LoaderImg src={Preloader} alt='' />
			</LoaderWrapper>
	)
}

export default Loader

const LoaderWrapper = styled.div`
	height: 734px;
	display: flex;
	justify-content: center;
	position: relative;
`
const LoaderImg = styled.img`
	position: absolute;
	top: 35%;
	display: block;
	width: 150px;
	height: 150px;
`