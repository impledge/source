import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
import Registry from "../components/Registry";
// import Header from "../components/Header"; delete once integration complete
import Meta from "../components/Meta";
// import Modal from "../components/Modal"; delete once integration complete
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Modal from '../components/landingModal';

export default function Home() {
  //TODO: redo the header to link to the following page

  return (
    <div>
      <Meta />
		<div className={styles.header}>
			<div className="max-w-7xl pt-2 mx-auto px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className={styles.header_title}>
					<span className="text-white">
						Source<span className="text-white"> Project</span>
					</span>
				</h2>
			</div>
		</div>
		<Modal />
		<Stats />
		<Registry />
      <Footer />
    </div>
  );
}
