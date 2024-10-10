import React, { useEffect }from 'react';
import { Button, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { 
  openDrawer,
  closeDrawer,
  setInitialState
} from '../reducers/drawerSlice';

const DrawerComp = (props) => {
  const {
    drawerId,
    buttonTitle,
    buttonType,
    showFooter = true,
    submitAll,
    title,
    children
  } = props;

  useEffect(() => {
    dispatch(setInitialState(drawerId))
  }, [drawerId]);

  const drawer = useSelector((state) => state.drawer);  
  
  const drawerObj = drawer[drawerId] || {};
    
  const { drawerOpen = false, activeTab = '1' } = drawerObj;

  const dispatch = useDispatch()

  const Footer = () => {
    var footer = null;
    if (showFooter) {
      footer = <Button color={buttonType || 'primary'} variant="solid" onClick={() => submitAll(drawerId)} >Submit and Close</Button>
    }
    return footer;
  }
  
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px'}}>
      { children &&
        <> 
          { buttonTitle && 
            <Button color={buttonType || 'primary'} variant="solid" onClick={() => dispatch(openDrawer(drawerId))}  >
              {buttonTitle || 'Click to open'}
            </Button>
          }
  
          <Drawer 
            title={ title || "List View"}
            width={520}
            closable={true}
            onClose={() => dispatch(closeDrawer(drawerId))} 
            open={drawerOpen}
            push={{distance: '60'}}
            destroyOnClose={true}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                {children}
              </div>
              {showFooter &&
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                    <Button  color={buttonType || 'primary'} variant="solid" onClick={() => submitAll(drawerId)} >Submit and Close</Button>
                </div>
              }
            </div>

          </Drawer>
        </>
      }
    </div>
  );
};

export default DrawerComp;