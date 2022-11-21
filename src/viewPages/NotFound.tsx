import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="text-center text-9xl font-bold pt-20">404</h1>
      <p className="text-center text-3xl mt-4 mb-5">
        페이지를 찾을 수 없습니다.
      </p>
      <div className="text-center">
        <Link to="/" className="btn btn-primary btn-lg mt-10">
          메인으로
        </Link>
      </div>
    </>
  );
}
