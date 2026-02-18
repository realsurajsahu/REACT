import React from 'react'

function Cards( user ) {
  return (
      <>
      <div className="profile-card">
    <div className="profile-avatar">
      <img src={user.img} alt="User Photo"/>
    </div>

    <h3 className="profile-name">{user.name}</h3>
    <p className="profile-bio">
      {user.bio}
    </p>

    <button className="view-profile-btn">View Profile</button>
  </div>
    </>
  )
}

export default Cards
