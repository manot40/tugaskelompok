import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";

const defaultCredential = {
  username: "user",
  password: "$2a$10$hX/Z.JBU/ciueixgZQWyGOz6XWDfMZPitnP6A9akWnwYQeBFLsh3K",
};

const TK3CRUDFormLogin = () => {
  const { query } = useRouter();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (query.redirected) toast.info("Harap login terlebih dahulu");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") Router.push("/tk3");
  }, []);

  function login(e) {
    e.preventDefault();
    const compareUname =
      defaultCredential.username != formData.username ? false : true;
    const comparePsswd = bcrypt.compareSync(
      formData.password,
      defaultCredential.password
    );
    if (!comparePsswd || !compareUname) {
      toast.error("Username/Password salah");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      Router.push("/tk3");
    }
  }

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center m-[-3.38rem] max-w-sm">
      <div class="alert alert-info w-full mb-10">
        <div class="flex-1 gap-2">
          <ion-icon
            style={{ fontSize: 24 + "px" }}
            name="information-circle-outline"
          />
          <label>Default Username "user" and Password "user123"</label>
        </div>
      </div>
      <div className="form-control mx-auto font-display">
        <h1 className="mb-8 text-center font-bold text-3xl antialiased tracking-wider">
          LOGIN
        </h1>
        <form onSubmit={(e) => login(e)}>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Username"
            className="input input-bordered w-full mb-4"
            required
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
            className="input input-bordered w-full"
            name="password"
            required
          />
          <button className="btn w-full mt-12" type="submit">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer className="text-sm" theme="colored" />
    </div>
  );
};

export default TK3CRUDFormLogin;
