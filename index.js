var x = parseInt(window.prompt("Enter the x co-ordinate of knight ")); 
while (x < 1 || x > 8)
{
    window.alert("Please enter valid value of x coordinate for a 8*8 chessboard! ");
    var x = parseInt(window.prompt("Enter the x co-ordinate of knight "));
}
var y = parseInt(window.prompt("Enter the y co-ordinate of knight ")); 

while (y < 1 || y > 8)
{
    window.alert("Please enter valid value of y coordinate for a 8*8 chessboard! ");
    var y = parseInt(window.prompt("Enter the y co-ordinate of knight "));
}

let dx = [ -2, 2 ];
let dy = [ -1, 1 ];
 
// find all the possible positions
// where knight can move 
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++){
        if ((x + dx[i]) >= 1 && (x + dx[i]) <= 8 && (y + dy[j]) >= 1 && (y + dy[j]) <= 8) {
            var str = "( "+(dx[i] + x)+","+(dy[j] + y)+" )"+"<br>";
            document.write(str.bold());
        }
        if ((x + dy[i]) >= 1 && (x + dy[i]) <= 8 && (y + dx[j]) >= 1 && (y + dx[j]) <= 8) {
            var str = "( "+(dy[i] + x)+","+(dx[j] + y)+" )"+"<br>";
            document.write(str.bold());
        }
    }
    
}
