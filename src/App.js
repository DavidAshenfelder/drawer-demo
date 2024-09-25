import DrawerComp from "./components/DrawerComp.js"
import TTC from "./components/TTC.js";
import Detail from "./components/Details.js";
import Comments from "./components/Comments.js";
import Header1 from "./components/Header1.js";
import Header2 from "./components/Header2.js";
import { ttcSubmit } from "./components/TTC.js";
import { commentSubmit } from "./components/Comments.js";
import { detailSubmit } from "./components/Details.js";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { closeChildDrawer } from "./reducers/drawerSlice.js";
import Combined from "./components/Combined.js";

const App = () => {

  const dispatch = useDispatch();

  const submitAll = (drawerType) => {
  
    ttcSubmit();
    commentSubmit();
    detailSubmit();
  
    dispatch(closeChildDrawer(drawerType));
  }


  return (
    <>
      <DrawerComp 
        Detail={TTC}
        Header={Header1}
        buttonTitle='Transactions To Code'
        drawerType={'ttc'}
        submitAll={submitAll}
      />
      <DrawerComp
        Detail={Detail}
        Header={Header2}
        buttonTitle='Detail'
        drawerType={'details'}
        submitAll={submitAll}
      />
      <DrawerComp
        Detail={Comments}
        Header={Header2}
        buttonTitle='Comments'
        drawerType={'comments'}
        submitAll={submitAll}
      />
      <DrawerComp
        Detail={Combined}
        Header={Header2}
        buttonTitle='Combined'
        drawerType={'combined'}
        submitAll={submitAll}
      />
    </>
  )
};

export default App;
