import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  //   const login = (userData, tokens) => {
  //     setUser(userData);
  //     setAccessToken(tokens.access_token);
  //     setRefreshToken(tokens.refresh_token);
  //   };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

return (
    <AuthContext.Provider
        value={{
            user,
            accessToken,
            refreshToken,
            // login,
            logout,
        }}
    >
        {children}
    </AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);
