import { useState } from 'react'

const Ticket = () => {
	const [formData, setFormData] = useState({
		status: 'notstarted',
		progress: 0,
		timeStamp: new Date().toISOString(),
	})
	const editMode = false

	const handleSubmit = () => {
		console.log('Submitted')
	}
	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const categories = ['test1', 'test2']

	console.log(formData)

	return (
		<div className='ticket'>
			<h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
			<div className='ticket-container'>
				<form onSubmit={handleSubmit}>
					<section>
						<label htmlFor='title'>Title</label>
						<input
							id='title'
							name='title'
							type='text'
							onChange={handleChange}
							required={true}
							value={FormData.title}
						/>
						<label htmlFor='description'>Description</label>
						<input
							id='description'
							name='description'
							type='text'
							onChange={handleChange}
							required={true}
							value={FormData.description}
						/>
						<label htmlFor='new-category'>New Category</label>
						<input
							id='new-category'
							name='category'
							type='text'
							onChange={handleChange}
							required={true}
							value={FormData.category}
						/>
						<label>Category</label>
						<select
							name='category'
							value={FormData.category}
							onChange={handleChange}>
							{categories?.map((category, _index) => (
								<option value={category} key={_index}>
									{category}
								</option>
							))}
						</select>
						<label>Priority</label>
						<div className='multiple-input-container'>
							<input
								type='radio'
								id='priority-1'
								name='priority'
								onChange={handleChange}
								value={1}
								checked
							/>
							<label htmlFor='priority-1'>1</label>

							<input
								type='radio'
								id='priority-1'
								name='priority'
								onChange={handleChange}
								value={1}
								checked
							/>
							<label htmlFor='priority-3'>2</label>

							<input
								type='radio'
								id='priority-3'
								name='priority'
								onChange={handleChange}
								value={3}
								checked
							/>
							<label htmlFor='priority-3'>3</label>

							<input
								type='radio'
								id='priority-4'
								name='priority'
								onChange={handleChange}
								value={4}
								checked
							/>
							<label htmlFor='priority-4'>4</label>

							<input
								type='radio'
								id='priority-5'
								name='priority'
								onChange={handleChange}
								value={5}
								checked
							/>
							<label htmlFor='priority-5'>5</label>
						</div>

						{editMode && (
							<>
								<input
									type='range'
									id='progress'
									name='progress'
									value={formData.progress}
									min={0}
									max={100}
									onChange={handleChange}
								/>
								<label htmlFor='priority-1'></label>
								<label>Progress Status</label>
								<select
									name='status'
									value={formData.status}
									onChange={handleChange}>
									<option selected={formData.status === 'done'} value='done'>
										Done
									</option>
									<option
										selected={formData.status === 'working on it'}
										value='working on it'>
										Working On It
									</option>
									<option selected={formData.status === 'stuck'} value='stuck'>
										Stuck
									</option>
									<option
										selected={formData.status === 'not started'}
										value='not started'>
										Not Started
									</option>
								</select>
							</>
						)}

						<input type='submit' />
					</section>

					<section>
						<label htmlFor='owner'>Owner</label>

						<input
							id='owner'
							name='owner'
							type='text'
							onChange={handleChange}
							required={true}
							value={FormData.owner}
						/>

						<label htmlFor='avatar'>Avatar</label>

						<input
							id='avatar'
							name='avatar'
							type='url'
							onChange={handleChange}
							required={true}
							value={FormData.avatar}
						/>

						<div className='img-preview'>
							{formData.avatar && <img src={formData.avatar} alt='preview' />}
						</div>
					</section>
				</form>
			</div>
		</div>
	)
}

export default Ticket
