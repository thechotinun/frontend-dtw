/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
