import AuthContextProvider from "./context/AuthContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";

import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter />
        <ToastContainer />
      </BlogContextProvider>
    </AuthContextProvider>
  );
};

export default App;
