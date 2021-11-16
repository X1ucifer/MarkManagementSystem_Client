import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// import UserNav from "../navbars/UserNav";
// import { SyncOutlined } from "@ant-design/icons";
import NextNprogress from 'nextjs-progressbar';


const UserRoute = ({ children }) => {
    // state
    const [ok, setOk] = useState(false);
    // router
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/api/current-user");
            //   console.log(data);
            if (data.ok) setOk(true);
        } catch (err) {
            console.log(err);
            setOk(false);
            router.push("/login");
        }
    };

    return (
        <>
            {!ok ? (
                // <div className="spinner-border"></div>
                //  <div className="loading-bar loading-bar--active"></div>
                <div className="">{children}</div>

            ) : (
                <NextNprogress
                    color="#8acf00"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
                />

            )}
        </>
    );
};

export default UserRoute;
