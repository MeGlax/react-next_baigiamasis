import React from "react";
import styles from "./RegisterForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../atoms/Button/Button";
import Spinner from "../../atoms/Spinner/Spinner";
import cookie from "js-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const onLogin = async () => {
    console.log(cookie);
    setLoading(true);
    setBadData(false);
    const loginData = {
      email: email,
      password: password,
      name: username,
    };
    if (!email || !password || !username) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/register`,
        loginData
      );
      if (response.status === 201) {
        setLoading(false);
        router.push("/login");
      }
      console.log(response);
    } catch (err) {
      setLoading(false);
      setBadData(true);
      console.log("error'as", err);
    }
  };
  return (
    <div className={styles.main}>
      <h3>Register</h3>
      <div className={styles.usernameWrapper}>
        <p>username:</p>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className={styles.usernameWrapper}>
        <p>email:</p>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className={styles.usernameWrapper}>
        <p>password:</p>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <Button
        onPushed={() => {
          onLogin();
        }}
        label={"Register"}
      />
      {isLoading && <Spinner />}
      {isError && <div className={styles.error}>Please fill in all fields</div>}
      {isBadData && (
        <div className={styles.error}>Please fill in a valid email</div>
      )}
    </div>
  );
};

export default LoginForm;
