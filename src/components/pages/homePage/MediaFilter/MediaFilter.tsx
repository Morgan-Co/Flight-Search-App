import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'
import { device } from '../../../../data/media.data'
import CAFilter from '../CAFilter/CAFilter'
import CompanyFilter from '../CompanyFilter/CompanyFilter'

const MediaFilter = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<MediaSection $isOpen={isOpen}>
			<MediaTop onClick={() => setIsOpen(prev => !prev)}>
				<Title>Любая авиакомпания, любое кол-во пересадок</Title>
				<OpenSettings>
					<Subtitle>Открыть настройки</Subtitle>
					<OpenBtn $isRotate={isOpen}>
						<IoIosArrowDown />
					</OpenBtn>
				</OpenSettings>
			</MediaTop>
			<MediaBottom $isOpen={isOpen}>
				<CompanyFilter isMedia={true} />
				<CAFilter isMedia={true} />
			</MediaBottom>
		</MediaSection>
	)
}

export default MediaFilter

const MediaSection = styled.div<{ $isOpen?: boolean }>`
	width: 100%;
	/* height: 267px; */
	height: ${props => (props.$isOpen ? '267px' : '44px')};
	background: #4e148c;
	border-radius: 10px;
	box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
	margin-bottom: 20px;
	padding: 0 23px;
	box-sizing: border-box;
	transition: all 0.2s ease;
	display: block;
	@media ${device.laptop} {
		display: none;
	}
	@media ${device.mobileL} {
		padding: 0 15px;
	}
`

const MediaTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 44px;
	cursor: pointer;
`

const Title = styled.h5`
	color: #f7f9f7;
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
	margin: 0;

	@media ${device.mobileL} {
		font-size: 12px;
	}
`
const OpenSettings = styled.div`
	display: flex;
	align-items: center;
`

const OpenBtn = styled.button<{ $isRotate: boolean }>`
	color: #fff;
	font-size: 20px;
	background: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s ease;
	transform: ${props => (props.$isRotate ? 'rotate(180deg)' : 'rotate(0)')};
	@media ${device.mobileL} {
		font-size: 30px;
	}
`

const Subtitle = styled.h6`
	color: #f7f9f7;
	font-family: Inter;
	font-size: 12px;
	font-weight: 500;
	margin: 0;

	@media ${device.mobileL} {
		display: none;
	}
`

const MediaBottom = styled.div<{ $isOpen: boolean }>`
	display: ${props => (props.$isOpen ? 'flex' : 'none')};
	justify-content: space-between;
	max-width: 485px;
`
