// for(i = 0;i<4;i++){
//     for(y = 0; y < 4; y++){
//         console.log();

//     }
//     console.log("\n");
// }

// function printSquareShape(n) {
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       pattern += "*";
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }

// printSquareShape(4);

// function printSquareShape(n) {
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
//         pattern += "*";
//       } else {
//         pattern += " ";
//       }
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }

function printPiramid(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n; j++) {  
      if (j < n - i - 1) {
        pattern += " ";
        
      } else {
        for (let k = 0; k < i * 2 + 1; k++) { //
          pattern += "*";
        }
        break;
        //pattern += "*";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}

// printSquareShape(7);
printPiramid(5);


// function printPyramid1(n) {
//     let pattern = ''; // Initialize an empty string for the pattern

//     // Loop for each row
//     for (let i = 1; i <= n; i++) {
//         // Add spaces before stars
//         for (let j = 1; j <= n - i; j++) {
//             pattern += ' ';
//         }
//         // Add stars with a space between them
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             pattern += '*';
//         }
//         // Move to the next line after each row
//         pattern += '\n';
//     }

//     console.log(pattern); // Print the pyramid
// }

// // Example usage:
// printPyramid1(5); // Prints a pyramid with 5 rows

// function printDiamond(n){
//     let pattern = "";
//     for(i = 0; i < n; i++){
//         for(j = 0; j < n; j++){
//             if(j < n - i -1){
//                 pattern += " ";
//             }
//             else {
//                 for(k = 0; k < i * 2 + 1; k++){
//                     pattern += "*";
//                 }
//                 break;
//             }
//         }
//         pattern += "\n";
//     }
//     console.log(pattern);
// }

// printDiamond(3)

module.exports = {printPiramid};