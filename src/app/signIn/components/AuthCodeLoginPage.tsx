"use client";
import React, { useEffect } from "react";
import qs from "querystring";

const AuthCodeLoginPage = () => {
  useEffect(() => {
    const OATUH_HOST = "https://github.com/login/oauth/authorize";
    const client_id = process.env.GITHUB_ID;
    const redirect_uri = "http://localhost:3000/signIn/github";
    const response_type = "code";
    const scope = process.env.NEXT_PUBLIC_OAUTH_AUTH_SCOPE;

    const AUTHORIZE_URI = `${OATUH_HOST}?${qs.stringify({
      client_id,
      redirect_uri,
      response_type,
      //   scope,
    })}`;

    window.location.href = AUTHORIZE_URI;
  }, []);

  return <div>loading...</div>;
};

export default AuthCodeLoginPage;
