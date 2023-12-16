import styled from 'styled-components'
import { device } from '../../../../data/media.data'
import CAFilter from '../CAFilter/CAFilter'
import CompanyFilter from '../CompanyFilter/CompanyFilter'

const FilterSection = () => {
	return (
		<Wrapper>
			<CAFilter isMedia={false} />
			<CompanyFilter isMedia={false} />
		</Wrapper>
	)
}

export default FilterSection

const Wrapper = styled.div`
	max-width: 272px;
	width: 100%;
	display: none;
	@media ${device.laptop} {
		display: block;
	}
`
