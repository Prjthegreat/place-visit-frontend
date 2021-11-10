import React from 'react'
import UserProfile from './UserProfile'

const UserProfilePage = () => {
   const isfollowing=false

    return (
        <div>
            <UserProfile isfollowing={isfollowing} />
        </div>
    )
}

export default UserProfilePage
