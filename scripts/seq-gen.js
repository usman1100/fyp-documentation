function format(i) {
    return i < 10 ? `0${i}` : i;
}

// sequence diagram generator

// for (let i = 1; i < 20; i++) {
//     console.log(`
//         \\begin{figure}[H]
//             \\centering
//             \\includegraphics[scale=0.5]{./diagrams/sequence/seq-${format(i)}.png}
//             \\caption{Sequence Diagram of UC-${i}}
//             \\label{fig:seq-${format(i)}}
            
//         \\end{figure}
//     `);
// }


// activity diagram generator
// for (let i=1; i<=20; i++){
//     console.log(`
//         \\begin{figure}[H]
//             \\centering
//             \\includegraphics[scale=0.5]{./diagrams/Activity Diagram/ad-${format(i)}.png}
//             \\caption{Activity diagram of UC-${i}}
//             \\label{fig:act-${format(i)}}

//         \\end{figure}
//     `);
// }


// for collaboration diagram generator
for (let i = 1; i <= 19; i++) {
    console.log(`
        \\begin{figure}[H]
            \\centering
            \\includegraphics[scale=0.5]{./diagrams/collaboration/cd-${i}.png}
            \\caption{Collaboration diagram of UC-${i}}
            \\label{fig:cd-${format(i)}}
            
        \\end{figure}
    `);
}