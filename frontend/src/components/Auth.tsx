import { useAuth0 } from "@auth0/auth0-react";

export const Auth = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <li>
        <button className="auth-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
        </li>
      ) : (
        <li className="auth-container">
          <button className="auth-button" onClick={() => logout()}>
            Logout
          </button>
          <img src={user?.picture} alt="user profile picture" className="user-avatar" />
        </li>
      )}
    </>
  );
};
