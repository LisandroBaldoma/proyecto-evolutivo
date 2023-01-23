import { getRandomJokes } from "../services/config/axiosService";
import { useState, useEffect } from "react";
import Valoracion from "../container/Valoracion";
import { Button, Badge } from "@mui/material";
import { ThumbUp, ThumbDown, FiberNew } from "@mui/icons-material";

export default function Jockes() {
  const [jockes, setJockes] = useState([]);
  const [jockesLicked, setJockesLicked] = useState([]);
  const [jockesDontLicked, setJockesDontLicked] = useState([]);
  const [valoracion, setValoracion] = useState();

  useEffect(() => {
    obtenJockes();
  }, [jockesLicked, jockesDontLicked]);

  const obtenJockes = () => {
    getRandomJokes()
      .then((response) => {
        //console.log(response);
        setJockes(response.data);
      })
      .catch((error) => console.log("opps, encontramos un error", { error }));
  };
  const licked = () => {
    const newJockes = {
      jockes: jockes.value,
      valoracion: valoracion,
    };
    if (jockesLicked.lenght === 0) {
      setJockesLicked(newJockes);
    } else {
      setJockesLicked([...jockesLicked, newJockes]);
    }
  };
  function valorarJockes(valor) {
    setValoracion(valor);
  }
  const dontLicked = () => {
    const newJockes = {
      jockes: jockes.value,
      valoracion: valoracion,
    };
    if (jockesDontLicked.lenght === 0) {
      setJockesDontLicked(newJockes);
    } else {
      setJockesDontLicked([...jockesDontLicked, newJockes]);
    }
  };

  console.log(jockesLicked);
  console.log(jockesDontLicked);

  return (
    <div>
      <h2>Jocke</h2>
      <h3>{jockes.value}</h3>
      <Valoracion valorarJockes={valorarJockes}></Valoracion>
      <Button variant="outlined" startIcon={<FiberNew />} onClick={obtenJockes}>
        Jocke
      </Button>
      <Badge color="secondary" badgeContent={jockesLicked.length}>
        <Button
          variant="outlined"
          startIcon={<ThumbUp />}
          onClick={licked}
        ></Button>
      </Badge>

      <Badge color="secondary" badgeContent={jockesDontLicked.length}>
        <Button
          variant="outlined"
          startIcon={<ThumbDown />}
          onClick={dontLicked}
        ></Button>
      </Badge>
    </div>
  );
}
