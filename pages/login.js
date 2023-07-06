import { useState } from 'react';
import Layout from '@/layout/layout';
import Image from 'next/image';
import imagen from '../public/img/home-flia.jpg';
import Link from 'next/link';

function Login() {
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if ([usuario, password].includes('')) {
			setError(true);
		} else {
			setError(false);
			setUsuario('');
			setPassword('');
		}
	};

	return (
		<Layout pagina="Login">
			<div className="w-full h-full max-md:py-20 max-md:px-10">
				<div className="flex items-center max-xl:flex-col max-xl:gap-10">
					<form
						onSubmit={handleSubmit}
						className="w-1/3 h-full max-md:w-full bg-gray-200 p-5 rounded-md mx-auto shadow-md shadow-black/20 space-y-6"
					>
						<div className="flex flex-col gap-2">
							<label className="font-semibold text-gray-600 uppercase text-sm">
								Usuario
							</label>
							<input
								value={usuario}
								onChange={e => setUsuario(e.target.value)}
								className={`${
									error ? 'bg-red-400 placeholder-gray-900' : 'bg-white'
								} p-3 rounded-md`}
								type="text"
								placeholder="Nombre Del Usuario"
							/>
							{error === true && (
								<p className="text-sm text-red-500">Usuario is valid</p>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-semibold text-gray-600 uppercase text-sm">
								Password
							</label>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								className={`${
									error ? 'bg-red-400 placeholder-gray-900' : 'bg-white'
								} p-3 rounded-md`}
								type="password"
								placeholder="Password Del Usuario"
							/>
							{error === true && (
								<p className="text-sm text-red-500">Password is valid</p>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<input
								className="bg-gray-300 text-gray-800 uppercase font-semibold text-sm p-3 rounded-md cursor-pointer"
								type="submit"
								value={'Enviar'}
							/>
						</div>

						<div className="flex justify-between">
							<Link
								className="text-sm text-gray-600"
								href={'#'}
							>
								¿Aun no tienes una cuenta? Registrate ahora.
							</Link>
							<Link
								className="text-sm text-gray-600"
								href={'#'}
							>
								¿Olvide mi password? Recuperarla ahora.
							</Link>
						</div>
					</form>

					<div>
						<Image
							className="w-[900px] h-full max-xl:w-full max-xl:rounded-lg max-xl:shadow-md max-xl:shadow-black/20"
							src={imagen}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Login;
