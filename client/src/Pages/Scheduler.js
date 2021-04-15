/* eslint-disable react/destructuring-assignment */
import React, {useState, useEffect } from "react";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import './pagesCSS/Scheduler.css';
import AddButton from './../Components/Scheduler/Addbutton';
import ScForm from './../Components/Scheduler/ScForm'
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	WeekView,
	Appointments,
	DragDropProvider,
	EditRecurrenceMenu,
	AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { GiCondorEmblem } from "react-icons/gi";
const getEvents = async () => {
	try {
		const res = await axios.get(
			'http://localhost:3005/api/v1/events/getEvent',
		);
		if(res){
		
		//console.log(new Date(res.data.records[0].startDate));
		res.data.records.forEach(element => {
			element.startDate = new Date(element.startDate);
			element.endDate = new Date(element.endDate);
			element.id = element._id;
			//console.log(element);
			recurrenceAppointments.push(element);
		});
		
		
		
		
		}
		//setEvents(res.data.data);
		
	} catch {}
};
getEvents();

const recurrenceAppointments = [
	// {
	// 	title: 'Website Re-Design Plan',
	// 	startDate: new Date(2018, 5, 25, 9, 15),
	// 	endDate: new Date(2018, 5, 25, 11, 30),
	// 	id: 100,
	// 	//rRule: 'FREQ=DAILY;COUNT=3',
	// 	//exDate: '20180628T063500Z,20180626T061500Z',
	// },
	//   {
	//    description: "Asprin 2mg",
	//   endDate: new Date(2018, 5, 25, 9, 59),
	//    id: "6076705cace27d4f2486b5d8",
	//    startDate: new Date(2018, 5, 25, 9, 59),
	//    title: "medicine",
	//    __v: 0,
	//    _id: "6076705cace27d4f2486b5d8",
	//    }
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
			<AddButton />
				<Paper className='meds_wrapper'>
					<Scheduler data={data} height={660}>
						<ViewState defaultCurrentDate={currentDate} />
						<EditingState onCommitChanges={this.onCommitChanges} />
						<EditRecurrenceMenu />
						<WeekView startDayHour={9} endDayHour={24} />
						<Appointments appointmentComponent={appointmentComponent} />
						<AllDayPanel />
						<DragDropProvider allowDrag={allowDrag} />
					</Scheduler>
				</Paper>
				<ScForm />
			</div>
		);
	}
}
