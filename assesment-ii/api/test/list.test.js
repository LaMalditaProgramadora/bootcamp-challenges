import axios from "axios";

describe("List Tests", () => {

  let list2 = {
    givenName: "Lista Prueba 2",
    user: "62635c459da407e9b6b1d9f4",
  };

  const user = {
    email: "jyellow363@gmail.com",
    password: "1234",
  };

  let token;

  beforeAll(async () => {
    const login = await axios.post(
      "http://localhost:3000/auth/local/login",
      user
    );
    token = login.data.data.token;
  });

  it("Test Creación Exitosa", async () => {
    const result = await axios.post("http://localhost:3000/api/favs", list2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    list2._id = result.data.data._id;
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Creación exitosa");
  });

  it("Test Listas encontradas", async () => {
    const result = await axios.get(`http://localhost:3000/api/favs?id=${list2.user}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Listas encontradas");
  });

  it("Test Lista encontrada", async () => {
    const result = await axios.get(`http://localhost:3000/api/favs/${list2._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Lista encontrada");
  });

  it("Test Eliminación exitosa", async () => {
    const result = await axios.delete(`http://localhost:3000/api/favs/${list2._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Eliminación exitosa");
  });
});
