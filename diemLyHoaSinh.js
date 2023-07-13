function manh11() {
let ly = document.getElementById("VL").value;
    // getElêmntById là lấy giá trị của id ()
    let hoa = document.getElementById("HH").value;
    let sinh = document.getElementById("SH").value;
    let ly1= parseInt(ly);
    let hoa1= parseInt(hoa);
    let sinh1= parseInt(sinh);
    let tong = ly1+hoa1+sinh1;
    let tb= tong/3;
    alert(tong);
    alert(tb);
    document.getElementById("a"). innerHTML= "tong="+tong;
document.getElementById("b"). innerHTML="tb="+tb;
    // document.write(tong)
    // document.write(tb)
}