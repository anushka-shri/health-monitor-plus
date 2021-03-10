import React from 'react';
import Particles from 'react-particles-js';
import './particles.css'

function Particles2() {
	return (
		<div className='App'>
			<Particles
				className='particles'
				params={{
					particles: {
						number: {
							value: 70,
						},
						size: {
							value: 4,
						},
						color: {
							value: '#383e56',
						},

						opacity: {
							value: '1',
						},

						line_linked: {
							color: '#383e56',
							opacity: '1',
						},
						move: {
							speed: '4',
						},
					},

					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'grab',
								color: '#808080',
							},
						},
						modes: {
							grab: {
								line_linked: {
									opacity: '4',
								},
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default Particles2;
