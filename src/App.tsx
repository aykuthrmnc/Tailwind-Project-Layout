import { ToastContainer } from "react-toastify";
import Routes from "~/routes/Routes";
import useTheme from "~/hooks/useTheme";

const App = () => {
  const { theme }: any = useTheme();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={5}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        style={{ color: "#edf51f" }}
      />

      <Routes />
    </>
  );
};
export default App;
