import { viviendas } from '@/content/viviendas';
import Layout from '@/layout/layout';
import Image from 'next/image';
import Link from 'next/link';

function Cabanas() {
	return (
		<Layout pagina="Viviendas">
			<div
				style={{
					backgroundImage:
						'url(https://tucassa.com.ar/wp-content/uploads/2019/04/banner-minimalistas-1.jpg?id=546)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: '100%',
					width: '100%',
				}}
			>
				<p className="font-bold text-3xl capitalize text-gray-100 text-center py-16">
					Las cabañas más lindas y de mejor calidad para vivienda o turismo
				</p>
			</div>
			<section className="w-[1220px] max-w-full flex flex-col justify-center items-center py-20 px-10 mx-auto">
				<div className="mb-20">
					<div className="mb-8 text-center">
						<p className="text-gray-400 text-xl">
							Un diseño moderno y funcional, a tu alcance. Tené la casa que
							querés.
						</p>
					</div>

					<div>
						<video
							className="rounded-lg"
							preload="auto"
							loop
							poster
							controls
						>
							<source
								src="https://tucassa.com.ar/wp-content/uploads/2021/08/video-hd.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
					{viviendas.cabañas.map(contenido => (
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
			</section>
		</Layout>
	);
}

export default Cabanas;
