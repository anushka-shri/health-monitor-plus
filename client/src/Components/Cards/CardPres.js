import React from 'react'
import './Cardpres.css'
import Button from '@material-ui/core/Button';

function CardPres() {
    return (
			<div className='cards'>
				<div class='card PRES'>
					<div class='card-content'>
						<div class='content'>
							<p>Prescriptions Added</p>
							<p>
								Number
								<Button
									variant='outlined'
									className='icon_texts'
									color='secondary'>
									See All
								</Button>
							</p>
						</div>
					</div>
				</div>

				<div class='card DOC'>
					<div class='card-content'>
						<div class='content'>
							<p>Doctors Added</p>
							<p>
								Number
								<Button
									variant='outlined'
									className='icon_texts'
									color='secondary'>
									See All
								</Button>
							</p>
						</div>
					</div>
				</div>
				<div class='card DOC'>
					<div class='card-content'>
						<div class='content'>
							<p>Another Card</p>
							<p>
								Number
								<Button
									variant='outlined'
									className='icon_texts'
									color='secondary'>
									See All
								</Button>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default CardPres
