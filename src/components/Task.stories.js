import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
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

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

storiesOf("Task", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("default", () => <Task task={object("task", { ...task })} />)
  .add("pinned", () => <Task task={{ ...task, state: "TASK_PINNED" }} />)
  .add("archived", () => <Task task={{ ...task, state: "TASK_ARCHIVED" }} />)
  .add("long title", () => <Task task={{ ...task, title: longTitle }} />);

export { task };
