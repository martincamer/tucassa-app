import Layout from '@/layout/layout';
import Image from 'next/image';
import imagen from '../public/img/propiedades/img-contacto-1.jpg';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';

function Contacto() {
	const [nombre, setNombre] = useState('');
	const [telefono, setTelefono] = useState('');
	const [ciudad, setCiudad] = useState('');
	const [email, setEmail] = useState('');
	const [vivienda, setVivienda] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if ([nombre, telefono, ciudad, email, vivienda, mensaje].includes('')) {
			setError(true);
		}
	};
	return (
		<Layout pagina="Contacto">
			<section className="bg-red-500 py-20 px-10">
				<div className="w-[1220px] mx-auto flex justify-around gap-[3rem]">
					<div className="flex flex-col gap-5 w-2/4">
						<h3 className="font-semibold text-gray-100 text-2xl">
							Comunicate Con Nosotros
						</h3>
						<p className="font-[300] text-gray-100">
							Completá el formulario y nos comunicaremos a la brevedad.
							¡Gracias! Tel.: (0351) 4774388 | (0351) 8822169
						</p>
						<Image
							className="rounded-lg"
							src={imagen}
							alt="imagen"
						/>
					</div>

					<form
						onSubmit={handleSubmit}
						className="flex  flex-col gap-8 w-1/2 bg-gray-300 p-4 rounded-lg"
					>
						<div className="flex gap-3 w-full">
							<Input
								clearable
								label="Nombre"
								placeholder="Nombre"
								width="100%"
								status={error === true && 'error'}
								value={nombre}
								onChange={e => setNombre(e.target.value)}
							/>
							<Input
								clearable
								label="Telefono"
								placeholder="Telefono"
								width="100%"
								status={error === true && 'error'}
								value={telefono}
								onChange={e => setTelefono(e.target.value)}
							/>
						</div>
						<div className="flex gap-3 w-full">
							<Input
								status={error === true && 'error'}
								value={email}
								onChange={e => setEmail(e.target.value)}
								clearable
								label="Email"
								placeholder="Email"
								width="100%"
							/>
							<Input
								status={error === true && 'error'}
								value={ciudad}
								onChange={e => setCiudad(e.target.value)}
								clearable
								label="Ciudad"
								placeholder="Ciudad"
								width="100%"
							/>
						</div>
						<div className="flex flex-col gap-3 w-full">
							<label
								className={`${
									error ? 'text-[#f31260]' : 'gray-900'
								} text-[0.90rem]`}
							>
								Vivienda De Interes
							</label>
							<select
								onChange={e => setVivienda(e.target.value)}
								className={`${
									error ? 'bg-[#fdd8e5] ' : 'bg-[#f1f3f5]'
								}  w-full rounded-xl p-3`}
							>
								<option
									className="text-[0.90rem]"
									value={vivienda}
								>
									Seleccionar
								</option>
								<option
									className="text-[0.90rem]"
									value={vivienda}
								>
									Un Dormitorio
								</option>
								<option
									className="text-[0.90rem]"
									value={vivienda}
								>
									Dos Dormitorio
								</option>
								<option
									className="text-[0.90rem]"
									value={vivienda}
								>
									Tres Dormitorio
								</option>
								<option
									className="text-[0.90rem]"
									value={vivienda}
								>
									Cuatro Dormitorio
								</option>
							</select>
						</div>
						<div>
							<Textarea
								clearable
								label="Mensaje"
								placeholder="Mensaje"
								width="100%"
							/>
						</div>
						<div>
							<Button
								type="submit"
								className="bg-red-500 text-base "
							>
								Enviar
							</Button>
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Contacto;
