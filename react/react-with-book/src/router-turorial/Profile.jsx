import React from 'react';
import {
  useLocation,
  useParams,
  useSearchParams,
} from '../../node_modules/react-router-dom/dist/index';

const data = {
  messi: {
    name: 'Lionel messi',
    description: 'GOAT: Greatest Of All Time',
  },
  son: {
    name: 'Son heung min',
    description: 'Korean Legend Striker',
  },
  park: {
    name: 'Park ji seong',
    description: 'Forever Captain in Korea',
  },
};

const Profile = () => {
  const [searchParams] = useSearchParams();
  const isTrue = searchParams.get('istrue');
  // query에서 istrue라는 키의 value를 반환

  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>There is no {username}</div>;
  }

  return (
    <div>
      <h1>
        {username.toUpperCase()}({profile.name})
      </h1>
      {isTrue === 'true' && <h2>This Page's Query is True</h2>}
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
