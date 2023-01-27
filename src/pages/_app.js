import '../styles/Global.css';
import '../styles/prism.css';
import { Layout } from '../components';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
