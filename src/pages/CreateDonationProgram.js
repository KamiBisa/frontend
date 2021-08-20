import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createDonationProgram} from './../redux/actions/donationProgramActions';

const CreateDonationProgram = () => {
  const [programData, setProgramData] = useState({
    name: '',
    description: '',
    goal: ''
  });
  const [programImage, setProgramImage] = useState('');
  const [programImagePreview, setProgramImagePreview] = useState('');
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);

  const handleChange = e => {
    const {name, value} = e.target;
    setProgramData({...programData, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (auth.user.is_verified === null) {
      alert('FUNDRAISER IS NOT VERIFIED YET.');
      return;
    }
    dispatch(createDonationProgram({
      description: programData.description,
      name: programData.name,
      image: programImage,
      goal: programData.goal
    }))
  }

  const handleChangeImage = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProgramImage(reader.result);
        setProgramImagePreview(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input style={{border: '1px solid #000'}} type="text" id='name' name='name' value={programData.name} onChange={handleChange} />

        <label htmlFor="goal">Goal</label>
        <input style={{border: '1px solid #000'}} type="text" id='goal' name='goal' value={programData.goal} onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea style={{border: '1px solid #000', marginTop: '20px'}} name="description" value={programData.description} onChange={handleChange} id="description" cols="30" rows="10"></textarea>

        <label htmlFor="programImage">Image</label>
        <input type="file" accept="image/*" onChange={handleChangeImage} />
        {
          programImagePreview && (
            <img src={programImagePreview} alt="" />
          )
        }

        <button style={{background: '#ccc'}} type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateDonationProgram;