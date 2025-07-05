import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/loading";

export default function Auth() {
	const navigate = useNavigate();
	
	useEffect(() => {
		// 모든 쿠키 가져오기
		const cookies = document.cookie.split(";").map((c) => c.trim());
		
		// access_token 찾아보기
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
		
		// access_token 없으면 실패 처리
		alert("로그인에 실패했습니다.");
		navigate("/");
	}, [navigate]);
	
	return (
		<div>
			<Loading />
		</div>
	);
}