import './Home.css';
import defaultImage from '../stataticFiles/avat.png'
import FileContainer from './fileContainer/FileContainer';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App';
import axios from 'axios';


function Home() {
    const [imageData, setImageData] = useState(null)

    const handleImage = (e) => {
        e.preventDefault();
        setImageData(e.target.files[0]);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = async data => {
        data.preventDefault();
        try {
            const formData = new FormData();
            formData.append('avatar', imageData);

            const res = await axios.patch(`https://guarded-waters-35638.herokuapp.com/api/user/update/${loggedInUser.user.id}`, formData, {
                headers: {'Authorization': `Bearer ${loggedInUser.token}`}});

            if(res.data) {
                toast.success('Update Success! Refreshing page ...')
                setTimeout(() => {
                    window.location.reload();
                }, 3500);
            }
           
        } catch (error) {
            toast.error('Failed to update! try again..')
        }
        
    }

  return (
      <main>
          <ToastContainer position="top-center" autoClose={3000}/>
            <section className="row d-flex align-items-center justify-content-center user-dashBoard">
                <div className="col">
                    {
                        loggedInUser.user.avatar ?
                        <img src={`https://guarded-waters-35638.herokuapp.com/${loggedInUser.user.avatar}`} alt="" className="img-fluid user-img"/>
                        :
                        <img src={defaultImage} alt="" className="img-fluid user-img"/>
                    }
                </div>
                <div className="col user-info">
                    <h6 className="textColor1 fw-bold">{loggedInUser.user.name}</h6>
                    <h6 className="textColor2 fw-bold">{loggedInUser.user.email}</h6>
                    <form onSubmit={onSubmit}>
                        <input type="file" onChange={handleImage} id="image" className="form-control w-50"/>

                        <button type="submit" className="btn btn-primary btn-sm mt-3">Update Profile Image</button>
                    </form>
                </div>
            </section>

            <section>
                <FileContainer />
            </section>
            
        </main>
  );
}

export default Home;
