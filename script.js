

document.addEventListener("DOMContentLoaded", function () {

    const convertButton = document.getElementById("convertButton");
    const htmlInput = document.getElementById("htmlInput");
    const pdfOutput = document.getElementById("pdfOutput");

    convertButton.addEventListener("click", function () {
        const htmlContent = htmlInput.value;

        if (typeof pdfMake !== 'undefined') {
            pdfMake.createPdf({ content: htmlContent }).open();
        } else {
            alert("An Error Occured.");
        }
    });
});


