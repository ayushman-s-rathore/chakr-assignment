import "./App.css";
import Sidebar from "./sidebar";
import Revenues from "./revenues";
import Lostdeals from "./lostdeals";
import Goal from "./goal";
import Customers from "./customers";
import Growth from "./components/growth";
import Month from "./month";
import Year from "./year";
import Buyer from "./components/buyer";
import States from "./states";
import Deals from "./deals";
import Chats from "./chats";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="dashboard">
        <div className="layer1">
          <Revenues />
          <Lostdeals />
          <Goal />
        </div>
        <div className="layer2">
          <Customers />
          <div className="layer2-1">
            <Growth />
            <div className="layer2-2">
              <Month />
              <Year />
              <Buyer />
            </div>
          </div>
        </div>
        <div className="layer3">
          <Chats />
          <States />
          <Deals />
        </div>
      </div>
    </div>
  );
}

export default App;
