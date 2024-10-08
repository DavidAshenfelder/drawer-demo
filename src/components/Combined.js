import Comments from "./Comments";
import Details from "./Details";
import { Tabs } from "antd";
import { setActiveTab } from "../reducers/drawerSlice";
import { useDispatch } from "react-redux";


const Combined = ({activeTab, drawerId}) => {
    const dispatch = useDispatch();
    const items = [
        {
            key: '1',
            label: 'Details',
            children: <Details/>
        },
        {
            key: '2',
            label: 'Comments',
            children: <Comments/>
        },
    ];

    const onChange = (e) => {        
        dispatch(setActiveTab({ drawerId, activeTab: e }))
    };

    return(
        <>
            <Tabs defaultActiveKey="1" activeKey={activeTab} items={items} onChange={onChange} />
        </>
    )
};

export default Combined;