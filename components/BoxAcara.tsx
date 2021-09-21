import React from 'react'
import styles from '../styles/BoxAcara.module.css'
// import img from './img.jpg'

const BoxAcara = () => {
	return (
		<div className={styles.box}>
			
			<img className={styles.gbr} src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="gambar" />					
			<h3 className={styles.text}>Judul</h3>
			<p className={styles.text}>
				Deskripsi: <br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias <br /> quod sed qui, nisi possimus recusandae quasi harum reprehenderit eum pariatur nesciunt aspernatur ab accusamus, veniam est laborum. Culpa, tempora!
			</p>

			<button className={styles.btn}>
				Click me
			</button><br />
						
		</div>
	)
}

export default BoxAcara


