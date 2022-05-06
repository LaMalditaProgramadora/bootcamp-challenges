import axios from "axios";

describe("List Tests", () => {
  const list1 = {
    _id: "626374b23a5c8d6f2b3cfa05",
    givenName: "Lista Prueba 2",
    user: "62635c459da407e9b6b1d9f4",
  };

  const user = {
    email: "jyellow363@gmail.com",
    password: "1234",
  };

  let fav = {
    title: "Fav 1",
    description: "description 1",
    link: "google.com",
    list: list1._id,
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
    const result = await axios.post(
      "http://localhost:3000/api/favs/addFav",
      fav,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fav._id = result.data.data._id;
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Creación exitosa");
  });

  it("Test Lista encontrada", async () => {
    const result = await axios.get(
      `http://localhost:3000/api/favs/listById/${fav._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Fav encontrado");
  });

  it("Test Eliminación exitosa", async () => {
    const result = await axios.delete(
      `http://localhost:3000/api/favs/deleteFav/${fav._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(result.data.status).toEqual(1);
    expect(result.data.message).toEqual("Eliminación exitosa");
  });

  it("Test Error en el servidor - Listar", async () => {
    const result = await axios.get(
      `http://localhost:3000/api/favs/listById/undefined`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(result.data.status).toEqual(-1);
    expect(result.data.message).toEqual("Error en el servidor");
  });

  it("Test Error en el servidor - Eliminación", async () => {
    const result = await axios.delete(
      `http://localhost:3000/api/favs/deleteFav/undefined`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(result.data.status).toEqual(-1);
    expect(result.data.message).toEqual("Error en el servidor");
  });
});
