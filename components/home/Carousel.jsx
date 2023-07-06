import { Autoplay } from 'swiper/modules';
import { Button, Input, Textarea } from '@nextui-org/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Carousel() {
	return (
		<div className="w-full h-full">
			<Swiper
				className="w-full flex justify-center items-center"
				rewind={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				modules={[Autoplay]}
			>
				{data.carousel.map(card => (
					<SwiperSlide key={card.id}>
						<div
							className="px-20 max-md:px-6"
							style={{
								backgroundImage: `url(${card.imagen})`,
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								height: '100vh',
								maxHeight: '100%',
								width: '100%',
							}}
						>
							<div className="flex justify-center items-center h-full max-md:flex-col max-md:gap-12 max-md:items-stretch">
								<div className="flex-1 max-md:flex-none">
									<p className="bg-red-400/90 text-white p-4 w-[30%] max-md:w-full max-w-[100%] text-center font-semibold text-4xl uppercase">
										{card.nombre}
									</p>
									<p className="text-white/80 bg-black/80 w-[30%] max-md:w-full max-w-[100%] p-4 text-2xl">
										{card.descripcion}
									</p>
								</div>
								<div className="flex-2 mr-20 max-md:mr-0">
									<form className="bg-gray-200/90 shadow-md p-5 rounded-md flex flex-col gap-6">
										<Input
											clearable
											label="Tu Nombre"
											placeholder="Martin Camer"
											className="max-md:w-[100%] w-[400px]"
										/>
										<Input
											clearable
											label="Tu Telefono"
											placeholder="54 34552323"
											className="max-md:w-[100%] w-[400px]"
										/>
										<Input
											clearable
											label="Tu Emmail"
											placeholder="correo@correo.com"
											className="max-md:w-[100%] w-[400px]"
										/>
										<Textarea
											label="Mensaje"
											placeholder="Escribe tu consulta"
											className="max-md:w-[100%] w-[400px]"
										/>
										<Button className="bg-red-500">Enviar</Button>
									</form>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

const data = {
	carousel: [
		{
			id: 1,
			nombre: 'Elige tu Estilo',
			descripcion: 'Viviendas tradicionales americanas o minimalistas',
			imagen: 'https://tucassa.com.ar/wp-content/uploads/2019/04/slide4.jpg',
		},
		{
			id: 2,
			nombre: 'Elige tu Estilo',
			descripcion: 'Viviendas tradicionales americanas o minimalistas',
			imagen: 'https://tucassa.com.ar/wp-content/uploads/2019/04/slide1.jpg',
		},
		{
			id: 3,
			nombre: 'Elige tu Estilo',
			descripcion: 'Viviendas tradicionales americanas o minimalistas',
			imagen: 'https://tucassa.com.ar/wp-content/uploads/2019/04/slide5.jpg',
		},
	],
};

export default Carousel;
