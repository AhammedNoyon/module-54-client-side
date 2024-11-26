import { useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  console.log(user);
  const handleUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = {
      name,
      email,
    };
    console.log(users);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUser(...user, data);
        setUser(data);
        console.log(user);

        form.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" name="name" placeholder="name" id="" />
        <br />
        <input type="email" name="email" placeholder="email" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
      {
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
};

export default User;
