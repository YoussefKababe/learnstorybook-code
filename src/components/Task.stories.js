import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import Task from "./Task";

const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action("dispatch")
};

const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

storiesOf("Task", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("default", () => <Task task={task} />)
  .add("pinned", () => <Task task={{ ...task, state: "TASK_PINNED" }} />)
  .add("archived", () => <Task task={{ ...task, state: "TASK_ARCHIVED" }} />);

export { task };
