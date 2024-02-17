import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, Button } from "@mui/material";
import Result from "./Result";

export default function SelectVariants() {
  const [method, setMethod] = useState("GET");
  const [input, setInput] = useState("");
  const [info, setInfo] = useState([]);
  const [btn ,setBtn]=useState(false);

  const handleClick = async () => {
    setBtn(true);
    if (input) {
      const res = await fetch(`${input}`);
      const data = await res.json();
      setInfo(data);
      {
        console.log(info);
        
      }
    }
  };

  useEffect(() => {
    handleClick();
  }, [btn]);

 
  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <div className="input mb-5">
        <div className="select">
          <FormControl variant="filled" sx={{ m: 0, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-filled-label">
              HTTP Methods
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={handleChange}
              defaultValue="GET"
            >
              <MenuItem sx={{ color: "green" }} value="GET">
                GET
              </MenuItem>
              <MenuItem sx={{ color: "orange" }} value="POST">
                POST
              </MenuItem>
              <MenuItem sx={{ color: "blue" }} value="PUT">
                PUT
              </MenuItem>
              <MenuItem sx={{ color: "red" }} value="DELETE">
                DELETE
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          sx={{ width: "500px" }}
          id="filled-basic"
          label="Enter URL or paste text"
          variant="filled"
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Send
        </Button>
      </div>
      <div className="w-[725px] h-[1px] mr-3 mb-5 bg-[#0000004d]"></div>
      <Result />
      <div>
        <ul>{btn??info.map((i) => <li key={i.id}>{`${i}`}</li>) }</ul>
      </div>
    </div>
  );
}
