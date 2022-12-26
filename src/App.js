import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: 'Dec 29 at 5.30pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'Shopping',
      date: 'Dec 30 at 7.30pm',
      remainder: true,
    },
    {
      id: 3,
      text: 'Morning Walk',
      date: 'Dec 31 at 5.30am',
      remainder: false,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />
      ) : (
        'No incomplete task'
      )}
    </div>
  );
}

export default App;
