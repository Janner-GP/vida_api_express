import express from 'express';
import { doctorRoutes } from './routes/doctor.route.js';
import { appointmentRoutes } from './routes/appoinment.route.js';
import { specialtyRoutes } from './routes/specialty.route.js';
import { patientRoutes } from './routes/patient.route.js';
import { connectMongo } from './config/database/mongoconfig.js';
import { connectPostgres } from './config/database/pgconfig.js';

connectMongo()
await connectPostgres()

const app = express();
app.use(express.json());

app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/specialty', specialtyRoutes);
app.use('/api/patients', patientRoutes);


export default app;