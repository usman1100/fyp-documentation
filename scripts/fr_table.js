const fs = require("fs")
const data = fs.readFileSync("./frs.json");
const json = JSON.parse(data);

const printID = (id) => {
    return id < 10 ? `FR-0${id}` : `FR-${id}`;
}

console.log(`
\\subsection{Functional Requirements Table}
    \\begin{center}
        \\begin{tabularx}{\\textwidth}{|l|X|}
            \\hline
            \\textbf{FR ID} & \\textbf{Description} \\\\
            \\hline
`);
let id = 1;
json.forEach(item => {
    console.log(`
        \\textbf{${printID(id)}} & ${item.desc} \\\\
        \\hline
    `);
    id++;
})

console.log(`
    \\end{tabularx}
    \\end{center}
`);