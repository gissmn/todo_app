"use server";

import mongoose from "mongoose";
import { User, Todo, TodoGroup } from "./collections";

const url = process.env.MONGODB_URL;
export async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("connected to mongodb");
    } catch (e) {
        console.log("error mongodb", e);
    }
}

export async function registerUser(user) {
    console.log("register start", user);
    try {
        await connectDB();

        const newUser = new User({
            email: user.email,
            phone: user.phone,
            password: user.password,
            name: user.name,
            gender: user.gender,
            birthdate: user.birthdate,
        });
        const createdUser = await newUser.save();
        return createdUser;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
