const fs=require('fs');
//fs.writeFileSync('notes.txt','This file is created by nodejs');
fs.appendFileSync('notes.txt',' file updated!');