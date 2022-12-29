// class Graph{
//     constructor(){
//         this.adjacent = {};
//         this.verties = [];
//         this.edges = 0;
//     }
//     addVerties(v){
//         this.adjacent[v]=[];
//     }
//     addEdge(v,e){
//         this.adjacent[v].push(e);
//         this.adjacent[e].push(v);
//         this.edges++;
//     }
// }


const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['MEX','BKK']
]
const adjacencyList = new Map();

//constrctor
//accepts the airport code, 
function addNode(airport){
    //sets the code equal to an empty list
    adjacencyList.set(airport, [])
}
//add edge
function addEdge(origin, destination){
     adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))


//bfs

function bfs(start){
    const queue = [start];
    const visited = new Set();

    while (queue.length){
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        for(const destination of destinations){

            if(destination === "BKK"){
                console.log("Found BKK")
            }

            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }

        }
    }


}

function dfs(start, target, visited = new Set()){

    visited.add(start);

   const destinations = adjacencyList.get(start);
   for(const destination of destinations){
    if(destination === target){
            console.log("DFS found ", target, 'at ', destination);
            return;
        }
        console.log(destination)
    if(!visited.has(destination)){
        
        dfs(destination, target,visited);
        }
   }

}

//console.log(adjacencyList)
//bfs('PHX')
dfs('PHX', "BKK")