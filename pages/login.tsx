// pages/login.tsx
import { googleLogin, facebookLogin } from "../lib/auth";

export default function LoginPage() {
  const handleGoogle = async () => {
    try {
      const user = await googleLogin();
      console.log("Google login success:", user);
      // → 여기서 register 페이지로 이동 or 사용자 등록 여부 확인
    } catch (e) {
      alert("로그인 실패");
    }
  };

  const handleFacebook = async () => {
    try {
      const user = await facebookLogin();
      console.log("Facebook login success:", user);
      // → 여기서 register 페이지로 이동 or 사용자 등록 여부 확인
    } catch (e) {
      alert("로그인 실패");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>로그인</h2>
      <button onClick={handleGoogle}>구글 로그인</button>
      <br />
      <button onClick={handleFacebook}>페이스북 로그인</button>
    </div>
  );
}
