import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import ProductsContextProvider from "./context/ProductContext";
import CommentContextProvider from "./context/CommentContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div>
      <CommentContextProvider>
        <ProductsContextProvider>
          <AuthContextProvider>
            <MainRoutes />
          </AuthContextProvider>
        </ProductsContextProvider>
      </CommentContextProvider>
    </div>
  );
}

export default App;
