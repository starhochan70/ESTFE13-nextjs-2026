"use client";
import { useRouter } from "next/navigation";

export default function Update() {
  console.log("Update Page 작동");
  const router = useRouter();

  return (
    <>
      <h3 style={styles.title}>Update Form</h3>
      <form action="">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="글 제목을 입력해주세요"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea name="message" className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}

const styles = {
  title: {
    color: "green",
  },
};
