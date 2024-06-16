import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { TextField, Box } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box mt={8} mb={2}>
      <TextField fullWidth label="Find contacts by name" variant="outlined" value={filter} onChange={handleChange} />
    </Box>
  );
};

export default SearchBox;
