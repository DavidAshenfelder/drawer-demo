import DrawerComp from "./components/DrawerComp.js"
import TTC, { ttcSubmit } from "./components/TTC.js";
import Details, { detailSubmit } from "./components/Details.js";
import Comments, { commentSubmit } from "./components/Comments.js";
import Combined from "./components/Combined.js";
import Header1 from "./components/Header1.js";
import Header2 from "./components/Header2.js";
import Test from "./components/Test.js";
import ListView from "./components/ListView.js";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { closeChildDrawer, closeParentDrawer, setActiveTab } from "./reducers/drawerSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const App = () => {

  const dispatch = useDispatch();

  const submitAll = (drawerId) => {
  
    commentSubmit();
    detailSubmit();
    
    sendSuccess()

    dispatch(closeChildDrawer(drawerId));
  }

  const submitAllCombinedCommentError = (drawerId) => {
  
    commentSubmit();
    detailSubmit();
 
    sendCommentError();

    dispatch(setActiveTab({ drawerId, activeTab: '2'}));

  }

  const submitAllCombinedDetailError = (drawerId) => {
  
    commentSubmit();
    detailSubmit();
  
    sendDetailError();

    dispatch(setActiveTab({ drawerId, activeTab: '1'}));

  }

  const submitAllCombinedBothError = (drawerId) => {
  
    commentSubmit();
    detailSubmit();
  
    sendCommentError();
    sendDetailError();

    dispatch(setActiveTab({ drawerId, activeTab: '1'}));

  }

  const submitAllCombinedBothSuccess = (drawerId) => {
  
    ttcSubmit();
    commentSubmit();
    detailSubmit();

    dispatch(closeChildDrawer(drawerId));
    dispatch(closeParentDrawer(drawerId));
    sendSuccess()

  }

  const sendCommentError = () => {
    notification.error({
      message: 'Error Saving Comment',
      description:
        'Please try saving your comment again. If the problem persists, please contact support.',
    })
  };


  const sendDetailError = () => {
    notification.error({
      message: 'Error Saving Details',
      description:
        'Please try saving your saving details again. If the problem persists, please contact support.',
    });
  };

  const sendSuccess = () => {
    notification.success({
      message: 'Success',
      description:
        'Saved successfully.',
    });
  }

  return (
    <>
    <div>
      <DrawerComp 
        Header={Header1}
        DetailBody={TTC}
        ListView={ListView}
        buttonTitle='Transactions To Code'
        drawerId={nanoid()}
        submitAll={(drawerId) => { ttcSubmit();  dispatch(closeChildDrawer(drawerId)); sendSuccess();}}
      />
      <DrawerComp
        DetailBody={Details}
        Header={Header2}
        ListView={ListView}
        buttonTitle='Body'
        drawerId={nanoid()}
        submitAll={(drawerId) => { detailSubmit();  dispatch(closeChildDrawer(drawerId)); sendSuccess();}}
      />
      <DrawerComp
        DetailBody={Comments}
        Header={Header2}
        ListView={ListView}
        buttonTitle='Comments'
        drawerId={'comments'}
        submitAll={(drawerId) => { commentSubmit();  dispatch(closeChildDrawer(drawerId)); sendSuccess();}}
      />
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        ListView={ListView}
        buttonTitle='Combined'
        drawerId={'combined'}
        submitAll={submitAll}
      />
    </div>
    <div>
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        ListView={ListView}
        drawerId={'combined-comment-error'}
        buttonTitle='Comment Error'
        submitAll={submitAllCombinedCommentError}
        buttonType='danger'
      />
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        ListView={ListView}
        drawerId={'combined-detail-error'}
        buttonTitle='Body Error'
        submitAll={submitAllCombinedDetailError}
        buttonType='danger'
      />
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        ListView={ListView}
        drawerId={'combined-both-error'}
        buttonTitle='Both Error'
        submitAll={submitAllCombinedBothError}
        buttonType='danger'
      />
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        ListView={ListView}
        drawerId={'combined-both-success'}
        buttonTitle='Both Success'
        submitAll={submitAllCombinedBothSuccess}
        buttonType='primary'
      />
      <DrawerComp
        DetailBody={Test}
        Header={Header2}
        ListView={ListView}
        drawerId={'combined-test'}
        buttonTitle='Test'
        submitAll={submitAllCombinedBothSuccess}
        buttonType='primary'
      />
      <DrawerComp
        DetailBody={Combined}
        Header={Header2}
        drawerId={'single-layer'}
        buttonTitle='Single Layer'
        submitAll={submitAllCombinedBothSuccess}
        buttonType='primary'
      />
      <DrawerComp
        DetailBody={ListView}
        Header={Header2}
        drawerId={'hide-footer'}
        buttonTitle='Hide Footer'
        submitAll={submitAllCombinedBothSuccess}
        buttonType='primary'
        showFooter={false}
      />
    </div>
 
    </>
  )
};

export default App;
