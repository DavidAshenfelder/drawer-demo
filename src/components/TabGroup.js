import { setActiveTab } from "../reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Radio } from 'antd';

const options = [
  {
    label: 'Detail',
    value: '1',
  },
  {
    label: 'Comment',
    value: '2',
  },
];

const TabGroup = ({drawerId}) => {
    const drawer = useSelector((state) => state.drawer);    
    const { activeTab } = drawer[drawerId]
    
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setActiveTab({ drawerId, activeTab: e.target.value}));
    };

    return (
        <Flex style={{width: '100%'}}vertical gap="middle">
        <Radio.Group
          block
          options={options}
          defaultValue={activeTab}
          value={activeTab}
          optionType="button"
          buttonStyle="solid"
          onChange={onChange}
        />
      </Flex>
    );
}

;
export default TabGroup;