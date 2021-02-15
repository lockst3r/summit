import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = props => {
  const [userInfo, setUserInfo] = useState({
    avatar: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(resp => resp.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;
        setUserInfo({
          avatar: avatar_url,
          name: name,
          location: location,
        });
      });
  }, [userId]);

  // callback
  // input: -
  // output: undef, func
  const { avatar, name, location } = userInfo;

  if (!avatar || !name || !location) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
