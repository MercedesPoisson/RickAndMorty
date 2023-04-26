const app = require('../src/app');
const session = require('supertest');
const request = session(app);


const character =  {
    id: 932,
    name: "Mechi",
    species: "Human",
    origin: {
        name: "Earth (c-137)"
    },
    image: "image.jpg",
    gender: "female",
    status: "alive"
}

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'origin', e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');           
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }                            
        })
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/8976j');
            expect(response.statusCode).toBe(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        const access = { access: true};

        it("Responde con un objeto con la propiedad acces en true si la informacion del usurio es valida", async () => {
            const response = await request.get("/rickandmorty/login?email=mercedespoisson@yahoo.com&password=123abc")
            expect(response.body).toEqual(access);
        })

        it("Responde con un objeto con la propiedad acces en false si la informacion del usurio no es valida", async () => {
            const response = await request.get("/rickandmorty/login?email=mercedespoisson@yahoo.com&password=123jkl")
            access.access = false;
            expect(response.body).toEqual(access);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body).toContainEqual(character);
        })
        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 1923;
            character.name = "FT-37a";
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body.length).toBe(2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID enviado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete("/rickandmorty/fav/2");
            expect(response.body.length).toBe(2);
        })
    })
})