import {
	ContactForm,
	FAQ,
	Header,
	Location,
	WhatsAppFloatIcon,
} from './components';
import { whatsAppLink } from './constants';

export function App() {
	return (
		<main>
			<Header />
			<FAQ />
			<Location />

			<section className="py-6 bg-beige sm:py-12 lg:py-18">
				<div className="section-container flex flex-col gap-12 justify-around items-center lg:flex-row">
					<div className="flex flex-col gap-4 text-center w-full lg:px-14">
						<h1 className="font-lastica text-4xl">
							ENTRE EM CONTATO
						</h1>

						<p className="text-lg">
							Para agendar uma consulta ou tirar dúvidas, preencha
							o formulário a seguir ou entre em contato pelo{'  '}
							<a
								href={whatsAppLink}
								target="_blank"
								rel="noopener noreferrer"
								title="Entre em contato comigo pelo WhatsApp"
								className="text-ceramic font-semibold hover:underline"
							>
								WhatsApp
							</a>
							.
						</p>
					</div>

					<ContactForm />
				</div>
			</section>

			<WhatsAppFloatIcon />
		</main>
	);
}
