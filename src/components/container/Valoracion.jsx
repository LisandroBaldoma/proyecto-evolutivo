import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Valoracion = ({ valorarJockes }) => {
  const [value, setValue] = useState(3);

  return (
    <div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Puntuacion Jocke</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        {valorarJockes(value)};
      </Box>
    </div>
  );
};

export default Valoracion;
