/*
人数 n
号数 k
*/

function JosephProblem() {
    var n = 987654321, m =2, i, s = 0;
    for (i = 2; i <= n; i++)
    {
        s = (s + m) % i;
    }
    // s++;
    console.log("The winner is "+s);
}

JosephProblem();