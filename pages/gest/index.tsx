import { useEffect, useState } from "react";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Gest: NextPageWithLayout = () => {

    // const [loading,setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     },3000)
    // },[])

    // if(loading) return <div>loading...</div>

    return (
        <div>
            <h2>User Gest</h2>
        </div>
    )
}

Gest.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>
export default Gest;