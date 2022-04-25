import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import CategoriesContext from '../context'

const Ticket = () => {
	const navigate = useNavigate()
	const [newCategory, setNewCategory] = useState(false)

	const [formData, setFormData] = useState({
		status: 'notstarted',
		progress: 0,
		timeStamp: new Date().toISOString(),
	})
	const editMode = false
	const { categories, useCategories } = useContext(CategoriesContext)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!editMode) {
			const response = await axios.post('http://localhost:8000/tickets', {
				formData,
			})
			const success = response.status === 201
			if (success) navigate('/')
		}
	}

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name
		const type = e.target.type

		if (
			!newCategory &&
			name === 'category' &&
			type === 'text' &&
			value.length > 0
		) {
			setNewCategory(true)
		} else if (name === 'category' && type === 'text' && value.length === 0) {
			setNewCategory(false)
		}

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

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
							value={formData.title}
						/>
						<label htmlFor='description'>Description</label>
						<input
							id='description'
							name='description'
							type='text'
							onChange={handleChange}
							required={true}
							value={formData.description}
						/>
						<label htmlFor='new-category'>New Category</label>
						<input
							id='new-category'
							name='category'
							type='text'
							onChange={handleChange}
							required={false}
							value={formData.category}
						/>

						{!newCategory && categories && (
							<>
								<label>Category</label>
								<select
									name='category'
									value={formData.category || categories[0]}
									onChange={handleChange}>
									{categories?.map((category, _index) => (
										<option value={category} key={_index}>
											{category}
										</option>
									))}
								</select>
							</>
						)}

						<label>Priority</label>
						<div className='multiple-input-container'>
							<input
								type='radio'
								id='priority-1'
								name='priority'
								onChange={handleChange}
								value={1}
								checked={formData.priority == 1}
							/>
							<label htmlFor='priority-1'>1</label>

							<input
								type='radio'
								id='priority-1'
								name='priority'
								onChange={handleChange}
								value={2}
								checked={formData.priority == 2}
							/>
							<label htmlFor='priority-3'>2</label>

							<input
								type='radio'
								id='priority-3'
								name='priority'
								onChange={handleChange}
								value={3}
								checked={formData.priority == 3}
							/>
							<label htmlFor='priority-3'>3</label>

							<input
								type='radio'
								id='priority-4'
								name='priority'
								onChange={handleChange}
								value={4}
								checked={formData.priority == 4}
							/>
							<label htmlFor='priority-4'>4</label>

							<input
								type='radio'
								id='priority-5'
								name='priority'
								onChange={handleChange}
								value={5}
								checked={formData.priority == 5}
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

						<input type='submit' id='submit-btn' />
					</section>

					<section>
						<label htmlFor='owner'>Owner</label>

						<input
							id='owner'
							name='owner'
							type='text'
							onChange={handleChange}
							required={true}
							value={formData.owner}
						/>

						<label htmlFor='avatar'>Avatar</label>

						<input
							id='avatar'
							name='avatar'
							type='url'
							onChange={handleChange}
							required={true}
							value={formData.avatar}
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
