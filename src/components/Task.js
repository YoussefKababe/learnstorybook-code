import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { archiveTask, pinTask } from "../lib/redux";

const Task = ({ task: { id, title, state }, test }) => {
  const dispatch = useDispatch();

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => dispatch(archiveTask(id))}
        />
      </label>

      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ textOverflow: "ellipsis" }}
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => dispatch(pinTask(id))}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })
};

export default Task;
