"use client";
import { useState } from "react";
import { account, ID } from "../appwrite";
import Link from "next/link";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email, password) => {
    const session = await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div className="p-4">
        <p className="text-lg">Logged in as {loggedInUser.name}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="mb-8 text-3xl font-bold">Login</h1>
      <form className="mt-4">
        <input
          className="border rounded-md py-2 px-3 mb-2 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border rounded-md py-2 px-3 mb-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border rounded-md py-2 px-3 mb-2 w-full"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          type="button"
          onClick={() => login(email, password)}
        >
          Login
        </button>
        <Link href="/Questionnaire">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={register}
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
