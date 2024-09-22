import { navbarLinks } from '../constants';

export function NavBar() {
	return (
		<nav className="flex flex-col w-full md:flex-row md:w-fit rounded-full">
			{navbarLinks.map((link) => (
				<a
					href={link.href}
					key={link.title}
					className="text-sm text-center flex items-center justify-center uppercase text-white bg-ceramic hover:brightness-125 transition-colors py-3 px-5 md:first:ps-7 md:last:pe-7 md:first:rounded-l-full md:last:rounded-e-full"
				>
					{link.title}
				</a>
			))}
		</nav>
	);
}
