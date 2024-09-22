import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { INTEREST, INVESTMENTS } from '../constants';

type FormValues = {
	name: string;
	email: string;
	interest: string;
	investment: string;
};

const schema = z.object({
	name: z.string().min(1, { message: 'Nome é obrigatório' }).max(255),
	email: z
		.string()
		.email('Email inválido')
		.min(1, { message: 'Email é obrigatório' })
		.max(255),
	interest: INTEREST,
	investment: INVESTMENTS,
});

export function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			email: '',
			interest: INTEREST.Values['Rinoplastia Ultrassônica'],
			investment: INVESTMENTS.Values['Até 5mil'],
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		console.log('ENVIADO');
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-6 w-full lg:px-14"
		>
			<div>
				<input
					{...register('name')}
					placeholder="Digite seu nome"
					autoComplete="name"
					className="input"
				/>
				{errors.name && (
					<p className="text-red-500 text-sm pt-2">
						{errors.name.message}
					</p>
				)}
			</div>

			<div>
				<input
					{...register('email')}
					placeholder="Digite seu email"
					autoComplete="email"
					className="input"
				/>

				{errors.email && (
					<p className="text-red-500 text-sm pt-2">
						{errors.email.message}
					</p>
				)}
			</div>

			<select {...register('interest')} className="input">
				{Object.values(INTEREST.Values).map((interest) => (
					<option key={interest} value={interest}>
						{interest}
					</option>
				))}
			</select>

			<select {...register('investment')} className="input">
				{Object.values(INVESTMENTS.Values).map((investment) => (
					<option key={investment} value={investment}>
						{investment}
					</option>
				))}
			</select>

			<button type="submit" className="button w-full">
				Enviar
			</button>
		</form>
	);
}
