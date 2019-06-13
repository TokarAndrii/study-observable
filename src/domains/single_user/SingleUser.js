import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../configs/axiosConf';

const SingleUser = ({ className, id }) => {

    const [user, setSingleUser] = useState({ address: {}, company: {} });

    useEffect(() => {
        axios.get(`${baseUrl}/${id}`)
            .then(resp => {
                return resp.data;
            })
            .then(user => setSingleUser(user));

    }, [id])

    return (
        <div className={className} >
            <h1>{user.firstName} {user.secondName}</h1>
            <img src={user.photo} width="500" alt="user_photo"></img>
            <div className="userDetailsHolder">
                <p><span>ID:</span>{user.id}</p>
                <p><span>Email:</span>{user.email}</p>
                <p><span>Phone:</span>{user.phone}</p>
                <p><span>Website:</span>{user.website}</p>
                <p><span>Company:</span>{user.company.name}</p>
                <p><span>City:</span>{user.address.city}</p>
            </div>
        </div >
    );
};

export default SingleUser;