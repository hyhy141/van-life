import React, { useState } from "react";
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

const Login = () => {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <section className="login">
      <h1>Sign in to your account</h1>
      {message && <h3>{message}</h3>}
      {errorMessage && (
        <h3 style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</h3>
      )}

      <Form method="post" replace className="login_form">
        <input type="text" name="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <h3>
        Don’t have an account? <a href="">Create one now</a>
      </h3>
    </section>
  );
};

export default Login;
