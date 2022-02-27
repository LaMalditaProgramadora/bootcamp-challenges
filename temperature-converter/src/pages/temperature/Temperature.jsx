import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Space from "../../components/space/Space.jsx";
import ThermometerComponent from "../../components/thermometer/ThermometerComponent.jsx";
import {
  convertCelciusToFarenheit,
  convertFarenheitToCelcius,
} from "../../util/converter.js";
import "./Temperature.css";

const Temperature = () => {
  const [convertTo, setConvertTo] = useState("Celcius");
  const [temperature, setTemperature] = useState(0);
  const [result, setResult] = useState({ celcius: 0, farenheit: 0 });

  const convertTemperatureTo = () => {
    if (convertTo === "Celcius") {
      setResult({
        celcius: convertFarenheitToCelcius(temperature),
        farenheit: 0,
      });
    } else {
      setResult({
        celcius: 0,
        farenheit: convertCelciusToFarenheit(temperature),
      });
    }
  };

  const handleChangeConvertTo = (event) => {
    setConvertTo(event.target.value);
  };

  const handleChangeTemperature = (event) => {
    setTemperature(event.target.value);
  };

  useEffect(() => {
    convertTemperatureTo();
    // eslint-disable-next-line
  }, [temperature, convertTo]);

  return (
    <>
      <h2>Súper Convertidor de Temperatura</h2>
      <label>
        Ya sabes, ingresa la temperatura, escoge Celcius o Farenheit y listo
      </label>
      <Space />
      <Grid container justifyContent="center" spacing={0}>
        <Grid item>
          <TextField
            label="Temperatura"
            className="textBox"
            value={temperature}
            autoFocus
            onChange={handleChangeTemperature}
          />
        </Grid>
        <Grid item>
          <FormControl className="textBox">
            <InputLabel>Convertir a</InputLabel>
            <Select
              className="select"
              value={convertTo}
              onChange={handleChangeConvertTo}
              label="Convertir a"
            >
              <MenuItem value="Celcius">Celcius</MenuItem>
              <MenuItem value="Farenheit">Farenheit</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <h2>Resultados</h2>
      <label>
        Izquierda cuando conviertes a Celcius y derecha, cuando conviertes a
        Farenheit
      </label>
      <Space />
      <Grid container justifyContent="center" spacing={0}>
        <Grid item justifyContent="center">
          <TextField
            focused={result.celcius !== 0}
            color="warning"
            label="Celcius"
            className="textBox"
            value={result.celcius}
            InputProps={{
              readOnly: true,
            }}
          />
          <Space />
          <ThermometerComponent result={result.celcius} max="500" format="°C" />
        </Grid>
        <Grid item justifyContent="center">
          <TextField
            focused={result.farenheit !== 0}
            color="warning"
            label="Farenheit"
            className="textBox"
            value={result.farenheit}
            InputProps={{
              readOnly: true,
            }}
          />
          <Space />
          <ThermometerComponent
            result={result.farenheit}
            max="932"
            format="°F"
          />
        </Grid>
      </Grid>
      <Space />
    </>
  );
};

export default Temperature;
