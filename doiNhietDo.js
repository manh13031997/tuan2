function manh(){
    let F = document.getElementById("a").value
    let f1 = parseInt(F)
    let df = (160 + 9 * f1) / 5
    document.getElementById("b").value = (df)
}
    function manh1(){
    let C = document.getElementById("b").value
    let c = parseInt(C)
    let dc = (5 * c - 160) / 9
    document.getElementById("a").value = (dc)
}
