import Layout from '@/layout/layout';
import Carousel from '@/components/home/Carousel';
import ContenidoUno from '@/components/home/ContenidoUno';
import ContenidoDos from '@/components/home/ContenidoDos';
import ContenidoTres from '@/components/home/ContenidoTres';
import ContenidoCuatro from '@/components/home/ContenidoCuatro';

export default function Home() {
	return (
		<Layout pagina="Home">
			<Carousel />
			<ContenidoUno />
			<ContenidoDos />
			<ContenidoTres />
			<ContenidoCuatro />
		</Layout>
	);
}
