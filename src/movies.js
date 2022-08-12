// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((element)=>{
        return element.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter((element)=>{
        return (element.director==="Steven Spielberg" && element.genre.includes("Drama"))
    })
    return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {   /// essa parte do exercício a professora disse que estava com problema
    const tudoLimpo = moviesArray.filter((element)=>{
        return (typeof(element.score)==="number");
    })
    const average = tudoLimpo.reduce((acumulador,element)=>{
        return acumulador + element.score 
    },0);
    return (average/tudoLimpo.length); /// o toFixed(2) não está funcionando na hora de fazer o teste
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter((element)=>{
        return element.genre.includes("Drama");
    })
    const scoreDrama = dramas.reduce((acumulador,element)=>{
        return acumulador + element.score;
    },0);
    if (dramas.length===0){
        return 0;
    }
    return scoreDrama/dramas.length;  /// o toFixed(2) não está funcionando na hora de fazer o teste
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayed= [...moviesArray];
    moviesArrayed.sort((a,b)=>{
        return a.title -b.title;
    })
    moviesArrayed.sort((a,b)=>{
        return a.year - b.year;
    })
    return moviesArrayed;   /// Não entendi o erro, fiz primeiro o título e o ano depois
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabetic = [...moviesArray];
    const arrayOrdenado =[];
    alphabetic.sort((a,b)=>{
        return a.title - b.title;
    })
    alphabetic.forEach((element)=>{
        arrayOrdenado.push(element.title);
    })

    return arrayOrdenado.slice(0,20);  /// não entendi onde está o erro
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const horas = [...moviesArray];


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
