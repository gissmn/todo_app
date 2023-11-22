import connectDB from "../lib/db_actions"

export default async function Page() {
    await connectDB();
  return (
    <div>register page</div>
  )
}
