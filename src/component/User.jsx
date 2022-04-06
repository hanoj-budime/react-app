import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://reqres.in/api/users";

export const User = () => {
  let { userId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const getUser = async (userId) => {
    const response = await fetch(`${url}/${userId}`);
    const user = await response.json();
    setUser(user);
    setIsLoading(false);
    return user;
  };

  useEffect(() => {
    /**
     * calling, get followers data
     */
    getUser(userId);
  }, [userId]);

  return (
    <div>
      <Container>
        {user && (
          <UserProfile data={user.data} support={user.support}></UserProfile>
        )}
      </Container>
    </div>
  );
};

const UserProfile = (user) => {
  const { id, avatar, first_name, last_name, email } = user.data;
  const { text, url } = user.support;
  return (
    <div className="mt-5 pt-5">
      <div>
        <Link className="btn btn-secondary" to="/">
          Back
        </Link>
      </div>
      <div key={id} className="card userCard my-3 rounded">
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
            <h5 className="text-capitalize mb-1">
              {first_name} {last_name}
            </h5>
            <h6 className="text-capitalize mb-1">{email}</h6>
            <blockquote className="blockquote mt-2">{text}</blockquote>
            <a href={`http://${url}`}>{url}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
