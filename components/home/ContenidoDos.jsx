import {
	BsFillCalendarEventFill,
	BsFillCreditCard2BackFill,
} from 'react-icons/bs';
import Image from 'next/image';
import imagen from '../../public/img/home-flia.jpg';

function ContenidoDos() {
	return (
		<section className="w-full h-[600px] max-md:h-full bg-red-500 mt-20 px-20 flex justify-between items-center  max-lg:flex-col max-lg:py-20 max-lg:gap-12 max-lg:px-4 max-lg:text-center">
			<div className="flex flex-col gap-14">
				<div className="flex flex-col items-center gap-4">
					<BsFillCalendarEventFill className="text-3xl text-gray-900" />
					<p className="font-bold text-3xl text-gray-100 max-lg:text-2xl">
						EL MEJOR PRECIO DE CONTADO
					</p>
					<p className="text-gray-900 text-2xl font-semibold capitalize max-lg:text-xl">
						Entrega en 30 días
					</p>
					<p className="text-gray-900 text-2xl max-lg:text-xl">
						¡Recibimos tu vehículo como parte de pago!
					</p>
				</div>
				<div className="flex flex-col items-center gap-4">
					<BsFillCreditCard2BackFill className="text-3xl text-gray-900" />
					<p className="font-bold text-3xl text-gray-100 max-lg:text-2xl">
						TENER TU CASA ES MÁS FÁCIL CON NOSOTROS
					</p>
					<p className="text-center text-xl text-gray-100 max-lg:text-lg">
						Tenemos más de 17 años de trayectoria ¡Comprá seguro y tranquilo!
						Más de 6.000 familias confiaron en nosotros. <br /> Nuestros precios
						son los más bajos porque tenemos nuestra propia fábrica.
					</p>
				</div>
			</div>
			<Image
				className="w-[800px] max-lg:w-full h-[100%] max-lg:rounded-lg max-lg:shadow-lg max-lg:shadow-black/50"
				src={imagen}
				alt="imagen"
			/>
		</section>
	);
}

export default ContenidoDos;
