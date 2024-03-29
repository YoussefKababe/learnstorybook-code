import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import InboxScreen from "./InboxScreen";
import { defaultTasks } from "./TaskList.stories";

const store = {
  getState: () => ({
    tasks: defaultTasks
  }),
  subscribe: () => 0,
  dispatch: action("dispatch")
};

storiesOf("InboxScreen", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("default", () => <InboxScreen />)
  .add("error", () => <InboxScreen error="Something" />);
