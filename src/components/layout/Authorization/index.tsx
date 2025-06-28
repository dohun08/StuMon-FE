import { useEffect } from "react";
import useAuth from "../../../store/auth.ts";

export default function AppInitializer() {
  const {initializeFromToken} = useAuth();
  useEffect(() => {
    initializeFromToken();
  }, [initializeFromToken]);

  return <></>;
}