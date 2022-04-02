import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  //====================================
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ3ZjBiMjA4MzczYTM0YjE1ODkyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODczMjk2MiwiZXhwIjoxNjQ5MTY0OTYyfQ.xo9MY4WeBc8tcPVhUulwaC2RqPNWhtvJqAuPD1Dts28",
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
       
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);


  // console.log(userStats);
  //=========================================
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
