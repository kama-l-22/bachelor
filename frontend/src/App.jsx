import "./App.scss";
import { useState } from "react";
import Header from "./components/header/header";
import TaskPage from "./components/task/taskPage";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      <Header
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Header>
      <TaskPage></TaskPage>
    </div>
  );
}
