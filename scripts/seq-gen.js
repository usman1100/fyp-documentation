function format(i){
    return i < 10 ? `0${i}` : i;
}

for (let i=1; i<20; i++){
    console.log(`
        \\begin{figure}[H]
            \\centering
            \\caption{Sequence Diagram ${i}}
            \\includegraphics[scale=0.5]{./diagrams/sequence/seq-${format(i)}.png}
            \\label{fig:seq-${format(i)}}
            
        \\end{figure}
    `);
}