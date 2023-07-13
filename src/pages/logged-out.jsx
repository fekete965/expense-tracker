import { redirect } from "react-router-dom"
import { deleteItem } from "../components/helper"
import { toast } from "react-toastify"


export async function logoutAction() {
    // delete the user 
    deleteItem({ key: 'userName' })
    //redirect 
    toast.success("You are logging out!")
    return redirect('/')
}


const LoggedOut = () => {
    return (
        <div>LoggedOut</div>
    )
}
export default LoggedOut