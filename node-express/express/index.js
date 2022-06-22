const express = require("express");
const PORT = 3000;

const personas = [
    { id: 1, nombre: "Jose", edad: 30 },
    { id: 2, nombre: "Maria", edad: 28 },
    { id: 3, nombre: "Leandro", edad: 23 },
    { id: 4, nombre: "Miguel", edad: 21 },
    { id: 5, nombre: "Analia", edad: 24 },
    { id: 6, nombre: "Natalia", edad: 32 }
];

const app = express();

app.use(express.json());
app.use(logger);

// entry point
app.get("/", (request, response) => {
    response.send("<h1>API Personas</h1>");
});

// GET All
app.get("/api/personas/", (req, res) => {
    res.json(personas);
});

// GET Uno
app.get("/api/personas/:id", (req, res) => {
    const id = parseInt(req.params.id);

    // const persona = personas.filter(p => p.id === id)[0];
    const persona = personas.find(p => p.id === id);

    if (persona) {
        res.json(persona);
        return;
    }

    res.status(404).end();
});

// DELETE
app.delete("/api/personas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = personas.findIndex(p => p.id === id);

    if (index >= 0) {
        personas.splice(index, 1);
        res.status(204).end();
        return;
    }

    res.status(404).end();
});

// POST
app.post("api/personas", (req, res) => {
    const { nombre, edad } = req.body;

    if (nombre && edad) {
        const nuevaPersona = {
            nombre,
            edad,
            id: getId() 
        }

        personas.push(nuevaPersona);
        
        res.status(201).json(nuevaPersona);
        return;
    }

    res.status(400).end();
});

// PUT
app.put("api/personas/:id", (req, res) => {
    
    if (req.body) {
        const id = parseInt(req.params.id);
        const persona = personas.find(per => per.id === id);

        if (persona) {
            for (const key in persona) {
                if (Object.hasOwnProperty.call(persona, key)) {
                    persona[key] = req.body[key];
                }
            }
            res.json(persona);
        } else {
            res.status(404).end();
        }
        return;
    } else {
        res.status(400).end();
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

/** Funciones */
const getId = () => {
    let id;
    if (personas.length > 0) {
        
        id = Math.max(...personas.map(p => p.id));
        // ...personas.map(p => p.id) devuelve un array usando `personas` como base, que contenga los id

        return id + 1;
    }
}

// Middleware personalizado
function logger(req, res, next) {
    
    const { method, path, body } = req;
    console.log(method, path, body);

    next();
}