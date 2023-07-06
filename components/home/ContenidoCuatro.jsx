const ContenidoCuatro = () => {
	return (
		<section
			style={{
				backgroundImage:
					'url(https://tucassa.com.ar/wp-content/uploads/2019/04/bg-madera-5.jpg?id=442)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '100%',
				width: '100%',
			}}
			className="flex flex-col items-center justify-center p-5"
		>
			<div className="py-10 px-10 flex flex-col gap-5 bg-red-500 w-[60%] max-md:w-full">
				<h3 className="font-bold text-gray-100 text-center text-3xl capitalize max-md:text-2xl">
					¡Trabajamos en todo el país!
				</h3>
				<p className="text-xl text-center text-gray-900 max-md:text-lg">
					Instalamos tu vivienda en cualquier lugar del país en 30 días. <br />
					Tenemos más de 17 años de trayectoria en el rubro y más de 6.000
					viviendas instaladas.
				</p>
				<p className="font-bold text-2xl text-center text-gray-100 max-md:text-lg">
					SOMOS FABRICANTES ¡CONSULTANOS POR TRABAJOS A MEDIDA O CON TUS PROPIOS
					PLANOS!
				</p>
			</div>
		</section>
	);
};

export default ContenidoCuatro;
