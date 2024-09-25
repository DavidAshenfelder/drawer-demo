import Comments from "./Comments";
import Details from "./Details";
import { Tabs } from "antd";


const onChange = (key) => {
    console.log(key);
  };

const Combined = () => {
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

    return(
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
};

export default Combined;