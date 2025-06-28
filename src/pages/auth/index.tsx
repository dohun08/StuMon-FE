import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/loading";

export default function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const accessTokenCookie = cookies.find((c) =>
      c.startsWith("access_token=")
    );
    if (accessTokenCookie) {
      const accessToken = accessTokenCookie.split("=")[1];
      if (accessToken) {
        localStorage.setItem("AT", accessToken);
        navigate("/main");
        return;
      }
    }
    else{
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