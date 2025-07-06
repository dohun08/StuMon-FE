import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/loading";
import useAuth from "../../store/auth";

export default function Auth() {
  const navigate = useNavigate();
  const { initializeFromToken } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");

    if (token) {
      // localStorage에 저장
      localStorage.setItem("AT", token);
      initializeFromToken();
      navigate("/main");
    } else {
      alert("로그인에 실패했습니다.");
      navigate("/");
    }
  }, [initializeFromToken, navigate]);

  return (
    <div>
      <Loading />
    </div>
  );
}