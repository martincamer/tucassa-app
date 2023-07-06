import Layout from '@/layout/layout';
import { viviendas } from '@/content/viviendas';
import { useRouter } from 'next/router';
import Image from 'next/image';
import plano from '../../public/img/viviendas/tradicionales/plano.jpg';
import vivienda_minimalista from '../../public/img/viviendas/tradicionales/vivienda.jpg';

function Casa() {
	const params = useRouter();

	return (
		<Layout pagina={`Vivienda ${params.query.id}`}>
			<div className="w-[1220px] max-w-full pt-[60px] pb-[100px] px-10 mx-auto">
				{viviendas.tradicionales.map(vivienda => (
					<div className="h-full w-full">
						{params.query.id == vivienda._id && (
							<div className="flex gap-6 w-full max-md:flex-col-reverse">
								<div className="w-full h-full flex flex-col gap-5">
									<Image
										className="w-[100%] h-[300px]"
										src={vivienda.imagen}
										alt="imagen_"
									/>
									<Image
										className="w-[100%] h-[300px]"
										src={plano}
										alt="imagen_"
									/>
									<Image
										className="w-[100%] h-[300px]"
										src={vivienda_minimalista}
										alt="imagen_"
									/>
								</div>

								<div className="flex flex-col justify-around max-md:justify-center max-md:gap-10">
									<div className="flex flex-col gap-5">
										<div className="flex">
											<p className="font-bold text-3xl bg-red-500 p-5 text-white max-md:text-2xl">
												{vivienda.nombre}
											</p>
										</div>
										<p className="font-semibold text-3xl text-gray-700">
											<span className="text-2xl">Precio cotizado 2023:</span> ${' '}
											{vivienda.precio}
										</p>
									</div>

									<div className="flex flex-col gap-3">
										<p className="text-gray-600 font-semibold text-1xl">
											- {vivienda.dormitorios}
										</p>
										<p className="text-gray-600 font-semibold text-1xl">
											- {vivienda.total}
										</p>
									</div>
									<div className="flex flex-col gap-3">
										<p className="text-red-500 capitalize font-bold text-2xl">
											caracteristicas:
										</p>
										<p className="text-[18px] text-gray-700/80">
											{vivienda.características}
										</p>
									</div>
									<div className="flex flex-col gap-5">
										<p className="text-red-400 font-semibold text-[19px]">
											{vivienda.consulta}
										</p>
										<p className="bg-red-100 p-4 rounded-md border-solid border-[1px] border-red-300 text-gray-600 text-lg">
											{vivienda.msg}
										</p>
									</div>
									<div className="flex">
										<a
											href="#"
											className="bg-red-500 p-4 text-white font-bold rounded-lg text-[18px] hover:bg-red-600 transition-all duration-300"
										>
											Comprar Ahora
										</a>
									</div>
								</div>
							</div>
						)}
					</div>
				))}

				{viviendas.cabañas.map(vivienda => (
					<div className="h-full w-full">
						{params.query.id == vivienda._id && (
							<div className="flex gap-6 w-full max-md:flex-col-reverse">
								<div className="w-full h-full flex flex-col gap-5">
									<Image
										className="w-[100%] h-[300px]"
										src={vivienda.imagen}
										alt="imagen_"
									/>
									<Image
										className="w-[100%] h-[300px]"
										src={plano}
										alt="imagen_"
									/>
									<Image
										className="w-[100%] h-[300px]"
										src={vivienda_minimalista}
										alt="imagen_"
									/>
								</div>

								<div className="flex flex-col justify-around max-md:justify-center max-md:gap-10">
									<div className="flex flex-col gap-5">
										<div className="flex">
											<p className="font-bold text-3xl bg-red-500 p-5 text-white max-md:text-2xl">
												{vivienda.nombre}
											</p>
										</div>
										<p className="font-semibold text-3xl text-gray-700">
											<span className="text-2xl">Precio cotizado 2023:</span> ${' '}
											{vivienda.precio}
										</p>
									</div>

									<div className="flex flex-col gap-3">
										<p className="text-gray-600 font-semibold text-1xl">
											- {vivienda.dormitorios}
										</p>
										<p className="text-gray-600 font-semibold text-1xl">
											- {vivienda.total}
										</p>
									</div>
									<div className="flex flex-col gap-3">
										<p className="text-red-500 capitalize font-bold text-2xl">
											caracteristicas:
										</p>
										<p className="text-[18px] text-gray-700/80">
											{vivienda.características}
										</p>
									</div>
									<div className="flex flex-col gap-5">
										<p className="text-red-400 font-semibold text-[19px]">
											{vivienda.consulta}
										</p>
										<p className="bg-red-100 p-4 rounded-md border-solid border-[1px] border-red-300 text-gray-600 text-lg">
											{vivienda.msg}
										</p>
									</div>
									<div className="flex">
										<a
											href="#"
											className="bg-red-500 p-4 text-white font-bold rounded-lg text-[18px] hover:bg-red-600 transition-all duration-300"
										>
											Comprar Ahora
										</a>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</Layout>
	);
}

export default Casa;
