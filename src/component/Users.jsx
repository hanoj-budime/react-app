import React, { useState, useEffect } from "react";
import moduleName from ''
import { UserFollowers } from './UserFollowers';
const url = "https://api.github.com/users";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    return users;
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="mt-4">
      <div className="d-flex flex-wrap">
          {users.map((user) => {
                const {id, login, avatar_url, html_url, followers_url} = user;
                return (
                    <div key={id} className="card userCard my-3 rounded" style={{"width":"14rem", "marginRight": "1rem"}}>
                        <div className="d-flex p-3">
                            <div className="" style={{"marginRight":"1rem"}}>
                                <img src={avatar_url} alt="" width="60" height="60" style={{"borderRadius":"60px"}} />
                            </div>
                            <div>
                                <h5 className="text-capitalize mb-1">{login}</h5>
                                <a href={html_url} className="text-decoration-none text-muted">Profile</a>
                                <UserFollowers url={followers_url}></UserFollowers>
                            </div>
                        </div>
                    </div>
                )
            })}
      </div>
    </div>
  );
};
