import { useLocation } from "react-router-dom";

const Success = () => {
    

   const { state } = useLocation()
    console.log(state)
    



    return (
        <div>
            successfull
        </div>
    )
}


export default Success
 

