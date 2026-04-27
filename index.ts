import { Hono } from "hono";

const app = new Hono()

let data: {}[] = []

app.get("/home", async c => {
    c.header("mensagem-customizada", "Bom dia, boa tarde, boa noite e boa madruga pra você")
    
    return c.html("Boa tarde!")
})

app.get("/informacoes", async c => {
    return c.json(data)
})
// [60 23 31 40 49 10 61 68 90 99]

app.post("/usuario", async c => {
    const obj = await c.req.json()
    data.push(obj)
    return c.json({status: "recebido"}, 201)
})

export default app