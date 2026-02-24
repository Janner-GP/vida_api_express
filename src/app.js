import express from 'express';
import { doctorRoutes } from './routes/doctor.route.js';
import { appointmentRoutes } from './routes/appoinment.route.js';
import { specialtyRoutes } from './routes/specialty.route.js';
import { patientRoutes } from './routes/patient.route.js';

const app = express();

app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/specialty', specialtyRoutes);
app.use('/patients', patientRoutes);

export default app;