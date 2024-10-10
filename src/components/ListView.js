import { List, notification } from "antd";
import { openDrawer, closeDrawer } from "../reducers/drawerSlice.js";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import DrawerComp from "./DrawerComp.js";
import TabGroup from './TabGroup.js'

const ListView = ({ children, submitAll, title }) => {
  const dispatch = useDispatch();

  const data = [
    'Thing 1',
    'Thing 2',
    'Thing 3',
  ];

  const secondDrawerId = nanoid();

  return (
    <>
      <DrawerComp
        drawerId={secondDrawerId}
        submitAll={submitAll ? submitAll : () => {}}
        title={title}
      >
      {children}
      </DrawerComp>
      <h1>This is the Header</h1>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={() => dispatch(openDrawer(secondDrawerId))} style={{ cursor: 'pointer'}}>
            {item}
          </List.Item>
        )}
      />
    </>

  );
};

  export default ListView;