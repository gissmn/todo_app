"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser } from "../lib/db_actions";

export default function Page() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        name: "",
        birthdate: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-2">
            <h1 className="text-6xl mb-4 self-center text-blue-300">Login</h1>
            <label className="text-gray-400">Email</label>
            <input
                className="py-2 px-4 rounded-md"
                name="email"
                placeholder="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label className="text-gray-400">Phone</label>
            <input className="py-2 px-4 rounded-md" name="phone" placeholder="phone" type="tel" value={formData.phone} onChange={handleChange} />
            <label className="text-gray-400">Name</label>
            <input
                className="py-2 px-4 rounded-md"
                name="name"
                placeholder="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label className="text-gray-400">Birthdate</label>
            <input
                className="py-2 px-4 rounded-md"
                type="date"
                name="birthdate"
                placeholder="Birthdate"
                value={formData.birthdate}
                onChange={handleChange}
            />
            <label className="text-gray-400">Password</label>
            <input
                className="py-2 px-4 rounded-md"
                name="password"
                placeholder="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button className="bg-blue-500 py-2 px-4 rounded-md" type="submit">
                Register
            </button>
            <Link href="/login" className="self-end text-blue-700 bg-gray-400 rounded-md py-1 px-2">
                back to login
            </Link>
        </form>
    );
}
