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
							value: 80,
						},
						size: {
							value: 4,
						},
						color: {
							value: '#808080',
						},

						opacity: {
							value: '1',
						},

						line_linked: {
							color: '#808080',
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
