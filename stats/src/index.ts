import fs from 'fs';

enum matchResult  {
    HomeWin = 'H',
    AwayWin= 'A',
    Draw= 'D'
}

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row) => {
        return row.split(',');
    }).map((row)=>{
        return[
            row[0],
            row[1]
        ]
    });

console.log(matches);
