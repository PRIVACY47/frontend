import {Notifications} from "./notifications" 
import {Logout} from "./logout"


export const Dashboard = () => {

    return (

        <>
        <div>

            <div className="flex p-4  justify-between">
                
                <div className="text-2xl" >
                    Dashboard
                </div>

                <div className="p-2 border rounded ">

                <Logout/>
                </div>
            </div>
            
            <main>

                <div >

                    <h1 className="text-xl" >Add Notifications</h1>
                    <Notifications/>
                </div>
            </main>
          
        </div>
        </>
    );
}