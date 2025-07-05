import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/ui/loading";

export default function Auth() {
	const navigate = useNavigate();
	
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const token = searchParams.get("token");
		
		if (token) {
			localStorage.setItem("AT", token);
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