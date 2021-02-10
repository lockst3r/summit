import React, { useState, useEffect } from 'react';

const User = ({ match }) => {
  const [userAvatar, setUserAvatar] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(resp => resp.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;
        setUserAvatar(avatar_url);
        setUserName(name);
        setUserLocation(location);
      });
  };

  useEffect(() => getUserData(match.params.userId), []);

  if (!userAvatar || !userName || !userLocation) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={userAvatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

export default User;
