const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv')
const axios = require('axios')

const app = express()

const url =
	'https://9febd931-1487-45cd-bdff-e98b0ec787fe-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token =
	'AstraCS:BIBJwHKpqzZTGqncSSseepNA:a3fb07b70d55cc3fea64fe747f51b7cfc8658660aee2c5f5659322035815f6dc'
app.post('/tickets', async (req, res) => {
	const formData = req.body.formData

	const options = {
		method: 'POST',
		headers: {
			Accepts: 'application/json',
			'X-Cassandra-Token': token,
			'Content-Type': 'application/json',
		},
		data: formData,
	}

	try {
		const response = await axios(url, options)
		res.status(201).json(response.data)
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err })
	}
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
