import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Editor } from '../components';
import Prism from 'prismjs';
const Home = () => {
	const ws = useRef(null);
	const [value, setValue] = useState(``);
	useEffect(() => {
		Prism.highlightAll();
	}, [value]);
	useEffect(() => {
		ws.current = new WebSocket('ws://localhost:5000');
		ws.current.onopen = () => {
			console.log('Connected');
		};
		ws.current.onclose = (e) => {
			console.log('Disconnected');
		};
		ws.current.onmessage = (e) => {
			setValue(e.data.toString());
		};
		ws.current.onerror = (error) => {
			console.log(error.message);
		};
		return () => {
			ws.current.close();
		};
	}, []);
	const changeCode = (e) => {
		const text = e.target.value;
		ws.current.send(text.toString());
		setValue(`${text}`);
	};
	return (
		<>
			<Head>
				<title>Realtime Editor</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Editor value={value} changeCode={changeCode} language="javascript" />
		</>
	);
};
export default Home;
