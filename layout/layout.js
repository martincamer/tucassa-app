import Footer from '@/components/ui/footer';
import Nav from '@/components/ui/navbar';
import Head from 'next/head';

function Layout({ children, pagina }) {
	return (
		<>
			<Head>
				<title>{`Tu Cassa - ${pagina}`}</title>
			</Head>
			<main>
				<Nav />
				{children}
				<Footer />
			</main>
		</>
	);
}

export default Layout;
