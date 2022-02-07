import { useContext } from "react";
import { ScreenContext } from "@/flex-ui/contexts/screen-context";
import dynamic from "next/dynamic";

const View = dynamic(() => import("@/flex-ui/components/view"));

const Screen = () => {
  const screenContext = useContext(ScreenContext);

  if (!screenContext.screen) {
    return null;
  }

  return (
    <div>
      {screenContext.screen.views.map((view) => (
        <View key={view.id} view={view} />
      ))}
    </div>
  );
};

export default Screen;
