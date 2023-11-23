"use server";

import mongoose from "mongoose";
import { User, Todo, TodoGroup } from "./collections";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

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
    await connectDB();
    console.log("register start", user);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    try {
        const password_hash = bcrypt.hashSync(user.password, salt);

        const newUser = new User({
            email: user.email,
            phone: user.phone,
            password: password_hash,
            name: user.name,
            gender: user.gender,
            birthdate: user.birthdate,
        });
        await newUser.save();
        redirect("/todo");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function createTodo(todo) {
    await connectDB();
    try {
        const newTodo = new Todo({
            text: todo.text,
            user_id: todo.user_id,
            update_date: todo.update_date,
            order: todo.order,
            status: false,
            group_id: todo.group_id,
        });

        return newTodo.save();
    } catch (e) {
        console.log(e);
    }
}

export async function getTodoList() {
    await connectDB();
    try {
        return await Todo.find();
    } catch (e) {
        console.log(e);
    }
}

export async function changeStatus(id, status) {
    await connectDB();
    try {
        return await Todo.findByIdAndUpdate(id, { status: status }, { returnDocument: "after" });
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTodo(id) {
    await connectDB();
    try {
        return await Todo.findByIdAndDelete(id);
    } catch (e) {
        console.log(e);
    }
}

export async function editTodo(id, text) {
    await connectDB();
    try {
        return await Todo.findByIdAndUpdate(id, { text: text }, { new: true });
    } catch (e) {
        console.log(e);
    }
}
