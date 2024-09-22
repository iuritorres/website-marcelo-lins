import { z } from 'zod';

export const INTEREST = z.enum([
	'Rinoplastia Ultrassônica',
	'Lifting Facial',
	'Crânio Facial',
]);

export const INVESTMENTS = z.enum([
	'Até 5mil',
	'De 5mil a 10mil',
	'De 10mil a 20mil',
	'De 20mil a 30mil',
	'Acima de 30mil',
]);
