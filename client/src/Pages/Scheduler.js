/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import './pagesCSS/Scheduler.css';
import { AddButton, ScForm } from './../Components';
import {
	ViewState,
	EditingState,
} from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	WeekView,
	Appointments,
	DragDropProvider,
	AppointmentTooltip,
	Toolbar,
	DateNavigator,
	TodayButton,
	EditRecurrenceMenu,
	ConfirmationDialog,
	AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

const getEvents = async () => {
	try {
		const res = await axios.get('http://localhost:3005/api/v1/events/getEvent');
		if (res) {
			//console.log(new Date(res.data.records[0].startDate));
			res.data.records.forEach((element) => {
				
				//console.log(element);
				//console.log(new Date(element.startDate));
				
				var sHour = new Date(element.startTime).getHours();
				var eHour = new Date(element.endTime).getHours();
				var sMinute = new Date(element.startTime).getMinutes();
				var eMinute = new Date(element.endTime).getMinutes();
				var sSeconds = new Date(element.startTime).getSeconds();
				var eSeconds = new Date(element.endTime).getSeconds();
				

				var startDate = new Date(element.startDate);
				element.startDate = startDate.setHours(sHour,sMinute,sSeconds);
				var endDate = new Date(element.endDate);
				element.endDate = endDate.setHours(eHour,eMinute,eSeconds);
				console.log(element.startDate);
				
				element.id = element._id;
				recurrenceAppointments.push(element);
			});
		}
		
	} catch {}
};
getEvents();




const recurrenceAppointments = [
	
];

const dragDisableIds = new Set([3, 8, 10, 12]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
	if (allowDrag(props.data)) {
		return <Appointments.Appointment {...props} />;
	}
	return (
		<Appointments.Appointment
			{...props}
			style={{ ...props.style, cursor: 'not-allowed' }}
		/>
	);
};

export default class Demo extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: recurrenceAppointments,
			currentDate: new Date(),
		};
		console.log(this.state);
		this.onCommitChanges = this.commitChanges.bind(this);
	}

	commitChanges({ added, changed, deleted }) {
		this.setState((state) => {
			let { data } = state;

			if (added) {
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map((appointment) =>
					changed[appointment.id]
						? { ...appointment, ...changed[appointment.id] }
						: appointment,
				);
			}
			if (deleted !== undefined) {
				data = data.filter((appointment) => appointment.id !== deleted);
			}
			return { data };
		});
	}

	render() {
		const { data, currentDate } = this.state;

		return (
			<div className='meds_container'>
				<Paper className='meds_wrapper'>
					<AddButton />
					<Scheduler data={data} height={660}>
						<ViewState defaultCurrentDate={currentDate} />
						<EditingState onCommitChanges={this.onCommitChanges} />
						<EditRecurrenceMenu />
						<WeekView startDayHour={9} endDayHour={24} />
						<Toolbar />
						<DateNavigator />
						<TodayButton />
						<ConfirmationDialog />
						<Appointments appointmentComponent={appointmentComponent} />
						<AppointmentTooltip showDeleteButton />
						<AllDayPanel />
						<DragDropProvider allowDrag={allowDrag} />
					</Scheduler>
				</Paper>
				<ScForm id='SForm' />
			</div>
		);
	}
}
