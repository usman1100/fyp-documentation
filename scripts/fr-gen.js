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

    

const data = fs.readFileSync("frs.json");
const json = JSON.parse(data);


let id = 01;
json.forEach(element => {

    const el = convertSlashes(element);
    console.log
    (`
    \\subsubsection{FR-${id < 10 ? `0${id}`:id}: ${el.name}}
    \\begin{center}
        \\begin{tabularx}{\\textwidth}{|l|X|}
            \\hline
            \\textbf{ID} & FR-${(id < 10 ? `0${id}` : id) || ""} \\\\
            \\hline
            \\textbf{Name} & ${element.name || ""} \\\\
            \\hline
            \\textbf{Description} & ${element.desc || ""} \\\\
            \\hline
            \\textbf{Input} & ${element.input || ""} \\\\
            \\hline
            \\textbf{Output} & ${element.output || ""} \\\\
            \\hline
            \\textbf{Requirements} & ${element.req || ""} \\\\
            \\hline
        \\end{tabularx}
    \\end{center}
    ${id%4 == 0 ? "\\newpage" : ""}
    `);
    id++;
})
