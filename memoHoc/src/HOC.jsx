import { useEffect, useRef } from "react";

const withRenderTracker = (WrappComp) => {
  return (props) => {
    const countRender = useRef(0);
    countRender.current += 1;

    useEffect(() => {
      console.log(
        `Компонент ${WrappComp.type.name} рендерился ${countRender.current} раз`,
      );
    });

    return <WrappComp {...props} />;
  };
};

export default withRenderTracker;
