import Image from 'next/image';
import uno from '../../public/img/comentarios/instalada-alberto.jpg';
import dos from '../../public/img/comentarios/instalada-marcela.jpg';
import tres from '../../public/img/comentarios/instalada-ofelia.jpg';
import cuatro from '../../public/img/comentarios/instalada-sosa.jpg';

function ContenidoTres() {
	return (
		<section className="bg-gray-200 py-28 px-10">
			<div className="w-[1220px] max-w-full mx-auto">
				<h3 className="capitalize font-bold text-4xl text-center text-red-500 mb-12">
					Viviendas instaladas
				</h3>

				<div className="flex max-md:flex-col items-center gap-10">
					{[...clientes].map(cliente => (
						<div
							key={cliente._id}
							className="flex flex-col gap-6"
						>
							<Image
								className="rounded-md shadow-lg shadow-black/20"
								alt={`${cliente.nombre} imagen`}
								src={cliente.imagen}
							/>
							<p className="text-gray-800 font-semibold text-lg max-md:text-base">
								{cliente.descripcion}{' '}
								<span className="text-red-500">{cliente.nombre}</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const clientes = [
	{
		_id: 1,
		descripcion: ' | Vivienda instalada en Belen, Catamarca ',
		nombre: 'Alberto Carabajal',
		imagen: uno,
	},
	{
		_id: 2,
		descripcion: ' | Vivienda instalada en San Luis Capital ',
		nombre: 'Mónica Gonzalez',
		imagen: dos,
	},
	{
		_id: 3,
		descripcion: ' | Vivienda instalada en S. Fernando del Valle de Catamarca ',
		nombre: 'Mónica Sosa Salin',
		imagen: tres,
	},
	{
		_id: 4,
		descripcion: ' | Vivienda instalada en Crespo, Entre Ríos',
		nombre: 'Ofelia Winter',
		imagen: cuatro,
	},
];

export default ContenidoTres;
