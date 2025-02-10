import { useState } from "react"
import Interest from "./Interest"
import Profile from "./Profile"
import Settings from "./Settings"
import { useTheme } from "./ThemeContext"

export default function TabsForm(){
    const [data, setData] = useState(
        {
            name:'John',
            age:32,
            interest:['cycling'],
            email:'',
            theme:'light'
        }
    )
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {title:'Profile',
          component:  Profile
        },
        {title:'Settings',
          component:  Settings
        },
        {title:'Interest',
          component:  Interest
        }
    ]
    const {theme} = useTheme(); 


    const ActiveComponent = tabs[activeTab].component; 
    return (
        <>
        {theme}
        <div className={theme}>
        <header>
            <nav>
                <ul>
                    {tabs.map((tab,i)=><li key={i}> <button onClick={()=>setActiveTab(i)}> {tab.title} </button></li>)}
                </ul>
            </nav>
        </header>
        <main className="main-container">
            <ActiveComponent data={data} setData={setData}/>
        </main>
        <footer>
            {activeTab > 0  && <button onClick={()=>setActiveTab(activeTab-1)}>Prev</button>}
            {activeTab < tabs.length-1 && <button onClick={()=>setActiveTab(activeTab+1)}>Next</button>}
            {activeTab === tabs.length-1 && <button onClick={()=>setActiveTab(activeTab-1)}>Submit</button>}
        </footer>
        </div>
        </>
    )
}
