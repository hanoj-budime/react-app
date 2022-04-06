import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// const url = "https://api.github.com/users";
const url = "https://reqres.in/api/users";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.data);
    return users.data;
  };
  /**
   * useEffect -> useEffect(() => {}, []);
   * initialize only once, when this component render
   */
  useEffect(() => {
    /**
     * calling, get followers data
     */
    getUsers();
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-5 pt-5">
          <div className="d-flex justify-content-center flex-wrap">
            {users.map((user) => {
              // const {id, login, avatar_url, url, followers, following} = user;
              const { id, first_name, avatar } = user;
              return (
                <div
                  key={id}
                  className="card userCard my-3 rounded"
                  style={{ width: "14rem", marginRight: "1rem" }}
                >
                  <div className="d-flex p-3">
                    <div className="" style={{ marginRight: "1rem" }}>
                      <img
                        src={avatar}
                        alt=""
                        width="60"
                        height="60"
                        style={{ borderRadius: "60px" }}
                      />
                    </div>
                    <div>
                      <h5 className="text-capitalize mb-1">{first_name}</h5>
                      <Link
                        to={`/${id}`}
                        className="text-decoration-none text-muted"
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
