import React from 'react';
import { ThemeProvider } from 'ui-forest';
import styles from './Layout.module.css';

const Layout = (props) => {
	const { children } = props;
	return (
		<ThemeProvider>
			<div className={styles.layout}>{children}</div>
		</ThemeProvider>
	);
};

export default Layout;
