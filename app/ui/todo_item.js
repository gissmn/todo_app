"use client";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";
import { changeStatus, deleteTodo, editTodo } from "../lib/db_actions";

export default function TodoItem({ todo, setTodoList, todoList }) {
    const [text, setText] = useState(todo.text);
    const [status, setStatus] = useState(todo?.status);
    const [edit, setEdit] = useState(false);
    async function triggerCheck() {
        setStatus(!status);
        await changeStatus(todo._id, !status);
    }
    async function deleteItem() {
        await deleteTodo(todo._id);
        setTodoList((prevTodos) => prevTodos.filter((todoItem) => todoItem._id !== todo._id));
        console.log("deleted:", todo._id);
    }
    async function saveEdit() {
        const editedTodo = await editTodo(todo._id, text);
        setTodoList((prevTodos) => prevTodos.map((todoItem) => (todoItem._id === todo._id ? { ...todoItem, text: text } : todoItem)));
        setEdit(false);
    }
    return (
        <div
            className={clsx(
                `flex gap-4 w-full py-2 px-4 rounded-md justify-between`,
                status ? "bg-blue-400 text-gray-300" : "bg-gray-200 text-gray-900"
            )}
            draggable
            onDragStart={() => {}}
            onDragEnter={() => {}}
            onDragEnd={() => {}}
            onDragOver={() => {}}>
            <input type="checkbox" checked={status} onChange={triggerCheck} />
            {edit ? (
                <input type="text" className="w-full rounded px-2" value={text} onChange={(e) => setText(e.target.value)} />
            ) : (
                <p className={clsx("flex-grow border rounded px-2", status ? "border-gray-200" : "border-blue-500")} onClick={() => setEdit(true)}>
                    {todo.text ?? "todo text 123"}
                </p>
            )}
            <div className="flex items-center gap-2">
                {edit ? (
                    <FaCheck className="hover:text-green-600" onClick={saveEdit} />
                ) : (
                    <FaEdit size={20} onClick={() => setEdit(true)} className="hover:text-white" />
                )}
                <MdDeleteForever size={20} onClick={deleteItem} className="hover:text-red-600" />
            </div>
        </div>
    );
}
