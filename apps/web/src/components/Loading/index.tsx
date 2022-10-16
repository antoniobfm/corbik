import React from 'react'

import { Container } from './style'

export const Loading: React.FC = () => {
	return (
		<Container>
			<div className="loader">Loading...</div>
		</Container>
	)
}