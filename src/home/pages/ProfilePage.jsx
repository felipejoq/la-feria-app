import {LastArticles} from "../../components/commons/galleries/articles/LastArticles.jsx";
import {useParams} from "react-router-dom";

export const ProfilePage = () => {

  const { userId } = useParams();

  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-lg-3'>
          <div className='special-card mb-4 bg-secondary-color-2'>
            Profile ({userId})
          </div>
          <div className='special-card mb-4 bg-secondary-color-2'>
            Last articles profile
          </div>
        </div>
        <div className='col-12 col-sm-12 col-lg-9'>
          <div className='special-card mb-4'>
            <LastArticles />
          </div>
        </div>
      </div>
    </div>
  );
};