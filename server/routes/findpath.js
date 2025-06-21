const express = require('express');
const model = require('../models/map');
const model1 = require('../models/stations');

const app = express(); // you wrote `server()` before; it should be express()
app.use(express.json()); // add this if you're sending JSON in the request body

app.post('/findpath', apicall);

async function apicall(req, res) {
    try {
        const data = req.body;
        const id = "68029f9137b3d3732d699890";

        const mapdata = await model.findOne({ _id: id }).lean(); // ✅ use await
        const stationlist= await model1.find();
        // console.log(stationlist);
        if (!mapdata) {
            return res.status(404).json({ error: "Map data not found" });
        }
        

        dijkstra(data,stationlist,mapdata);
        res.json(stationlist); // send only the 2D array if needed
    } catch (err) {
        console.error("Error in /findpath:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// dijkstra's algorithm


function dijkstra(data, stations, mapp) {
    const patth = [];
    const n = stations.length;
    const distances = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    const previous = Array(n).fill(null);

    // Convert station names to indices
    const startIndex = stations.indexOf(data.source);
    const endIndex = stations.indexOf(data.destination);

    distances[startIndex] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
                u = j;
            }
        }

        if (u === -1 || distances[u] === Infinity) break; // All reachable nodes have been visited
        visited[u] = true;

        for (let v = 0; v < n; v++) {
            if (mapp[u][v] && !visited[v]) {
                const alt = distances[u] + mapp[u][v];
                if (alt < distances[v]) {
                    distances[v] = alt;
                    previous[v] = u; //to track the previous
                }
            }
        }
    }

    // Backtrack to find the path
    let u = endIndex;
    let path = [];
    while (u !== null) {
        path.push(stations[u]);
        u = previous[u];
    }

    // Reverse to get the path from source to destination
    path.reverse();

    // Fill the patth array
    patth.length = 0; // Clear the array
    for (let station of path) {
        patth.push(station);
    }

    return patth;
}


module.exports = app;








//dijkstra


// const express = require('express');
// const station = require('../models/stations');
// const map = require('../models/map');
// const ShortestPath = require('../models/shortestpath'); // Create this model
// const router = express.Router();

// router.get('/shortestpath', async (req, res) => {
//     const { source, destination } = req.query;

//     try {
//         const stations = await station.find();
//         const sourceIndex = stations.findIndex(s => s.stations === source);
//         const destIndex = destination ? stations.findIndex(s => s.stations === destination) : null;

//         if (sourceIndex === -1 || (destination && destIndex === -1)) {
//             return res.status(400).json({ error: 'Invalid station name' });
//         }

//         const mapData = await map.findOne(); // You can use findById if you store by specific ID
//         const matrix = mapData.distancemap;

//         const { dist, prev } = dijkstra(matrix, sourceIndex);

//         if (destination) {
//             const pathIndices = getPath(prev, sourceIndex, destIndex);
//             const pathStations = pathIndices.map(i => stations[i].stations);

//             // Store the result
//             const record = new ShortestPath({
//                 source,
//                 destination,
//                 path: pathStations,
//                 distance: dist[destIndex]
//             });
//             await record.save();

//             return res.json({
//                 distance: dist[destIndex],
//                 path: pathStations
//             });
//         } else {
//             // Return all shortest paths from the source
//             const allPaths = stations.map((_, idx) => ({
//                 destination: stations[idx].stations,
//                 distance: dist[idx],
//                 path: getPath(prev, sourceIndex, idx).map(i => stations[i].stations)
//             }));

//             return res.json({
//                 source,
//                 paths: allPaths
//             });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Dijkstra Algorithm
// function dijkstra(matrix, startIndex) {
//     const n = matrix.length;
//     const dist = Array(n).fill(Infinity);
//     const visited = Array(n).fill(false);
//     const prev = Array(n).fill(null);

//     dist[startIndex] = 0;

//     for (let i = 0; i < n; i++) {
//         let u = -1;
//         for (let j = 0; j < n; j++) {
//             if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
//                 u = j;
//             }
//         }

//         if (dist[u] === Infinity) break;
//         visited[u] = true;

//         for (let v = 0; v < n; v++) {
//             if (matrix[u][v] > 0 && !visited[v]) {
//                 const alt = dist[u] + matrix[u][v];
//                 if (alt < dist[v]) {
//                     dist[v] = alt;
//                     prev[v] = u;
//                 }
//             }
//         }
//     }

//     return { dist, prev };
// }

// // Path Reconstructor
// function getPath(prev, start, end) {
//     const path = [];
//     for (let at = end; at !== null; at = prev[at]) {
//         path.unshift(at);
//     }
//     return path[0] === start ? path : [];
// }

// module.exports = router;

