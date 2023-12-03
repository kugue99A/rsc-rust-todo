import Link from "next/link";

export default function Calendar() {
  return (
  <>
    <div>
      <h1>This is Calendar</h1>
    </div>
    <div>
      <Link href="/">Go to Home</Link>
      <Link href="/tasks">Go to Tasks</Link>
    </div>
  </>
  )
}
