import Screen from "@/flex-ui/components/screen";
import ScreenContextProvider from "@/flex-ui/contexts/screen-context";
import { IScreenSource } from "@/flex-ui/types";

const Login: React.FC<{ screenSource: IScreenSource }> = ({ screenSource }) => {
  return (
    <ScreenContextProvider screenSource={screenSource}>
      <Screen />
    </ScreenContextProvider>
  );
};

export async function getStaticProps() {
  const screenSource: IScreenSource = {
    serverConfig: {
      method: "GET",
      url: "/api/flex/login",
    },
  };

  return {
    props: { screenSource },
  };
}
export default Login;
