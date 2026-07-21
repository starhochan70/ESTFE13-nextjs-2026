"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {
  console.log("Update Page 작동");
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
      .then(res => res.json())
      .then(result => {
        setTitle(result.title);
        setMessage(result.message);
      });
  }, [id]);

  return (
    <>
      <h3 style={styles.title}>Update Form</h3>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              message,
            }),
          };
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
            .then(res => res.json())
            .then(result => {
              router.push(`/read/${result.id}`);
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
            placeholder="글 제목을 입력해주세요"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
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
