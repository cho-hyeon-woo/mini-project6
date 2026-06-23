import { useState } from "react";
import { BookOpen, UserPlus, ArrowLeft } from "lucide-react";

export default function SignupPage({ onSignupSuccess, onGoLogin }) {
  const [name, setName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !loginId.trim() || !password.trim() || !passwordConfirm.trim()) {
      setError("모든 항목을 입력해주세요.");
      return;
    }
    if (loginId.trim().length < 3) {
      setError("아이디는 3자 이상이어야 합니다.");
      return;
    }
    if (password.length < 4) {
      setError("비밀번호는 4자 이상이어야 합니다.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
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
          <h2>회원가입</h2>
          <p>Walking Library와 함께 시작해요</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">이름</label>
            <input
              type="text"
              className="form-input"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">아이디</label>
            <input
              type="text"
              className="form-input"
              placeholder="아이디를 입력하세요 (3자 이상)"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">비밀번호</label>
            <input
              type="password"
              className="form-input"
              placeholder="비밀번호를 입력하세요 (4자 이상)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">비밀번호 확인</label>
            <input
              type="password"
              className={`form-input${passwordConfirm && password !== passwordConfirm ? " form-input--error" : ""}`}
              placeholder="비밀번호를 다시 입력하세요"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {passwordConfirm && password !== passwordConfirm && (
              <p className="form-input-hint">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>

          {error && <p className="error-box">{error}</p>}

          <button type="submit" className="btn-primary" disabled={isLoading}>
            <UserPlus size={17} />
            {isLoading ? "가입 중..." : "회원가입"}
          </button>
        </form>

        <button type="button" className="btn-ghost" onClick={onGoLogin}>
          <ArrowLeft size={15} />
          로그인으로 돌아가기
        </button>
      </div>
    </div>
  );
}