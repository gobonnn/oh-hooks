"use client";

import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState<boolean>(false);
  return { state, toggle: () => setState(!state) };
};
export default useToggle;
