import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <h2 className="text-2xl font-semibold mb-24">Welcome main page</h2>
            <Link href={'/login'} className="border py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-800">Login</Link>
        </main>
    );
}
