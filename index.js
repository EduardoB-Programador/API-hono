import { Hono } from "hono";

const app = new Hono()

const data = []

//Cria uma rota do tipo GET para http://localhost:3000/
app.get("/", async c => {
    return c.html("Olá com o hono!")
})

//Cria uma rota do tipo GET para http://localhost:3000/data
app.get("/data", async c => {
    return c.json(data)
})

//Cria uma rota do tipo POST para http://localhost:3000/novo
app.post("/novo", async c => {
    const obj = await c.req.json()
    data.push(obj)
    return c.json({status: "recebido"}, 201)
})

export default app
