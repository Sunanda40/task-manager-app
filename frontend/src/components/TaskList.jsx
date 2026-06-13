import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onDelete,
  onEdit
}) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}

export default TaskList;