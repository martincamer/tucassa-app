import { Navbar, Link, Container, Button } from '@nextui-org/react';
import Image from 'next/image';
import logo from '../../public/img/logo-tucassa-1.png';

function Nav() {
	const collapseItems = ['viviendas', 'cabañas', 'contacto', 'login'];

	return (
		<Container css={{ maxW: '100%', width: '100%', shadow: '$xs', padding: 0 }}>
			<div className="md:block hidden bg-gray-100 p-2">
				<ul className="flex gap-3 justify-end mr-9">
					<li className="text-red-900 font-bold">info@tucasa.com.ar</li>
					<li className="text-red-900 font-bold">(0351) 471212</li>
				</ul>
			</div>
			<Navbar
				variant="sticky"
				css={{
					shadow: 'none',
				}}
			>
				<Navbar.Toggle showIn="xs" />
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}
				>
					<Link
						href="/"
						color="inherit"
						hideIn="xs"
					>
						<Image
							src={logo}
							width={120}
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Content hideIn={'xs'}>
					<Navbar.Link
						className="hover:bg-red-500 hover:text-white rounded-md duration-150 transiton-all p-2"
						href="/viviendas"
					>
						Viviendas
					</Navbar.Link>
					<Navbar.Link
						className="hover:bg-red-500 hover:text-white rounded-md duration-150 transiton-all p-2"
						href="/cabanas"
					>
						Cabañas
					</Navbar.Link>
					<Navbar.Link
						className="hover:bg-red-500 hover:text-white rounded-md duration-150 transiton-all p-2"
						href="/contacto"
					>
						Contacto
					</Navbar.Link>
				</Navbar.Content>

				<Navbar.Content hideIn={'xs'}>
					<Navbar.Link
						className="bg-red-400 p-3 rounded-full text-white"
						href="/contacto"
					>
						Contactanos
					</Navbar.Link>
					<Navbar.Link
						className="bg-red-400 p-3 rounded-full text-white"
						href="/login"
					>
						Login/Registro
					</Navbar.Link>
				</Navbar.Content>

				<Navbar.Collapse
					as={'div'}
					className="bg-gray-100 p-0 m-0 overflow-hidden list-none"
				>
					{collapseItems.map(item => (
						<Navbar.CollapseItem key={item}>
							<Link
								className="text-gray-800 font-bold text-2xl uppercase hover:text-red-400 transition-all duration-300"
								href={item}
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default Nav;
