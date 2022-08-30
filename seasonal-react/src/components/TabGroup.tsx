import { useState } from "react";
import Tab from "./Tab";

interface TabGroupProps {
    className?: string | undefined,
    children: React.ReactElement<typeof Tab> | React.ReactElement<typeof Tab>[]
}

export default function TabGroup({ className, children }: TabGroupProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    let tabs: any[] = children instanceof Array ? children : [children];

    return (
        <div>
            <div className="border-b-2 border-green-700">
                <ul className="container mx-auto px-5 flex flex-row space-x-4">
                    {tabs.map(RenderTab)}
                </ul>
            </div>
            <div>
                <div className="container mx-auto">
                    {tabs.map(RenderPanel)}
                </div>
            </div>
        </div>
    );


    function RenderTab(tab: any, index: number) {
        let isActive = activeTabIndex === index;
        let stateStyle = isActive ? 'border-t-2 border-l-2 border-r-2 bg-white relative top-0.5' : 'border-t border-l border-r hover:bg-green-700 hover:text-white';

        return (
            <li onClick={() => setActiveTabIndex(index)} 
                key={index} 
                className={`border-green-700 px-3 py-3 flex-auto text-center cursor-pointer ${stateStyle}`}>
                <button>{tab.props.label}</button>
            </li>
        );
    }

    function RenderPanel(tab: any, index: number) {
        return (
            <div className={`${activeTabIndex !== index && "hidden"}`}>
                {tab}
            </div>
        );
    }
}