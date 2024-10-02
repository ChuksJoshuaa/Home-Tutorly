import Filters from "@/components/Filters";
import ProfileFilters from "@/components/ProfileFilters";
import MyContext from "@/contexts";
import { useContext } from "react";

const Profiles = () => {
  const { state } = useContext(MyContext);
  return (
    <div className="mt-2">
      <ProfileFilters />
      <div>{state.isSidebarOpen && state.hideFilters && <Filters />}</div>
    </div>
  );
};

export default Profiles;
