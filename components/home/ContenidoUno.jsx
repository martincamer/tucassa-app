import { viviendas } from '@/content/viviendas';
import Image from 'next/image';
import Link from 'next/link';

function ContenidoUno() {
	return (
		<div className="w-[1220px] max-w-full mx-auto px-10 pt-[50px]">
			<div className="flex flex-col justify-center items-center gap-2 mb-10">
				<p className="text-red-500 font-semibold text-2xl">
					PRECIOS INMEJORABLES
				</p>
				<h2 className="text-3xl font-bold text-gray-600">
					Nuestra trayectoria nos avala{' '}
					<span className="text-red-400">¡Consultanos!</span>
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
				{viviendas.tradicionales.map(contenido => (
					<div className="shadow-lg shadow-gray-500 rounded-lg">
						<Image
							className="rounded-t-lg w-[100%]"
							width={'100%'}
							height={400}
							src={contenido.imagen}
						/>
						<div className="bg-gray-100 p-10 rounded-lg flex flex-col gap-3">
							<p className="text-gray-900 font-semibold text-2xl">
								{contenido.nombre}
							</p>
							<p className="text-red-500 font-semibold text-2xl">
								$ {contenido.precio}
							</p>
							<div className="flex flex-col gap-1">
								<p className="text-gray-600 font-semibold">
									- {contenido.dormitorios}
								</p>
								<p className="text-gray-600 font-semibold">
									- {contenido.total}
								</p>
							</div>

							<div className="flex mt-5">
								<Link
									className="font-bold bg-red-500 text-white p-4 rounded-lg w-full text-center"
									href={`/casa/${contenido._id}`}
								>
									Leer mas
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			<div
				className="mt-20 flex items-center justify-center"
				style={{
					backgroundImage:
						'url(https://tucassa.com.ar/wp-content/uploads/2020/07/bg-minimalistas-home-1.jpg?id=1898)',
					height: '400px',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="flex gap-5 flex-col">
					<p className="text-white capitalize bg-red-500 py-4 px-12 text-2xl font-semibold">
						¡Descubrí el estilo minimalista!
					</p>
					<p className="font-normal text-center text-gray-100 text-2xl">
						Viviendas con diseño moderno.
					</p>
					<div className="flex justify-center">
						<a
							className="font-semibold bg-red-500 text-white p-4 rounded-lg text-center text-lg"
							href="#"
						>
							Comprar Ahora
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContenidoUno;
