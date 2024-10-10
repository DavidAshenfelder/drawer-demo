import DrawerComp from "./components/DrawerComp.js"
import TTC, { ttcSubmit } from "./components/TTC.js";
import Details, { detailSubmit } from "./components/Details.js";
import Comments, { commentSubmit } from "./components/Comments.js";
import Combined from "./components/Combined.js";
import Test from "./components/Test.js";
import ListView from "./components/ListView.js";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { closeDrawer, setActiveTab,  } from "./reducers/drawerSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import TabGroup from "./components/TabGroup.js";

const App = () => {

  const dispatch = useDispatch();

  const submitAll = (drawerId) => {
  
    commentSubmit();
    detailSubmit();
    
    sendSuccess()

    dispatch(closeDrawer(drawerId));
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

    dispatch(closeDrawer(drawerId));
    dispatch(closeDrawer(drawerId));
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
  const ttcDrawerID = nanoid();
  return (
    <>
    <div>
      <DrawerComp 
        buttonTitle='Transactions To Code'
        drawerId={ttcDrawerID}
        showFooter={false}
      >
        <ListView
          submitAll={(drawerId) => { ttcSubmit();  dispatch(closeDrawer(drawerId)); sendSuccess();}}
          drawerId={ttcDrawerID}
        >
          <TTC/>
        </ListView>
      </DrawerComp>

      <DrawerComp
        buttonTitle='Body'
        drawerId={nanoid()}
        submitAll={(drawerId) => { detailSubmit();  dispatch(closeDrawer(drawerId)); sendSuccess();}}
      >
        <Details/>
      </DrawerComp>

      <DrawerComp
        buttonTitle='Comments'
        drawerId={'comments'}
        submitAll={(drawerId) => { commentSubmit();  dispatch(closeDrawer(drawerId)); sendSuccess();}}
      >
        <Comments/>
      </DrawerComp>

      <DrawerComp
        buttonTitle='Combined'
        drawerId={'combined'}
        submitAll={submitAll}
        title={<TabGroup drawerId={'combined'}/>}
      >
        <Combined drawerId={'combined'}/>
      </DrawerComp>
    </div>
    <div>

      <DrawerComp
        buttonTitle='Comment Error'
        drawerId={'combined-comment-error'}
        submitAll={() => submitAllCombinedCommentError('combined-comment-error')}
        buttonType='danger'
      >
        <ListView
          drawerId={'combined-comment-error'}
          submitAll={() => submitAllCombinedCommentError('combined-comment-error')}
          title={<TabGroup drawerId={'combined-comment-error'}/>}
        >
          <Combined drawerId={'combined-comment-error'}/>
        </ListView>
      </DrawerComp>

      <DrawerComp
        drawerId={'combined-detail-error'}
        buttonTitle='Detail Error'
        submitAll={() => submitAllCombinedDetailError('combined-detail-error')}
        buttonType='danger'
      >
        <ListView
          drawerId={'combined-detail-error'}
          submitAll={() => submitAllCombinedDetailError('combined-detail-error')}
          title={<TabGroup drawerId={'combined-detail-error'}/>}
        >
          <Combined drawerId={'combined-detail-error'}/>
        </ListView>
      </DrawerComp>

      <DrawerComp
        drawerId={'combined-both-error'}
        buttonTitle='Both Error'
        submitAll={() => submitAllCombinedBothError('combined-both-error')}
        buttonType='danger'
      >
        <ListView
          drawerId={'combined-both-error'}
          submitAll={() => submitAllCombinedBothError('combined-both-error')}
          title={<TabGroup drawerId={'combined-both-error'}/>}
        >
          <Combined drawerId={'combined-both-error'}/>
        </ListView>

      </DrawerComp>

      <DrawerComp
        drawerId={'combined-both-success'}
        buttonTitle='Both Success'
        buttonType='primary'
        showFooter={false}
      > 
        <ListView 
          submitAll={submitAllCombinedBothSuccess}
          drawerId={'combined-both-success'}
          title={<TabGroup drawerId={'combined-both-success'}/>}
        >
          <Combined drawerId={'combined-both-success'}/>
        </ListView>
      </DrawerComp>

      <DrawerComp
        drawerId={'combined-test'}
        buttonTitle='Combined Test'
        buttonType='primary'
        showFooter={false}
      > 
        <ListView
          submitAll={submitAllCombinedBothSuccess}
          drawerId={'combined-test'}
        >
          <Test drawerId={'combined-test'}/>
        </ListView>
      </DrawerComp>

      <DrawerComp
        drawerId={'combined-test-1'}
        buttonTitle='Combined Test 1'
        buttonType='primary'
        showFooter={false}
      > 
        <ListView
          submitAll={submitAllCombinedBothSuccess}
          drawerId={'combined-test-1'}
        >
          <Test drawerId={'combined-test-1'}/>
        </ListView>
      </DrawerComp>
    </div>
    </>
  )
};

export default App;
