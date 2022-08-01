import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @import layouts
import Layout from "layouts";
// @import pages
import { Farming, Home, Staking } from "pages";
// @import contexts
import EthereumContextProvider from "contexts/EthereumContext";

const App = () => {
  return (
    <>
      <EthereumContextProvider>
        <Suspense>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="staking" element={<Staking />} />
                <Route path="farming" element={<Farming />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </EthereumContextProvider>
      <ToastContainer />
    </>
  );
};

export default App;
