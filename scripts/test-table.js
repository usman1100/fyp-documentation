const fs = require("fs");
const convertSlashes = obj =>{

    const reserved = ["_"]
    for (let key in obj) {
        obj[key] = obj[key].replace(/\\/g, "\\");
        for (let i = 0; i < reserved.length; i++) {
            obj[key] = obj[key].replace(new RegExp(reserved[i], "g"), "\\" + reserved[i]);
        }

    }
    return obj;
}

    

const data = fs.readFileSync("test-table-data.json");
const json = JSON.parse(data);


const addNewLine = (s)=> s.replace("\n", "\\\\")


let id = 01;
json.forEach(element => {

    const el = convertSlashes(element);
    console.log
    (`
    \\begin{center}
        \\begin{tabularx}{\\textwidth}{|l|X|}
            \\hline
            \\textbf{ID} & ${element.id} \\\\
            \\hline
            \\textbf{Priority} & ${element.Priority || ""} \\\\
            \\hline
            \\textbf{Description} & ${element.Description || ""} \\\\
            \\hline
            \\textbf{Reference} & ${element.Reference || ""} \\\\
            \\hline
            \\textbf{Pre-requisite} & ${(element["Pre-requisite"]) || ""} \\\\
            \\hline
            \\textbf{Steps to reproduce} & ${element["Steps to reproduce"] || ""} \\\\
            \\hline
            \\textbf{Input} & ${element.input || ""} \\\\
            \\hline
            \\textbf{Expected Result} & ${element["Expected Result"] || ""} \\\\
            \\hline
            \\textbf{Status} & ${element.Status || ""} \\\\
            \\hline
            
        \\end{tabularx}
    \\end{center}
    ${id%2 == 0 ? "\\newpage" : "\\vspace{5mm} \n"}
    `);
    id++;
})
