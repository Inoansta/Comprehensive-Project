async function getMovieTitles(title){
    const result = [];
    const ans = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}`).then(response=> response.json())
    const copy =[...ans.data];
    for(let i=0; i<copy.length; i++){
        result.push(copy[i].Title)
    }

    console.log(result.sort());
}   

console.log(getMovieTitles('best'))