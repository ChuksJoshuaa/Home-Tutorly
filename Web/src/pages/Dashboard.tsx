import Filters from "@/components/Filters";
import Layout from "@/components/Layout";
import Profiles from "@/components/Profiles";
import Searchbar from "@/components/Searchbar";
import MyContext from "@/contexts";
import { useContext } from "react";

const Dashboard = () => {
  const { state } = useContext(MyContext);
  
  return (
    <Layout>
      <div>
        {!state.isSidebarOpen && <Filters />}
      </div>
      <div>
        <Searchbar />
        <Profiles />
      </div>
    </Layout>
  );
};

export default Dashboard;
