import { FilterIconFirst, RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import { ADDFILTERS } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { FiltersProps } from "@/interface";
import { filtersData } from "@/utils/data";
import { useContext } from "react";

const Filters = () => {
  const { state, dispatch } = useContext(MyContext);

    const handleFilters = (value: FiltersProps) => {
      dispatch({ type: ADDFILTERS, payload: value });
    }

  return (
    <div className="shadow-lg rounded-lg bg-white">
      <div className="flex justify-between items-center py-10 px-10 mx-5 cursor-pointer">
        <h1 className="text-black font-bold text-lg">Filters</h1>
        <FilterIconFirst />
      </div>

      <div
        className="flex justify-start mx-3 pb-10 px-10 flex-wrap cursor-pointer"
      >
        {filtersData?.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`py-2 px-5 flex justify-start items-center rounded-full ${
              state.selectedFilters &&
              state.selectedFilters[item.id]?.id === item.id
                ? "bg-gray-900"
                : "bg-main-bg"
            } my-2 mx-2`}
            onClick={() => handleFilters(item as FiltersProps)}
          >
            <p
              className={`text-sm font-bold px-1 ${
                state.selectedFilters &&
                state.selectedFilters[item.id]?.id === item.id
                  ? "text-white"
                  : "text-black"
              } `}
            >
              {item.name}
            </p>
            {item?.isVerified && <VerifiedIcon />}
            {item?.isRating && <RatingsIcon />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
