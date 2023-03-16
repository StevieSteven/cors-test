import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();

app.get("/", (req, res) => {
    res.set({
        // "Access-Control-Allow-Origin": "*"
    });
    res.send(`
    <html>
    <body>
    <h1>
    Test
</h1>
<script>
console.log("script works");
// fetch("http://127.0.0.1:3001/api")
fetch("/api")
</script>
</body>
    </html>
    
    `);
});
app.get("/api", (req, res) => {
    axios.get("http://localhost:3001/api").then(r => {
console.log("response ok")
        res.json({ok: true, content: r.data})
    }).catch(e => {
        console.log("response failed", e)
    })
});
app.listen(3000, () => {
    console.log("server started")
})


const app2 = express();
 // app2.use(cors())
app2.get("/api", (req, res) => {
    res.json({ok: true})
});

app2.listen(3001, () => {
    console.log("server 2 started")
})