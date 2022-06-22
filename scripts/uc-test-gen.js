const fs = require("fs");
const convertSlashes = obj =>{

    const reserved = ["_"]
    for (let key in obj) {
        obj[key] = obj[key].replace(/\\\\/g, "\\\\");
        for (let i = 0; i < reserved.length; i++) {
            obj[key] = obj[key].replace(new RegExp(reserved[i], "g"), "\\\\" + reserved[i]);
        }

    }
    return obj;
}

    

const data = fs.readFileSync("uc-test-data.json");
const json = JSON.parse(data);


const addNewLine = (s)=> s.replace("\\n", "\\\\\\\\")


let id = 01;
json.forEach(element => {

    const el = convertSlashes(element);
    console.log
    (`
    \\begin{table}[]
    \\centering
    \\begin{tabular}{|l|llll|}
        \\hline
        Description   & \\multicolumn{4}{l|}{${element.description}}                                        \\\\ \\hline
        Use Case ID   & \\multicolumn{4}{l|}{${element.ucid}}                                        \\\\ \\hline
        Test Case ID  & \\multicolumn{4}{l|}{${element.tcid}}                                        \\\\ \\hline
        Actors        & \\multicolumn{4}{l|}{${element.actors}}                                        \\\\ \\hline
        Main Scenario & \\multicolumn{1}{l|}{Serial No}              & \\multicolumn{3}{l|}{Steps}           \\\\ \\hline
        Actor/User    & \\multicolumn{1}{l|}{1}                      & \\multicolumn{3}{l|}{${element.a1}}         \\\\ \\hline
                      & \\multicolumn{1}{l|}{2}                      & \\multicolumn{3}{l|}{${element.a2}}    \\\\ \\hline
                      & \\multicolumn{1}{l|}{3}                      & \\multicolumn{3}{l|}{${element.a3}} \\\\ \\hline
        Extension     & \\multicolumn{1}{l|}{1}                      & \\multicolumn{3}{l|}{${element.e1}}      \\\\ \\hline
                      & \\multicolumn{1}{l|}{2}                      & \\multicolumn{3}{l|}{${element.e2}}        \\\\ \\hline
        \\end{tabular}
    \\end{table}`);

    if (id % 4 ===0)console.log('\t\\newpage');
    id++
})
