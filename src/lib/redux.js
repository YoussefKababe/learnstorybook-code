import { createStore } from "redux";

const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK"
};

const archiveTask = id => ({
  type: actions.ARCHIVE_TASK,
  id
});

const pinTask = id => ({
  type: actions.PIN_TASK,
  id
});

const taskStateReducer = taskState => (state, action) => ({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === action.id ? { ...task, state: taskState } : task
  )
});

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "Learn JavaScript", state: "TASK_INBOX" },
  { id: "2", title: "Learn Node.js", state: "TASK_INBOX" },
  { id: "3", title: "Learn React", state: "TASK_INBOX" },
  { id: "4", title: "Learn React Native", state: "TASK_INBOX" },
  { id: "5", title: "Create a test App", state: "TASK_INBOX" },
  { id: "6", title: "Throw everything away and run", state: "TASK_PINNED" }
];

export { actions, archiveTask, pinTask, reducer };
export default createStore(
  reducer,
  { tasks: defaultTasks },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
