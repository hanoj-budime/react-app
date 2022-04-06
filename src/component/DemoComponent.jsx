import React, {useState, useEffect} from 'react'

/**
 * Component
 */
export const DemoComponent = (data) => {
    const [followers, setFollowers] = useState(0);
    const getFollowers = async() => {
        const response = await fetch(data.url);
        const followers = await response.json();
        setFollowers(followers ? followers.length : 0);
    }
    /**
     * useEffect -> useEffect(() => {}, []);
     * initialize only once, when this component is render
     */
    useEffect(() => {
        /**
         * calling, get followers data
         */
        getFollowers();
    },[])
    /**
     * Return Html Template
     */
    return (
        <div>
            <span>{followers} followers</span>
        </div>
    )
}