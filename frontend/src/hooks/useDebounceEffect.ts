import { DependencyList, useEffect, useState } from "react";

export const useDebouncedEffect = <T extends Function>(
  effect: T,
  deps: DependencyList = [],
  delay = 500
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
};
