import React, { useRef } from 'react';
import styles from './Editor.module.css';
const Editor = ({ value, changeCode, language }) => {
	const editor = useRef(null);
	const onScroll = (e) => {
		editor.current.scrollTop = e.target.scrollTop;
		editor.current.scrollLeft = e.target.scrollLeft;
	};
	return (
		<div className={styles.wrapper}>
			<textarea
				value={value}
				onScroll={onScroll}
				onChange={changeCode}
				className={styles.input}
				placeholder="Type Your Text..."></textarea>
			<pre ref={editor} className={styles.editor} aria-hidden="true">
				<code className={`language-${language}`}>{`${value}`}</code>
			</pre>
		</div>
	);
};

export default Editor;
