import React from 'react'
import styles from '../styles/Event.module.css'


const Event = () => {
	return (
        <div className={styles.grid}>
            <p>Hallo</p>
            <div className={styles.home}>
                <h1>Ask Anything about Catur</h1>
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-uin-sunan-gunung-djati-bandung-presents-ask-anything-about-gdsc/"> 
                    <u> <b>Institut Teknologi Bandung</b></u> 
                </a><br />
                <button className={styles.BtnCyr}>
                    Instagram
                </button>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem doloribus quas aliquam, delectus voluptatibus, corporis excepturi illum consectetur voluptates alias dolore! Magni ducimus hic, repudiandae voluptatibus nemo maxime quo!</p>
                <button className={styles.BtnRnd}>
                    Instagram
                </button>

            </div>

            <div className={styles.join}>
                <button className={styles.BtnJoin}>
                    Join Kuy!
                </button>
            </div>

            <div className={styles.about}>
                <h1>About This Event</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quia expedita quidem labore facilis natus iusto provident, modi numquam quasi animi hic, unde adipisci repudiandae nihil corporis cumque. Officiis, obcaecati!</p>
            </div>

            <div className={styles.bio}>
                <h1>Speaker</h1>
                <img className={styles.fotobio} src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="gambar" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aspernatur repudiandae accusantium minus saepe recusandae aut magni, qui numquam culpa natus consequatur harum! Numquam et quidem totam veritatis dolore dolorem.</p>
            </div>

            <div className={styles.time}>
                <div>
                    <img className={styles.logotime} src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="gambar" />
                
                </div>
                <div>
                    <b className={styles.text}>Waktu</b>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur laudantium placeat quas quis omnis, hic ipsum, sequi ipsa, voluptatum ab eaque. A dolore deserunt consectetur repudiandae ipsum accusamus quas.</p>
                </div>
                

            </div>
        </div>
    )
}

export default Event