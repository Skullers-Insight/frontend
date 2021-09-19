import React from 'react'
import styles from '../styles/BoxAcara.module.css'

const BoxAcara = ({ id, title }) => {
	return (
		<div className={styles.boxAcara}>
			<div>
				<h1>Acara {id}</h1>
				<p>{title}</p>
			</div>
			<button className={styles.cta}>
				Click me
			</button>
		</div>
	)
}

export default BoxAcara

