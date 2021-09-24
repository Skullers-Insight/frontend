import React from 'react'
<<<<<<< HEAD
import NavBar from "../components/NavBarProfile"


const test = () => {
=======
import { useSession, signIn, signOut } from "next-auth/client"

const test = () => {
	const [session, loading] = useSession()
	if (session) {
		return (
			<>
				Signed in as {(session as any).user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
>>>>>>> a350f4da3c92d2cdb7c6a0ead8ef785c2d304570
	return (
		<>
		<NavBar/>
		</>
	)
}

export default test
