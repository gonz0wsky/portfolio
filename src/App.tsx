import type { FC } from "react";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div>
        <Header />
      </div>
    </div>
  );
};

export default App;
