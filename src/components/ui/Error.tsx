import styled from 'styled-components'

const Error = ({ error }: { error: string }) => {
	return (
		<ErrorMessage>
			<div>{error}</div>
		</ErrorMessage>
	)
}
export default Error

const ErrorMessage = styled.div`
	width: 100%;
	height: 734px;
	border-radius: 10px;
	margin: 10px;
	background: #e8ebf2;
	color: #3b0f69;
	font-size: 40px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	position: relative;

	div {
		position: absolute;
		top: 40%;
		filter: drop-shadow(0 0 15px #3b0f69);
	}
`
