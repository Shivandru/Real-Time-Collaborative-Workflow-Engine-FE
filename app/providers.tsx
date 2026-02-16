"use client";

import { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../src/store/index";

export default function StoreProvider({ children }: PropsWithChildren) {
  const [store] = useState(() => makeStore());
  return <Provider store={store}>{children}</Provider>;
}
