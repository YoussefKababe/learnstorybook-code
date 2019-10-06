import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { task } from "./Task.stories";
import TaskList from "./TaskList";

const store = tasks => ({
  getState: () => ({
    tasks
  }),
  subscribe: () => 0,
  dispatch: action("dispatch")
});

const defaultTasks = [
  { ...task, id: "1", title: "Task 1" },
  { ...task, id: "2", title: "Task 2" },
  { ...task, id: "3", title: "Task 3" },
  { ...task, id: "4", title: "Task 4" },
  { ...task, id: "5", title: "Task 5" },
  { ...task, id: "6", title: "Task 6" }
];

const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

storiesOf("TaskList", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .addDecorator((story, context) => {
    switch (context.name) {
      case "default":
        return <Provider store={store(defaultTasks)}>{story()}</Provider>;
      case "withPinnedTasks":
        return <Provider store={store(withPinnedTasks)}>{story()}</Provider>;
      default:
        return <Provider store={store([])}>{story()}</Provider>;
    }
  })
  .add("default", () => <TaskList />)
  .add("withPinnedTasks", () => <TaskList />)
  .add("loading", () => <TaskList loading />)
  .add("empty", () => <TaskList />);

export { defaultTasks, withPinnedTasks };
