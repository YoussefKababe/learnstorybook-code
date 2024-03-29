import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Task from "./Task";

const TaskList = ({ loading }) => {
  const tasks = useSelector(state => state.tasks);

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(task => task.state === "TASK_PINNED"),
    ...tasks.filter(task => task.state === "TASK_INBOX"),
    ...tasks.filter(task => task.state === "TASK_ARCHIVED")
  ];

  return (
    <div className="list-tems">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

TaskList.defaultProps = {
  loading: false
};

TaskList.propTypes = {
  loading: PropTypes.bool
};

export default TaskList;
