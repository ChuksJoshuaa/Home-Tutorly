import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import Filters from "@/components/Filters";
import ProfileFilters from "@/components/ProfileFilters";
import useFilterHook from "@/components/useFilterHook";
import MyContext from "@/contexts";
import { FiltersProps } from "@/interface";
import { tutorsData } from "@/utils/data";
import { useContext, useEffect } from "react";

const Profiles = () => {
  const { state } = useContext(MyContext);

  const SearchedData = () => {
    const filteredTutors = useFilterHook(
      tutorsData,
      state.selectedFilters as { [key: string]: FiltersProps }
    );
    return filteredTutors.filter((item) =>
      item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    SearchedData();
  }, [state.searchTerm, state.selectedFilters]);

  return (
    <div>
      <ProfileFilters />
      <div>{state.isSidebarOpen && state.hideFilters && <Filters />}</div>

      <div className="rounded-lg bg-white p-5">
        {SearchedData()?.length === 0 ? (
          <div className="text-center text-sm font-bold px-1 text-black">
            No tutor found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {SearchedData()?.map((item) => (
              <div key={item.id} className="flex flex-col">
                <img
                  className="w-full h-72 object-cover border-[3.76px] border-[#F6F6F6] rounded-lg"
                  src={item.img}
                  alt={`${item.name}__${item.id}`}
                />

                <div className="my-2 cursor-pointer flex gap-4 items-center">
                  {item?.isVerified && (
                    <div className="py-1 flex justify-center items-center rounded-full bg-main-bg w-[100px]">
                      <p className="text-sm font-bold px-1 text-black">
                        Verified
                      </p>
                      <VerifiedIcon />
                    </div>
                  )}
                  <div className="py-1 flex justify-center items-center rounded-full bg-main-bg w-[67px]">
                    <p className="text-sm font-bold px-1 text-black">
                      {item.rating}
                    </p>
                    <RatingsIcon />
                  </div>
                </div>
                <div>
                  <h1 className="text-base font-bold text-black py-1">
                    {item.name}
                  </h1>
                  <p className="text-sm font-[300px] text-gray-700">
                    {item.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
