import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TaskList from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";

const store = tasks => ({
  getState: () => ({
    tasks
  }),
  subscribe: () => 0,
  dispatch: () => {}
});

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store(withPinnedTasks)}>
      <TaskList />
    </Provider>,
    div
  );

  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
