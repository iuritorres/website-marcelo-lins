import { useRef } from 'react';
import { FAQItems, whatsAppLink } from '../constants';

export function FAQ() {
	const answerRefs = useRef<HTMLDivElement[] | null[]>([]);
	const arrowRefs = useRef<SVGSVGElement[] | null[]>([]);

	function toggleAnswer(index: number) {
		const answer = answerRefs.current[index]!;
		const arrow = arrowRefs.current[index]!;

		if (answer.style.display === 'none' || answer.style.display === '') {
			answer.style.display = 'block';
			arrow.style.transform = 'rotate(0deg)';
		} else {
			answer.style.display = 'none';
			arrow.style.transform = 'rotate(-180deg)';
		}
	}

	return (
		<section className="py-6 bg-beige sm:py-12 lg:py-18">
			<div className="section-container text-center">
				<h2 className="text-4xl font-bold font-lastica">FAQ</h2>
				<p className="text-2xl">Perguntas Frequentes</p>
			</div>

			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto mt-6 space-y-4">
					{FAQItems.map((item, index) => (
						<div
							key={`faq-question-${index}`}
							className="transition-all duration-200 bg-white shadow-lg cursor-pointer hover:bg-gray-200 rounded-md"
						>
							<button
								type="button"
								data-state="closed"
								className="flex items-center justify-between w-full px-4 py-5"
								onClick={() => toggleAnswer(index)}
							>
								<span className="flex text-lg font-now font-semibold text-black">
									{item.question}
								</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6 text-gray-400"
									ref={(element) =>
										(arrowRefs.current[index] = element)
									}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</button>

							<div
								className="px-4 pb-5 sm:px-6 sm:pb-6 hidden"
								ref={(element) =>
									(answerRefs.current[index] = element)
								}
							>
								<p>{item.answer}</p>
							</div>
						</div>
					))}
				</div>

				<p className="text-center font-now text-gray-600 mt-9">
					Ainda tem dúvidas?{' '}
					<a
						href={whatsAppLink}
						target="_blank"
						title="Entre em contato comigo pelo WhatsApp"
						className="cursor-pointer font-bold hover:underline"
					>
						Fale comigo
					</a>
				</p>
			</div>
		</section>
	);
}
