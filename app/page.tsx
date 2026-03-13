'use client';

import { useAuth } from "../components/auth-context";
import { Home } from "../components/home";
import Login from "../components/login";

export default function Page() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Home /> : <Login />;
}
