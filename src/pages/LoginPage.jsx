import { useState } from "react";
import { BookOpen, LogIn, UserPlus } from "lucide-react";

export default function LoginPage({ onLogin, onGoRegister }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginId.trim() || !password.trim()) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    setError("현재 서버 연결이 비활성화되어 있습니다.");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <BookOpen size={26} color="#ffa042" />
          </div>
          <h2>Walking Library</h2>
          <p>책과 산책하는 시간</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">아이디</label>
            <input
              type="text"
              className="form-input"
              placeholder="아이디를 입력하세요"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">비밀번호</label>
            <input
              type="password"
              className="form-input"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-box">{error}</p>}

          <button type="submit" className="btn-primary" disabled={isLoading}>
            <LogIn size={17} />
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className="divider">
          <span>계정이 없으신가요?</span>
        </div>

        <button type="button" className="btn-outline" onClick={onGoRegister}>
          <UserPlus size={17} />
          회원가입
        </button>
      </div>
    </div>
  );
}