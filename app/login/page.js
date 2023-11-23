import Link from "next/link";

export default function Page() {
    return (
        <form className="flex flex-col items-stretch gap-2">
            <h1 className="text-6xl mb-4 self-center text-blue-300">Login</h1>
            <label className="text-gray-400">Username</label>
            <input className="py-2 px-4 rounded-md" placeholder="username..." />
            <label className="text-gray-400">Password</label>
            <input className="py-2 px-4 rounded-md" placeholder="password..." />
            <Link href={"/todo"} className="bg-blue-500 py-2 px-4 rounded-md">
                Login
            </Link>
            <Link href={"/register"} className="self-end text-blue-700 bg-gray-400 rounded-md py-1 px-2">
                register?
            </Link>
        </form>
    );
}
