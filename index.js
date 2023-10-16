import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gough",
    title: "SunFlowers",
    media: "Oil",
});

await addArt({
    artist: "da Vinci",
    title: "Mona Lisa",
    media: "Oil",
});

await getAllArt();