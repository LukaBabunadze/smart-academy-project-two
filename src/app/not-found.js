import Link from "next/link";

function NotFound() {
  return (
    <div>
      ეს მისამართი ჩვენს ვებ გვერდზე არ არსებობს
      <button>
        <Link href={"/"}>დაბრუნდით მთავარ გვერდზე</Link>
      </button>
    </div>
  );
}

export default NotFound;
