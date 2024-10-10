import Comments from "./Comments";
import Details from "./Details";
import { Tabs } from "antd";
import { setActiveTab } from "../reducers/drawerSlice";
import { useDispatch, useSelector } from "react-redux";


const Combined = ({drawerId}) => {

    const drawer = useSelector((state) => state.drawer);    
    const { activeTab } = drawer[drawerId]
    
    const dispatch = useDispatch();


    const tabs = {
        '1': <Details/>,
        '2': (
            <div style={{ maxHeight: '500px', minHeight: '200px', overflow: 'scroll'}}>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                            <Comments/>

            </div>
        )
    }

    const onChange = (e) => {        
        dispatch(setActiveTab({ drawerId, activeTab: e }))
    };

    return(
        <>
            
            <div>
                {tabs[activeTab]}
            </div>
        </>
    )
};

export default Combined;