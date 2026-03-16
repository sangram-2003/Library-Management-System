import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Login
        </h2>

        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                username
              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
                className="border text-black border-gray-300 shadow p-3 w-full rounded"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border text-black border-gray-300 shadow p-3 w-full rounded"
              />
            </div>

            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;