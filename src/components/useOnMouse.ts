import { useCallback, useMemo, useState } from "react";

const useOnMouse = () => {
  const [isHovered, setIsHovered] = useState({ hover: false, index: -1 });

  const mouseClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const elem = event.currentTarget;
      const key = Number(elem.getAttribute("data-key"));
      setIsHovered({ hover: true, index: key });
    },
    []
  );

  const memoizedListeners = useMemo(
    () => ({
      onMouseOver(
        event: React.MouseEvent<HTMLElement>
      ) {
        const elem = event.currentTarget;
        const key = Number(elem.getAttribute("data-key"));

        setIsHovered({ hover: true, index: key });
      },
      onMouseOut() {
        setIsHovered({ hover: false, index: -1 });
      },
    }),
    []
  );

  return {isHovered, memoizedListeners, mouseClick};
};

export default useOnMouse;
