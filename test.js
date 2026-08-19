const axios = require("axios");
const key = "$2a$10$WLjUD.aJlcjuSSdEOByujetqwwhUeTTfS2AsFhIOq31vLq./E1nRO";

async function test() {
  try {
    const res = await axios.get("https://api.curseforge.com/v1/mods/search?gameId=432&classId=6&sortField=2&sortOrder=desc&gameVersion=1.21&modLoaderType=6&index=0&pageSize=5", { headers: { "x-api-key": key } });
    console.log("NeoForge (6):", res.data.data.map(m => m.name));

    const res2 = await axios.get("https://api.curseforge.com/v1/mods/search?gameId=432&classId=6&sortField=2&sortOrder=desc&gameVersion=1.21&modLoaderType=1&index=0&pageSize=5", { headers: { "x-api-key": key } });
    console.log("Forge (1):", res2.data.data.map(m => m.name));

    const res3 = await axios.get("https://api.curseforge.com/v1/mods/search?gameId=432&classId=6&sortField=2&sortOrder=desc&gameVersion=1.21&index=0&pageSize=5", { headers: { "x-api-key": key } });
    console.log("Any (0):", res3.data.data.map(m => m.name));
  } catch(e) { console.error(e.response ? e.response.data : e.message); }
}
test();
