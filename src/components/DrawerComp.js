import React, { useEffect }from 'react';
import { Button, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { 
  openParentDrawer,
  closeParentDrawer,
  openChildDrawer,
  closeChildDrawer,
  setInitialState
} from '../reducers/drawerSlice';

const DrawerComp = ({
  Header,
  ListView,
  DetailBody,
  submitAll,
  buttonTitle,
  drawerId,
  buttonType
}) => {

  useEffect(() => {
    dispatch(setInitialState(drawerId))
  }, [drawerId]);

  const drawer = useSelector((state) => state.drawer);
  
  const drawerObj = drawer[drawerId] || {};
    
  const { parentDrawerOpen = false, childDrawerOpen = false, activeTab = '1' } = drawerObj;

  const dispatch = useDispatch()

  const Footer = () => (<Button color={buttonType || 'primary'} variant="solid" onClick={() => submitAll(drawerId)} >Submit and Close</Button>)
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px'}}>
      <Button color={buttonType || 'primary'} variant="solid" onClick={() => dispatch(openParentDrawer(drawerId))}  >
        {buttonTitle || 'Click to open'}
      </Button>
      <Drawer 
        title={ "List View"}
        width={520}
        closable={true}
        onClose={() => dispatch(closeParentDrawer(drawerId))} 
        open={parentDrawerOpen}
        push={{distance: '60'}}
        destroyOnClose={true}
      >
        { ListView &&
          <ListView onClick={() => dispatch(openChildDrawer(drawerId)) } />
        }

        <Drawer
          title="Two-level Drawer"
          
          width={480}
          closable={true}
          onClose={() => dispatch(closeChildDrawer(drawerId))}
          open={childDrawerOpen}
          footer={<Footer/>}
          destroyOnClose={true}

        >
          <DetailBody activeTab={activeTab} drawerId={drawerId} buttonType={buttonType} />
        </Drawer>
      </Drawer>
    </div>
  );
};

export default DrawerComp;