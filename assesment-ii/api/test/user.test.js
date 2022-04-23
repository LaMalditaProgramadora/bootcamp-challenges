import axios from "axios";

describe("User Tests", () => {
  const user = {
    email: "jyellow363@gmail.com",
    password: "1234",
  };

  it("Test Usuario ya registrado", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/register",
      user
    );
    expect(result.data.status).toEqual(0);
    expect(result.data.message).toEqual("Usuario ya registrado");
  });

  it("Test Usuario ya registrado", async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/local/login",
      user
    );
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Login exitoso");
  });
});
