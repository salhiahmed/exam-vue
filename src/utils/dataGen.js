import * as utils from "./utils";

const dataGen = (num, params) => {

   const getLettersInterval = utils.getLettersInterval(num, 8)
   const numLines = utils.numLines(num, 5)
   const excelTable = ((rows, cols) => {
      const result = []
      for (let i = 0; i < rows; i++) {
         const row = []
         for (let j = 0; j < cols; j++) {
            row.push(utils.randBetween(10, 150))
         }
         result.push(row)
      }
      return result
	})(4, 7)

   const randCell = {
      row: utils.randBetween(1, 4),
      col: utils.randBetween(1, 7),
   }
   const randomCellForSiFunction = {
      r: numLines[randCell.row],
      c: getLettersInterval[randCell.col],
      v: excelTable[randCell.row - 1][randCell.col - 1]
   }

   return {
      exo1: {
         part1: (() => {
            const title = utils.select(utils.titles, 1)[0]
            const nbPages = utils.randBetween(30, 150)
            const actualPage = utils.randBetween(1, nbPages)
            const nbWords = utils.randBetween(500, 800) * nbPages
            return [
               { label: 'اسم البرنامج', value: 'Word'},
               { label: 'اسم المِلَفْ', value: title},
               { label: 'رقم الصفحة الحالية', value: actualPage},
               { label: 'عدد الصفحات الكُلِّي', value: nbPages},
               { label: 'عدد الكلمات', value: nbWords}
            ]
         })(),
         part2: utils.select(utils.dataWordTools, 5)
      },
      exo2: {
			exo2Infos: {
				getLettersInterval,
				numLines,
				excelTable
			},
			part1: [
            {  title: 'الدالة التي تحسب مجموع مداخيل شركة فيسبوك',
               func: `=SOMME(${getLettersInterval[1]}${numLines[1]}:${getLettersInterval[7]}${numLines[1]})`,
            },
            {  
               title: 'الدالة التي ُتْظٍهْر أعلى مدخول لنيتفليكس',
               func: `=MAX(${getLettersInterval[1]}${numLines[3]}:${getLettersInterval[7]}${numLines[3]})`,
            },
            {  
               title: 'الدالة التي تحسب معدل مداخيل شركة أمازون',
               func: `=MOYENNE(${getLettersInterval[1]}${numLines[2]}:${getLettersInterval[7]}${numLines[2]})`,
            },
            {  
               title: 'الدالة التي تحسب معدل مداخيل كل الشركات لكل السنوات',
               func: `=MOYENNE(${getLettersInterval[1]}${numLines[1]}:${getLettersInterval[7]}${numLines[4]})`,
            },
            {  
               title: 'الدالة التي ُتْظٍهْر أدنى مدخول لغوغل مابين 2018 و 2022',
               func: `=MIN(${getLettersInterval[2]}${numLines[4]}:${getLettersInterval[6]}${numLines[4]})`,
            },
            {  
               title: 'الدالة التي تحسب مجموع مداخيل كل الشركات لسنة 2020',
               func: `=SOMME(${getLettersInterval[4]}${numLines[1]}:${getLettersInterval[4]}${numLines[4]})`,
            }
         ],
			part2: [
            {
               func: `=SOMME(${getLettersInterval[1]}${numLines[1]}:${getLettersInterval[1]}${numLines[4]})`, 
               result: excelTable[0][0] + excelTable[1][0] + excelTable[2][0] + excelTable[3][0]
            },
            {
               func: `=Si(${randomCellForSiFunction.c}${randomCellForSiFunction.r} >= 70 ; <span class="font-[tajawal] font-bold">"خسارة"</span> ; <span class="font-[tajawal] font-bold">"ربح"</span>)`,
               result: randomCellForSiFunction.v >= 70 ? "ربح" : "خسارة"      
            },
            {
               func: `=MAX(${getLettersInterval[1]}${numLines[1]}:${getLettersInterval[1]}${numLines[4]})`, 
               result: Math.max(excelTable[0][0], excelTable[1][0], excelTable[2][0], excelTable[3][0])
            },
            {
               func: `=SOMME(${getLettersInterval[7]}${numLines[1]}:${getLettersInterval[7]}${numLines[4]})`, 
               result: excelTable[0][6] + excelTable[1][6] + excelTable[2][6] + excelTable[3][6]
            },
            {
               func: `=MIN(${getLettersInterval[2]}${numLines[2]}:${getLettersInterval[6]}${numLines[2]})`, 
               result: Math.min(excelTable[1][1], excelTable[1][2], excelTable[1][3], excelTable[1][4], excelTable[1][5])
            },
            {
               func: `=MOYENNE(${getLettersInterval[3]}${numLines[2]}:${getLettersInterval[4]}${numLines[3]})`, 
               result: (excelTable[1][2] + excelTable[1][3] + excelTable[2][2] + excelTable[2][3]) / 4
            }
         ]
      },
   };
}

export default dataGen
