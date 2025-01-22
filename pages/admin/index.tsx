import { useEffect, useState } from "react";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Admin: NextPageWithLayout = () => {

    // const [loading,setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     },3000)
    // },[])

    // if(loading) return <div>loading...</div>

    return (
        <div>
            <h2>User Admin</h2>
        </div>
    )
}

Admin.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>
export default Admin;