"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function Controls() {
  const { id } = useParams();
  const router = useRouter();

  const handelDelete = () => {
    if (!window.confirm("정말 삭제할까요?")) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(result => {
        router.push("/");
        router.refresh();
      });
  };

  return (
    <div className="d-flex gap-1">
      <Link className="btn btn-primary" href="/create">
        Create
      </Link>
      {id && (
        <>
          <Link className="btn btn-secondary" href={`/update/${id}`}>
            Update
          </Link>
          <button type="button" className="btn btn-danger" onClick={handelDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
