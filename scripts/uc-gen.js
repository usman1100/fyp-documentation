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

    

const data = fs.readFileSync("uc.json");
const json = JSON.parse(data);


let id = 01;
console.log(json[0]);
json.forEach(element => {

    const el = convertSlashes(element);
    console.log
    (`
    \\subsubsection{FR-${id < 10 ? `0${id}`:id}: ${el.name}}
    \\begin{center}
        \\begin{tabularx}{\\textwidth}{|l|X|}
            \\hline
            \\textbf{ID} & UC-${(id < 10 ? `0${id}` : id) || ""} \\\\
            \\hline
            \\textbf{Name} & ${element.name || ""} \\\\
            \\hline
            \\textbf{Description} & ${element.desc || ""} \\\\
            \\hline
            \\textbf{Actors} & ${element.actors || ""} \\\\
            \\hline
            \\textbf{Assumptions} & ${element.assumptions || ""} \\\\
            \\hline
            \\textbf{Triggers} & ${element.triggers || ""} \\\\
            \\hline
            \\textbf{Pre Conditions} & ${element.pre || ""} \\\\
            \\hline
            \\textbf{Post Conditions} & ${element.post || ""} \\\\
            \\hline
            \\textbf{Main Course} & ${element.mainCourse || ""} \\\\
            \\hline
            \\textbf{Alternative Course} & ${element.alternativeCourse || ""} \\\\
            \\hline
            
        \\end{tabularx}
    \\end{center}
    ${id%4 == 0 ? "\\newpage" : ""}
    `);
    id++;
})
