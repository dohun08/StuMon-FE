import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/loading";
import useAuth from "../../store/auth";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    const { initializeFromToken } = useAuth();

    if (token) {
      // localStorage에 저장
      localStorage.setItem("AT", token);
      initializeFromToken();
      navigate("/main");
    } else {
      alert("로그인에 실패했습니다.");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Loading />
    </div>
  );
}