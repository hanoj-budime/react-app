import React, {useState, useEffect} from 'react'

export const UserFollowers = (data) => {
    const [followers, setFollowers] = useState(0);
    const getFollowers = async() => {
        const response = await fetch(data.url);
        const followers = await response.json();
        setFollowers(followers ? followers.length : 0);
    }
    useEffect(() => {
        getFollowers()
    },[])
    return (
        <div>
            <span>{followers} followers</span>
        </div>
    )
}
