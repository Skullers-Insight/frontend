import React from 'react'
import BoxAcara from '../components/BoxAcara'

const kurikulum = () => {
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => setData(json))
	}, [])
	return (
		<>
			{data.map(x => <BoxAcara {...x} />)}
		</>
	)
}

export default kurikulum

