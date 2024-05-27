import React from "react";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../atoms/Button/Button";
import Spinner from "../../atoms/Spinner/Spinner";
import cookie from "js-cookie";

const LoginForm = () => {
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
    };
    if (!email || !password) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/login`,
        loginData
      );
      if (response.status === 200) {
        setLoading(false);
        cookie.set("jwt_token", response.data.jwt_token);
        cookie.set("user_id", response.data.user_id);
        router.push("/");
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
      <h3>Login</h3>
      <div className={styles.emailWrapper}>
        <p>Email:</p>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className={styles.passwordWrapper}>
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
        label={"login"}
      />
      {isLoading && <Spinner />}
      {isError && <div className={styles.error}>Please fill in all fields</div>}
      {isBadData && (
        <div className={styles.error}>Your provided data is bad</div>
      )}
    </div>
  );
};

export default LoginForm;
