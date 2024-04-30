"use client";
import { useState, useEffect } from "react";
import CheckboxItem from "./ListItem";

const TodoList = ({ todos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastTodoIndex = currentPage * 10;
  const firstTodoIndex = lastTodoIndex - 10;
  const currentTodos = todos.slice(firstTodoIndex, lastTodoIndex);

  const totalPages = Math.ceil(todos.length / 10);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="p-4">
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <CheckboxItem
              key={todo.id}
              text={todo.title}
              isChecked={todo.completed}
            />
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md 
  ${currentPage === 1 ? "bg-base-300 cursor-not-allowed" : "btn btn-primary"}`}
        >
          Previous
        </button>
        <div className="mt-4 text-center">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md 
  ${
    currentPage === totalPages
      ? "bg-base-300 cursor-not-allowed"
      : "btn btn-primary"
  }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  return {
    props: {
      todos,
    },
  };
}
