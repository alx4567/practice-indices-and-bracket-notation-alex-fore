// Task 1: Create multi-dimensional array with 9 movies
let childrenMovies = [["101 Dalmatians", "Lion King", "Little Mermaid"], ["TMNT", "Captain Underpants", "Garfield"], ["Finding Nemo", "Up", "Toy Story"]];

// Task 2: log all elements using bracket notation
console.log(`Children Movies: ${childrenMovies[0][0]}, ${childrenMovies[0][1]}, ${childrenMovies[0][2]}, ${childrenMovies[1][0]}, ${childrenMovies[1][1]}, ${childrenMovies[1][2]}, ${childrenMovies[2][0]}, ${childrenMovies[2][1]}, ${childrenMovies[2][2]}`);

// Task 3: log using indices with using row and item variables
let row0 = 0;
let row1 = 1;
let row2 = 2;
let item0 = 0;
let item1 = 1;
let item2 = 2;

console.log(`Children Movies: ${childrenMovies[row0][item0]}, ${childrenMovies[row0][item1]}, ${childrenMovies[row0][item2]}, ${childrenMovies[row1][item0]}, ${childrenMovies[row1][item1]}, ${childrenMovies[row1][item2]}, ${childrenMovies[row2][item0]}, ${childrenMovies[row2][item1]}, ${childrenMovies[row2][item2]}`);


// Task 4: pring items in second shelf with a loop
for (i = 1; i < 2; i++) {
    for (j = 0; j < 3; j++) {
        console.log(childrenMovies[i][j]);
    }
}