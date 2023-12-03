import Link from "next/link";

export default function Tasks() {
  return (
  <>
    <div>
      <h1>This is Tasks</h1>
    </div>
    <div>
      <Link href="/">Go to Home</Link>
      <Link href="/calendar">Go to Calendar</Link>
    </div>
  </>
  )
}
