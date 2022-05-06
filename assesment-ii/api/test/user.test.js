import axios from "axios";

describe("User Tests", () => {
  const user = {
    email: "jyellow363@gmail.com",
    password: "1234",
  };

  const userWrongPassword = {
    email: "jyellow363@gmail.com",
    password: "12345",
  };

  const userWrongUsername = {
    email: "jyellow365@gmail.com",
    password: "1234",
  };

  it("Test Usuario incorrecto", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/login",
      userWrongUsername
    );
    expect(result.data.status).toEqual(0);
    expect(result.data.message).toEqual("Usuario incorrecto");
  });

  it("Test Contraseña incorrecta", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/login",
      userWrongPassword
    );
    expect(result.data.status).toEqual(0);
    expect(result.data.message).toEqual("Contraseña incorrecta");
  });

  it("Test Usuario ya registrado", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/register",
      user
    );
    expect(result.data.status).toEqual(0);
    expect(result.data.message).toEqual("Usuario ya registrado");
  });

  it("Test Login exitoso", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/login",
      user
    );
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Login exitoso");
  });

  it("Test Error en el servidor - Registro", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/register",
      {}
    );
    expect(result.data.status).toEqual(-1);
    expect(result.data.message).toEqual("Error en el servidor");
  });
});
