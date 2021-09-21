import { getCsrfToken } from "next-auth/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import styles from '../../styles/Login.module.css'
import { Row } from "react-bootstrap";
import Particles from 'react-particles-js'

export default function SignIn({ csrfToken }) {
	return (
		<Row className={styles.base}>
			<Col xs={8} />
			<Col xs={3} className={styles.formWrapper}>
				<h4> Welcome Back</h4>
				<h2>Login to your account</h2>
				<form className={styles.form} method="post" action="/api/auth/signin/email">
					<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
					<label className={styles.label}>
						<h5>Email address</h5>
						<input className={styles.input} type="email" id="email" name="email" />
					</label>
					<button className={styles.cta} type="submit">Sign in with Email</button>
				</form>
			</Col>
			<div style={{ position: "absolute", height: "100vh", zIndex: "0" }}>
				<Particles
					params={{
						"particles": {
							"number": {
								"value": 160,
								"density": {
									"enable": false
								}
							},
							"size": {
								"value": 3,
								"random": true,
								"anim": {
									"speed": 4,
									"size_min": 0.3
								}
							},
							"line_linked": {
								"enable": false
							},
							"move": {
								"random": true,
								"speed": 1,
								"direction": "top",
								"out_mode": "out"
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "bubble"
								},
								"onclick": {
									"enable": true,
									"mode": "repulse"
								}
							},
							"modes": {
								"bubble": {
									"distance": 250,
									"duration": 2,
									"size": 0,
									"opacity": 0
								},
								"repulse": {
									"distance": 400,
									"duration": 4
								}
							}
						}
					}} />
			</div>
		</Row>
	)
}

export async function getServerSideProps(context) {
	const csrfToken = await getCsrfToken(context)
	return {
		props: { csrfToken },
	}
}
