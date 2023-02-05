
import { useNavigate } from 'react-router'
export const Logout = () => {


    const navigate = useNavigate()


    const handleLogout = () =>
    {
        
       console.log('clicked')
        localStorage.removeItem('token')
        return navigate('/')
        
    }

    return (

       <div  onClick={handleLogout}>
        Logout
       </div>
    );
}