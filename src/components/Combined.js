import Comments from "./Comments";
import Details from "./Details";
import { Tabs } from "antd";
import { setActiveTab } from "../reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";


const Combined = ({drawerId}) => {
    
    const drawer = useSelector((state) => state.drawer);    
    const { activeTab } = drawer[drawerId]
    
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
            <Tabs activeKey={activeTab} items={items} onChange={onChange} />
        </>
    )
};

export default Combined;