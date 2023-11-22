import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    gender: { type: String, enum: ["male", "female"], default: "male" },
    birthdate: { type: Date, default: null },
    password: { type: String, required: true },
});

const User = mongoose.models.User || model("User", userSchema);

const todoSchema = new Schema({
    text: { type: String, required: true },
    user_id: { type: String, required: true },
    update_date: { type: Date, default: Date.now },
    order: { type: Number, required: true, default: "" },
    status: { type: Boolean, default: false },
    group_id: { type: String },
});

const Todo = mongoose.models.Todo || model("Todo", todoSchema);

const groupSchema = new Schema({
    title: String,
});

const TodoGroup = mongoose.models.TodoGroup || model("TodoGroup", groupSchema);

export { User, Todo, TodoGroup };
