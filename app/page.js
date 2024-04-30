import ThemeChange from "./Components/ThemeChange";
import Title from "./Components/Title";
import TodoList from "./Components/TodoList";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return (
    <main>
      <div className="flex justify-between">
        <Title />
        <ThemeChange />
      </div>
      <TodoList todos={todos} />
    </main>
  );
}
