function doiTien() {
    let soTienMuonDoi = document.getElementById("soTienMuonDoi").value;
    let form = document.getElementById("form").value;
    let to = document.getElementById("to").value;

    if (form == "usd" && to == "vnd") {
        let doiTien = soTienMuonDoi * 20000;
        document.getElementById("demo").innerHTML = doiTien;
    } else if (form == "vnd" && to == "usd") {
        let doiTien = soTienMuonDoi / 20000;
        document.getElementById("demo").innerHTML = doiTien;
    }
}