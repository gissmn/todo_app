"use client";

import { useEffect, useState } from "react";
import { createTodo, getTodoList } from "../lib/db_actions";
import TodoItem from "../ui/todo_item";
import { SiAddthis } from "react-icons/si";

export default function Page() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    async function create() {
        const createdTodo = await createTodo({
            text: text,
            user_id: "655ea0afa92d3c3d7ea40ddf",
            update_date: Date.now(),
            order: 1,
            status: false,
            group_id: "655ea0afa92d3c3d7ea40ddf",
        });
        console.log(createdTodo);
        if (createdTodo) {
            setText("");
            setTodoList([createdTodo, ...todoList]);
        }
    }
    const getTodos = async () => {
        const todos = await getTodoList();
        if (todos.length > 0) setTodoList(todos);
    };
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <div className="flex-grow w-full bg-blue-500 rounded-md p-4">
            <h1 className="text-center font-bold">To Do-s</h1>
            <div className="flex items-center my-4">
                <input
                    type="text"
                    className="w-full rounded-l-md px-4 py-2"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Type your to do here..."
                />
                <button className="flex items-center bg-green-400 rounded-r-md px-2 gap-2 py-2" onClick={create}>
                    Add
                    <SiAddthis />
                </button>
            </div>
            {/* todo list */}
            <div className="flex flex-col gap-2 w-full">
                {todoList.map((e) => {
                    return <TodoItem key={e._id} todo={e} setTodoList={setTodoList} todoList={todoList} />;
                })}
            </div>
        </div>
    );
}
