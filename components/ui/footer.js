import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import logo from '../../public/img/logo-tucassa-1.png';
import Link from 'next/link';

function Footer({ props }) {
	const AnyReactComponent = ({ text }) => <div>{text}</div>;
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

	return (
		<footer className="bg-gray-300">
			<div className="w-[1220px] max-w-full mx-auto flex justify-around max-md:flex-col max-md:items-center max-md:gap-12 py-20">
				<div>
					<Image
						height={120}
						src={logo}
						alt="logo"
					/>
				</div>

				<div className="flex flex-col max-md:items-center max-md:justify-center">
					<p className="font-bold text-2xl mb-3 text-red-500 uppercase">
						Enlaces
					</p>
					<ul className="flex flex-col max-md:text-center gap-4 font-semibold text-gray-900">
						<Link href={'/viviendas'}>Viviendas</Link>
						<Link href={'/cabanas'}>Cabañas</Link>
						<Link href={'/contacto'}>Metodo Constructivo</Link>
						<Link href={'/metodo-constructivo'}>Contacto</Link>
					</ul>
				</div>

				<div className="flex flex-col gap-2 max-md:items-center max-md:justify-center">
					<p className="font-bold text-2xl mb-3 text-red-500 uppercase">
						SUSCRIBIRSE
					</p>
					<input
						className="rounded-md p-2 shadow-md shadow-black/30 w-[300px] bg-gray-100 color-gray-900 placeholder:text-gray-500"
						placeholder="correo@correo.com"
					/>
					<div className="flex  text-center mt-2">
						<a
							href="#"
							className="uppercase bg-red-500 text-gray-100 p-3 px-6 rounded-lg text-center font-semibold text-[15px]"
						>
							Enviar
						</a>
					</div>
				</div>
			</div>

			<div className="bg-gray-900 py-4 text-gray-100 text-center">
				Desarrollado por Martin Camer. Todos los derechos reservados © Tu Cassa
				2023
			</div>
		</footer>
	);
}

export default Footer;
