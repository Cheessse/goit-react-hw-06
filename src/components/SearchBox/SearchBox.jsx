import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectFilterName } from "../../redux/filtersSlice";
import "../../App.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterName);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <h3 className="gradient-text">Find contacts by name</h3>
      <input
        type="text"
        placeholder="Search by name"
        value={filterName}
        onChange={handleChange}
        className={css.input}
      />
    </>
  );
};

export default SearchBox;
