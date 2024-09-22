import doutorMarceloLins from '../assets/images/marcelo/Doutor Marcelo Lins 1.jpg';
import { NavBar } from './';

export function Header() {
	return (
		<header className="bg-slate-800 bg-hero-section bg-blend-multiply bg-cover bg-no-repeat">
			<div className="section-container flex flex-col md:flex-row justify-between items-center gap-4 md:!px-28">
				<h1 className="font-lastica text-white text-2xl">
					Dr. Marcelo Lins
				</h1>

				<NavBar />
			</div>

			<div className="section-container flex flex-col gap-12 md:flex-row items-center xl:h-[80vh] lg:!px-28">
				<img
					src={doutorMarceloLins}
					alt="Dr. Marcelo Lins | Rinoplastia ultrassônica | Lifting Facial | Crânio Facial"
					className="w-[400px] h-[500px] rounded-tl-[3rem] rounded-br-[3rem] object-cover"
				/>

				<div className="lg:pr-28 flex flex-col gap-8 text-white text-lg font-semibold">
					<p>
						A rinoplastia é uma das cirurgias estéticas mais
						procuradas por quem deseja harmonizar os traços faciais
						e melhorar a respiração. Com anos de experiência e uma
						abordagem personalizada, o Dr. [MARCELO LINS] oferece
						resultados naturais e seguros, respeitando a
						individualidade de cada paciente.
					</p>

					<p>
						Se você está em busca de mais confiança e bem-estar,
						agende uma consulta e descubra como podemos ajudar a
						realizar sua transformação. Sua nova versão começa aqui!
					</p>

					<a
						href="#formulário-de-contato"
						className="py-3 px-6 bg-ceramic md:w-fit text-white text-center rounded-full hover:bg-ceramic/95 hover:-translate-y-1 transition-transform"
					>
						Agende sua consulta
					</a>
				</div>
			</div>
		</header>
	);
}
