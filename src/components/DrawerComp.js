import React from 'react';
import { Button, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { 
  openParentDrawer,
  closeParentDrawer,
  openChildDrawer,
  closeChildDrawer,
} from '../reducers/drawerSlice';
const DrawerComp = ({
  Header, 
  Detail, 
  submitAll,
  buttonTitle,
  drawerType,
}) => {

  const drawer = useSelector((state) => state.drawer);
  const { parentDrawerOpen, childDrawerOpen } = drawer[drawerType];
  const dispatch = useDispatch()

  const Footer = () => (<Button type='primary' onClick={() => submitAll(drawerType)}>Submit and Close</Button>)

  return (
    <>
      <Button type="primary" onClick={() => dispatch(openParentDrawer(drawerType))}>
        {buttonTitle || 'Click to open'}
      </Button>
      <Drawer 
        title={ "List View"}
        width={520}
        closable={true}
        onClose={() => dispatch(closeParentDrawer(drawerType))} 
        open={parentDrawerOpen}
        push={{distance: '60'}}
        destroyOnClose={true}
      >
        <Button type="primary" onClick={() => dispatch(openChildDrawer(drawerType))}>
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={480}
          closable={true}
          onClose={() => dispatch(closeChildDrawer(drawerType))}
          open={childDrawerOpen}
          footer={<Footer/>}
          destroyOnClose={true}

        >
          <Detail/>
        </Drawer>
      </Drawer>
    </>
  );
};

export default DrawerComp;