$("#download").click(function () {
    var doc = new jsPDF();
    doc.setFontSize(30);
    doc.text("The Report of Envidence", 45, 11.5);
    doc.setLineWidth(0.5);
    doc.line(15, 15, 195, 15); // horizontal line
    doc.setFontSize(15);
    doc.text("User Name:Lin",17, 21);
    doc.setFontSize(15);
    doc.text("Time:2018-10-12",155, 21);
    doc.setFontSize(12);
    doc.text("Hash:f9326be7aded593a5556639746c6ee3eecd3e5ce53f2392bac57b1633b0c84aa",17, 27);
    doc.setLineWidth(0.5);
    doc.line(15, 29, 195, 29);
    doc.setFontSize(15);
    doc.text("Original photos:",17, 34);
})