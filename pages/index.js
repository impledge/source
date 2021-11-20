import "tailwindcss/tailwind.css";
import Registry from '../components/Registry';
import Header from '../components/Header';
import SafeAreaContainer from '../components/Container';
import Meta from '../components/Meta';
import Modal from '../components/Modal';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

export default function Home() {

	return (
		<div>
			<Meta />
			<Header />
			<Modal />
			<Stats />
			<Registry />
			<Footer />
		</div>
	);
}
