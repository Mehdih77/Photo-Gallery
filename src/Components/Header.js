import React from 'react';
import userimg from '../images/user.png';
import useFirestore from '../Hooks/useFirestore';


export default function Header() {

    const {docs} = useFirestore('images');

    return (
        <div className='header'>
            <p className='top-title'>MY PHOTO GALLERY</p>
            <div className="profile">
                <img src={userimg} alt="user img" />
                <div className='posts'>
                    <p>{docs.length}</p>
                    <p>Posts</p>
                </div>
                <div className='followers'>
                    <p>10.7K</p>
                    <p>Followers</p>
                </div>
                <div className='followings'>
                    <p>16.4K</p>
                    <p>Followings</p>
                </div>
            </div>
            <button className='profile-btn'>Edit Profile</button>
            <button className='profile-setting-btn'><i className="fas fa-cog"></i></button>
        </div>
    )
}
