// Question data
const mathsQuestions = [
  {
    question: "What is 3/4 of 280?",
    options: ["210", "180", "240", "200"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 12cm and width 8cm?",
    options: ["96cm²", "40cm²", "20cm²", "60cm²"],
    correct: 0
  },
  {
    question: "Calculate 15% of 300.",
    options: ["45", "30", "15", "60"],
    correct: 0
  },
  {
    question: "What is 0.75 as a fraction in its simplest form?",
    options: ["3/4", "1/2", "3/5", "7/10"],
    correct: 0
  },
  {
    question: "If a jacket costs £45 and is reduced by 20%, what is the new price?",
    options: ["£36", "£30", "£40", "£32"],
    correct: 0
  },
  {
    question: "What is the perimeter of a square with a side length of 7cm?",
    options: ["28cm", "49cm", "14cm", "21cm"],
    correct: 0
  },
  {
    question: "Solve: 3x + 7 = 22",
    options: ["x = 5", "x = 3", "x = 6", "x = 4"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">5^3</span>?",
    options: ["125", "25", "15", "100"],
    correct: 0
  },
  {
    question: "Convert 2.5 meters to centimeters.",
    options: ["250cm", "25cm", "2500cm", "0.25cm"],
    correct: 0
  },
  {
    question: "A train leaves at 09:30 and arrives at 11:15. How long was the journey?",
    options: ["1 hour 45 minutes", "1 hour 30 minutes", "2 hours", "1 hour 55 minutes"],
    correct: 0
  },
  {
    question: "What is the sum of angles in a triangle?",
    options: ["180 degrees", "90 degrees", "360 degrees", "270 degrees"],
    correct: 0
  },
  {
    question: "Round 3456 to the nearest hundred.",
    options: ["3500", "3400", "3000", "4000"],
    correct: 0
  },
  {
    question: "What is the product of 13 and 7?",
    options: ["91", "81", "71", "101"],
    correct: 0
  },
  {
    question: "How many grams are in 3.5 kilograms?",
    options: ["3500g", "350g", "35000g", "35g"],
    correct: 0
  },
  {
    question: "What is the difference between 78 and 39?",
    options: ["39", "40", "41", "38"],
    correct: 0
  },
  {
    question: "If a pie is cut into 8 slices and you eat 3, what fraction is left?",
    options: ["5/8", "3/8", "1/2", "1/4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 50?",
    options: ["L", "C", "X", "V"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
    options: ["32", "20", "24", "28"],
    correct: 0
  },
  {
    question: "How many millilitres are in 1.5 litres?",
    options: ["1500ml", "150ml", "15000ml", "15ml"],
    correct: 0
  },
  {
    question: "What is the value of 2/5 + 1/5?",
    options: ["3/5", "1/5", "2/25", "3/10"],
    correct: 0
  },
  {
    question: "A cinema ticket costs £8.50. How much do 4 tickets cost?",
    options: ["£34", "£32", "£36", "£30"],
    correct: 0
  },
  {
    question: "What is the smallest prime number?",
    options: ["2", "1", "3", "0"],
    correct: 0
  },
  {
    question: "What is the area of a triangle with base 10cm and height 6cm?",
    options: ["30cm²", "60cm²", "16cm²", "40cm²"],
    correct: 0
  },
  {
    question: "How many seconds are in 2 minutes?",
    options: ["120 seconds", "60 seconds", "90 seconds", "180 seconds"],
    correct: 0
  },
  {
    question: "What is the median of the following numbers: 5, 2, 8, 4, 6?",
    options: ["5", "2", "6", "4"],
    correct: 0
  },
  {
    question: "What is 40% of 250?",
    options: ["100", "50", "200", "75"],
    correct: 0
  },
  {
    question: "How many edges does a cube have?",
    options: ["12", "6", "8", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 1.2 and 3.4?",
    options: ["4.6", "4.2", "4.8", "5.0"],
    correct: 0
  },
  {
    question: "If 1 dollar equals 0.75 pounds, how many pounds is 5 dollars?",
    options: ["3.75 pounds", "4 pounds", "5 pounds", "3.50 pounds"],
    correct: 0
  },
  {
    question: "What is the square root of 64?",
    options: ["8", "6", "16", "32"],
    correct: 0
  },
  {
    question: "What is 1/3 of 120?",
    options: ["40", "30", "60", "20"],
    correct: 0
  },
  {
    question: "Find the volume of a cuboid with length 5cm, width 3cm, and height 2cm.",
    options: ["30cm³", "10cm³", "20cm³", "15cm³"],
    correct: 0
  },
  {
    question: "What is 25% of 160?",
    options: ["40", "80", "25", "16"],
    correct: 0
  },
  {
    question: "How many minutes are in 3 hours?",
    options: ["180 minutes", "60 minutes", "120 minutes", "240 minutes"],
    correct: 0
  },
  {
    question: "What is the range of the following numbers: 10, 2, 7, 15, 3?",
    options: ["13", "10", "15", "7"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 4, 6, 8?",
    options: ["5", "4", "6", "7"],
    correct: 0
  },
  {
    question: "What is 1/4 + 1/2?",
    options: ["3/4", "1/4", "2/4", "1/2"],
    correct: 0
  },
  {
    question: "What is 50% of 500?",
    options: ["250", "100", "50", "300"],
    correct: 0
  },
  {
    question: "How many right angles are in a square?",
    options: ["4", "2", "3", "1"],
    correct: 0
  },
  {
    question: "If a car travels at 60 mph for 2 hours, how far does it travel?",
    options: ["120 miles", "60 miles", "30 miles", "90 miles"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 3, 5, 7, ...?",
    options: ["9", "8", "10", "11"],
    correct: 0
  },
  {
    question: "What is the difference between 0.8 and 0.25?",
    options: ["0.55", "0.65", "0.75", "0.5"],
    correct: 0
  },
  {
    question: "What is the product of 0.5 and 0.2?",
    options: ["0.1", "1.0", "0.01", "0.52"],
    correct: 0
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["6", "5", "7", "8"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 4 and 6?",
    options: ["12", "24", "6", "4"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/6?",
    options: ["1/2", "2/9", "1/3", "1/6"],
    correct: 0
  },
  {
    question: "What is the area of a square with a side length of 5cm?",
    options: ["25cm²", "20cm²", "10cm²", "30cm²"],
    correct: 0
  },
  {
    question: "What is 10% of 70?",
    options: ["7", "10", "70", "1"],
    correct: 0
  },
  {
    question: "How many days are in a leap year?",
    options: ["366", "365", "364", "360"],
    correct: 0
  },
  {
    question: "What is the square of 9?",
    options: ["81", "18", "9", "3"],
    correct: 0
  },
  {
    question: "What is the value of 100 - 45 + 15?",
    options: ["70", "40", "60", "55"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 20?",
    options: ["19", "17", "13", "11"],
    correct: 0
  },
  {
    question: "How many sides does an octagon have?",
    options: ["8", "6", "7", "5"],
    correct: 0
  },
  {
    question: "What is the ratio of apples to oranges if there are 6 apples and 9 oranges?",
    options: ["2:3", "3:2", "6:9", "1:2"],
    correct: 0
  },
  {
    question: "If a pizza has 12 slices and you eat 1/3 of it, how many slices did you eat?",
    options: ["4", "3", "6", "2"],
    correct: 0
  },
  {
    question: "What is the cube root of 27?",
    options: ["3", "9", "6", "4"],
    correct: 0
  },
  {
    question: "What is the sum of 2.7 and 1.5?",
    options: ["4.2", "3.2", "4.0", "3.7"],
    correct: 0
  },
  {
    question: "Convert 0.6 to a percentage.",
    options: ["60%", "6%", "0.6%", "600%"],
    correct: 0
  },
  {
    question: "How many vertices does a triangular prism have?",
    options: ["6", "5", "8", "9"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 8, 6, 4, ...?",
    options: ["2", "0", "1", "3"],
    correct: 0
  },
  {
    question: "What is the difference between 3/5 and 1/5?",
    options: ["2/5", "1/5", "3/25", "4/5"],
    correct: 0
  },
  {
    question: "If 1 inch is 2.54 cm, how many cm are in 10 inches?",
    options: ["25.4cm", "2.54cm", "254cm", "0.254cm"],
    correct: 0
  },
  {
    question: "What is the mode of the following numbers: 2, 5, 2, 8, 5, 2?",
    options: ["2", "5", "8", "No mode"],
    correct: 0
  },
  {
    question: "What is 75% of 80?",
    options: ["60", "40", "20", "50"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular pentagon with side length 6cm?",
    options: ["30cm", "24cm", "36cm", "18cm"],
    correct: 0
  },
  {
    question: "Solve: 2y - 5 = 11",
    options: ["y = 8", "y = 3", "y = 6", "y = 5"],
    correct: 0
  },
  {
    question: "What is the value of 2/3 x 3/4?",
    options: ["1/2", "6/12", "5/7", "2/4"],
    correct: 0
  },
  {
    question: "How many months are in 5 years?",
    options: ["60 months", "12 months", "30 months", "48 months"],
    correct: 0
  },
  {
    question: "What is the area of a circle with radius 7cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["154cm²", "49cm²", "22cm²", "14cm²"],
    correct: 0
  },
  {
    question: "What is the approximate value of <span class="math-inline">\\pi</span>?",
    options: ["3.14", "3.0", "3.1", "3.2"],
    correct: 0
  },
  {
    question: "What is the sum of the interior angles of a quadrilateral?",
    options: ["360 degrees", "180 degrees", "270 degrees", "90 degrees"],
    correct: 0
  },
  {
    question: "What is the equivalent fraction to 1/2 with a denominator of 10?",
    options: ["5/10", "2/10", "4/10", "10/10"],
    correct: 0
  },
  {
    question: "What is 1000 divided by 25?",
    options: ["40", "25", "50", "100"],
    correct: 0
  },
  {
    question: "What is the name of a triangle with all sides equal?",
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    correct: 0
  },
  {
    question: "What is the coordinate of the origin on a graph?",
    options: ["(0,0)", "(1,0)", "(0,1)", "(1,1)"],
    correct: 0
  },
  {
    question: "What is 15 multiplied by 6?",
    options: ["90", "75", "60", "80"],
    correct: 0
  },
  {
    question: "How many pairs of parallel lines does a parallelogram have?",
    options: ["2", "1", "4", "0"],
    correct: 0
  },
  {
    question: "What is 0.05 as a fraction in its simplest form?",
    options: ["1/20", "5/100", "1/5", "1/10"],
    correct: 0
  },
  {
    question: "What is the capital of 1000 at 5% simple interest for 2 years?",
    options: ["100", "50", "200", "10"],
    correct: 0
  },
  {
    question: "What is the range of 1, 10, 5, 8, 3?",
    options: ["9", "10", "8", "5"],
    correct: 0
  },
  {
    question: "What is the value of 3/5 of 100?",
    options: ["60", "30", "50", "70"],
    correct: 0
  },
  {
    question: "How many faces does a triangular pyramid have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 1/8?",
    options: ["3/8", "1/2", "2/8", "1/4"],
    correct: 0
  },
  {
    question: "What is 30% of 150?",
    options: ["45", "30", "15", "60"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with diameter 10cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["31.4cm", "10cm", "15.7cm", "20cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 5, 10, 15, 20, ...?",
    options: ["25", "22", "30", "24"],
    correct: 0
  },
  {
    question: "What is the product of 1.5 and 2?",
    options: ["3", "1.5", "2.5", "0.75"],
    correct: 0
  },
  {
    question: "How many centimetres are in 1 kilometre?",
    options: ["100000cm", "1000cm", "10000cm", "100cm"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 6cm and height 8cm?",
    options: ["24cm²", "48cm²", "14cm²", "36cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 100?",
    options: ["10", "50", "25", "100"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 100?",
    options: ["C", "L", "D", "M"],
    correct: 0
  },
  {
    question: "What is 0.125 as a fraction in its simplest form?",
    options: ["1/8", "1/4", "1/2", "1/10"],
    correct: 0
  },
  {
    question: "Solve: x / 4 = 12",
    options: ["x = 48", "x = 3", "x = 16", "x = 8"],
    correct: 0
  },
  {
    question: "What is 80% of 90?",
    options: ["72", "80", "90", "18"],
    correct: 0
  },
  {
    question: "How many degrees are in a straight line?",
    options: ["180 degrees", "90 degrees", "360 degrees", "45 degrees"],
    correct: 0
  },
  {
    question: "What is the median of 1, 2, 3, 4, 5, 6?",
    options: ["3.5", "3", "4", "4.5"],
    correct: 0
  },
  {
    question: "What is the difference between 1 and 0.75?",
    options: ["0.25", "0.75", "0.5", "0.1"],
    correct: 0
  },
  {
    question: "What is the product of 1/2 and 1/4?",
    options: ["1/8", "1/2", "1/4", "3/4"],
    correct: 0
  },
  {
    question: "How many sides does a quadrilateral have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 12 and 18?",
    options: ["6", "3", "2", "9"],
    correct: 0
  },
  {
    question: "What is the sum of 2 and 3/4?",
    options: ["2 3/4", "5/4", "11/4", "2 1/2"],
    correct: 0
  },
  {
    question: "What is the perimeter of a rectangle with length 10cm and width 5cm?",
    options: ["30cm", "50cm", "15cm", "25cm"],
    correct: 0
  },
  {
    question: "What is 5% of 200?",
    options: ["10", "20", "5", "100"],
    correct: 0
  },
  {
    question: "How many grams are in 0.5 kilograms?",
    options: ["500g", "50g", "5000g", "5g"],
    correct: 0
  },
  {
    question: "What is the square of 11?",
    options: ["121", "22", "11", "100"],
    correct: 0
  },
  {
    question: "What is the value of 50 - 20 + 5?",
    options: ["35", "25", "30", "40"],
    correct: 0
  },
  {
    question: "What is the smallest odd prime number?",
    options: ["3", "1", "5", "7"],
    correct: 0
  },
  {
    question: "What is the volume of a cube with side length 4cm?",
    options: ["64cm³", "16cm³", "12cm³", "48cm³"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 500?",
    options: ["D", "C", "L", "M"],
    correct: 0
  },
  {
    question: "What is 0.7 as a percentage?",
    options: ["70%", "7%", "0.7%", "700%"],
    correct: 0
  },
  {
    question: "How many sides does a rhombus have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/3?",
    options: ["5/6", "2/5", "1/6", "3/5"],
    correct: 0
  },
  {
    question: "What is 20% of 300?",
    options: ["60", "20", "30", "150"],
    correct: 0
  },
  {
    question: "What is the diameter of a circle with radius 5cm?",
    options: ["10cm", "5cm", "2.5cm", "15cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 4, 9, 16, ...?",
    options: ["25", "20", "24", "30"],
    correct: 0
  },
  {
    question: "What is the difference between 1.5 and 0.7?",
    options: ["0.8", "0.7", "0.9", "1.2"],
    correct: 0
  },
  {
    question: "What is the product of 2.5 and 4?",
    options: ["10", "6.5", "8", "12.5"],
    correct: 0
  },
  {
    question: "How many weeks are in a year?",
    options: ["52", "48", "50", "54"],
    correct: 0
  },
  {
    question: "What is the area of a parallelogram with base 7cm and height 4cm?",
    options: ["28cm²", "11cm²", "14cm²", "35cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 144?",
    options: ["12", "72", "14", "10"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 10?",
    options: ["X", "V", "L", "C"],
    correct: 0
  },
  {
    question: "What is 0.01 as a fraction in its simplest form?",
    options: ["1/100", "1/10", "1/50", "1/1000"],
    correct: 0
  },
  {
    question: "Solve: z / 2 = 15",
    options: ["z = 30", "z = 7.5", "z = 13", "z = 17"],
    correct: 0
  },
  {
    question: "What is 60% of 50?",
    options: ["30", "20", "10", "40"],
    correct: 0
  },
  {
    question: "How many acute angles are in a right-angled triangle?",
    options: ["2", "1", "3", "0"],
    correct: 0
  },
  {
    question: "What is the mode of 10, 12, 10, 15, 12, 10?",
    options: ["10", "12", "15", "No mode"],
    correct: 0
  },
  {
    question: "What is the difference between 2.5 and 1.8?",
    options: ["0.7", "0.6", "0.8", "1.7"],
    correct: 0
  },
  {
    question: "What is the product of 0.1 and 0.1?",
    options: ["0.01", "0.1", "1.0", "0.001"],
    correct: 0
  },
  {
    question: "How many vertices does a square pyramid have?",
    options: ["5", "4", "6", "8"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 10 and 15?",
    options: ["5", "10", "15", "1"],
    correct: 0
  },
  {
    question: "What is the sum of 3/4 and 1/8?",
    options: ["7/8", "4/12", "4/8", "1/2"],
    correct: 0
  },
  {
    question: "What is 4/5 of 100?",
    options: ["80", "20", "40", "60"],
    correct: 0
  },
  {
    question: "What is the perimeter of an equilateral triangle with side length 9cm?",
    options: ["27cm", "18cm", "9cm", "36cm"],
    correct: 0
  },
  {
    question: "What is 1% of 500?",
    options: ["5", "1", "50", "0.5"],
    correct: 0
  },
  {
    question: "How many months are in 1/2 a year?",
    options: ["6", "12", "3", "9"],
    correct: 0
  },
  {
    question: "What is the square of 12?",
    options: ["144", "24", "12", "100"],
    correct: 0
  },
  {
    question: "What is the value of 200 - 75 + 25?",
    options: ["150", "100", "125", "175"],
    correct: 0
  },
  {
    question: "What is the largest even number less than 15?",
    options: ["14", "12", "10", "8"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(2\+3\) \\times 4</span>?",
    options: ["20", "14", "24", "10"],
    correct: 0
  },
  {
    question: "What is 0.25 as a percentage?",
    options: ["25%", "2.5%", "0.25%", "250%"],
    correct: 0
  },
  {
    question: "How many faces does a cuboid have?",
    options: ["6", "4", "8", "12"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 3 and 5?",
    options: ["15", "3", "5", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/4?",
    options: ["3/4", "1/2", "2/4", "1/8"],
    correct: 0
  },
  {
    question: "What is 15% of 200?",
    options: ["30", "15", "20", "45"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with diameter 14cm?",
    options: ["7cm", "14cm", "28cm", "3.5cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 100, 90, 80, 70, ...?",
    options: ["60", "65", "50", "75"],
    correct: 0
  },
  {
    question: "What is the difference between 5 and 3.2?",
    options: ["1.8", "2.8", "2.2", "1.2"],
    correct: 0
  },
  {
    question: "What is the product of 0.8 and 10?",
    options: ["8", "0.8", "80", "1.0"],
    correct: 0
  },
  {
    question: "How many days are in April?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a trapezoid with parallel sides 6cm and 10cm, and height 5cm?",
    options: ["40cm²", "80cm²", "30cm²", "50cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 64?",
    options: ["4", "8", "16", "2"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 1000?",
    options: ["M", "C", "D", "L"],
    correct: 0
  },
  {
    question: "What is 0.4 as a fraction in its simplest form?",
    options: ["2/5", "4/10", "1/4", "1/2"],
    correct: 0
  },
  {
    question: "Solve: 5x + 10 = 35",
    options: ["x = 5", "x = 9", "x = 10", "x = 25"],
    correct: 0
  },
  {
    question: "What is 70% of 200?",
    options: ["140", "70", "200", "100"],
    correct: 0
  },
  {
    question: "How many vertices does a cone have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5?",
    options: ["3", "2", "4", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.6 and 0.3?",
    options: ["0.9", "0.3", "0.6", "1.0"],
    correct: 0
  },
  {
    question: "What is the quotient of 81 and 9?",
    options: ["9", "8", "7", "6"],
    correct: 0
  },
  {
    question: "How many sides does a heptagon have?",
    options: ["7", "6", "8", "5"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 20 and 30?",
    options: ["10", "5", "20", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 1/5 and 2/5?",
    options: ["3/5", "1/5", "2/5", "3/10"],
    correct: 0
  },
  {
    question: "What is 2/3 of 90?",
    options: ["60", "30", "45", "15"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hexagon with side length 5cm?",
    options: ["30cm", "25cm", "20cm", "35cm"],
    correct: 0
  },
  {
    question: "What is 2% of 400?",
    options: ["8", "4", "2", "80"],
    correct: 0
  },
  {
    question: "How many days are in June?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the square of 13?",
    options: ["169", "26", "13", "121"],
    correct: 0
  },
  {
    question: "What is the value of 75 - 15 + 10?",
    options: ["70", "50", "60", "80"],
    correct: 0
  },
  {
    question: "What is the smallest composite number?",
    options: ["4", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">2^4</span>?",
    options: ["16", "8", "4", "2"],
    correct: 0
  },
  {
    question: "Convert 0.8 to a percentage.",
    options: ["80%", "8%", "0.8%", "800%"],
    correct: 0
  },
  {
    question: "How many faces does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 5 and 10?",
    options: ["10", "5", "20", "50"],
    correct: 0
  },
  {
    question: "What is the sum of 1/6 and 1/3?",
    options: ["1/2", "2/9", "1/3", "1/6"],
    correct: 0
  },
  {
    question: "What is 50% of 120?",
    options: ["60", "120", "50", "240"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 3.5cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["22cm", "11cm", "7cm", "44cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 8, 27, 64, ...?",
    options: ["125", "81", "100", "121"],
    correct: 0
  },
  {
    question: "What is the difference between 10 and 7.5?",
    options: ["2.5", "3.5", "1.5", "0.5"],
    correct: 0
  },
  {
    question: "What is the product of 0.25 and 4?",
    options: ["1", "0.25", "4", "0.5"],
    correct: 0
  },
  {
    question: "How many years are in a decade?",
    options: ["10", "100", "5", "20"],
    correct: 0
  },
  {
    question: "What is the area of a square with a diagonal of length <span class="math-inline">8\\sqrt\{2\}</span> cm?",
    options: ["64cm²", "32cm²", "16cm²", "128cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 169?",
    options: ["13", "14", "12", "15"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 4?",
    options: ["IV", "IIII", "VI", "IX"],
    correct: 0
  },
  {
    question: "What is 0.02 as a fraction in its simplest form?",
    options: ["1/50", "2/100", "1/20", "1/10"],
    correct: 0
  },
  {
    question: "Solve: y / 3 = 9",
    options: ["y = 27", "y = 3", "y = 12", "y = 6"],
    correct: 0
  },
  {
    question: "What is 90% of 100?",
    options: ["90", "10", "100", "9"],
    correct: 0
  },
  {
    question: "How many right angles are in a circle?",
    options: ["4", "2", "1", "8"],
    correct: 0
  },
  {
    question: "What is the median of 10, 15, 5, 20?",
    options: ["12.5", "10", "15", "5"],
    correct: 0
  },
  {
    question: "What is the difference between 3/4 and 1/4?",
    options: ["1/2", "1/4", "2/4", "3/16"],
    correct: 0
  },
  {
    question: "What is the product of 10 and 0.05?",
    options: ["0.5", "5", "0.05", "0.005"],
    correct: 0
  },
  {
    question: "How many edges does a cylinder have?",
    options: ["2", "0", "1", "3"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 16 and 24?",
    options: ["8", "4", "2", "6"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 2/3?",
    options: ["1", "3/3", "2/9", "1/3"],
    correct: 0
  },
  {
    question: "What is 1/5 of 120?",
    options: ["24", "12", "20", "60"],
    correct: 0
  },
  {
    question: "What is the perimeter of a rectangle with length 15cm and width 5cm?",
    options: ["40cm", "75cm", "20cm", "30cm"],
    correct: 0
  },
  {
    question: "What is 75% of 40?",
    options: ["30", "10", "20", "40"],
    correct: 0
  },
  {
    question: "How many minutes are in 1/4 of an hour?",
    options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 14?",
    options: ["196", "28", "14", "169"],
    correct: 0
  },
  {
    question: "What is the value of 120 - 60 + 30?",
    options: ["90", "60", "120", "30"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 30?",
    options: ["29", "23", "27", "19"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">3^3</span>?",
    options: ["27", "9", "6", "81"],
    correct: 0
  },
  {
    question: "Convert 0.1 to a percentage.",
    options: ["10%", "1%", "0.1%", "100%"],
    correct: 0
  },
  {
    question: "How many faces does a triangular prism have?",
    options: ["5", "3", "4", "6"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 6 and 8?",
    options: ["24", "12", "48", "16"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 3/4?",
    options: ["1 1/4", "4/6", "1/2", "3/8"],
    correct: 0
  },
  {
    question: "What is 10% of 150?",
    options: ["15", "10", "150", "5"],
    correct: 0
  },
  {
    question: "What is the area of a circle with diameter 10cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["78.5cm²", "31.4cm²", "100cm²", "50cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 2, 3, 5, 8, ... (Fibonacci)?",
    options: ["13", "12", "11", "10"],
    correct: 0
  },
  {
    question: "What is the difference between 20 and 12.5?",
    options: ["7.5", "8.5", "6.5", "9.5"],
    correct: 0
  },
  {
    question: "What is the product of 0.2 and 5?",
    options: ["1", "0.1", "10", "2.5"],
    correct: 0
  },
  {
    question: "How many hours are in 2 days?",
    options: ["48 hours", "24 hours", "72 hours", "12 hours"],
    correct: 0
  },
  {
    question: "What is the area of a triangle with base 12cm and height 5cm?",
    options: ["30cm²", "60cm²", "17cm²", "24cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 225?",
    options: ["15", "25", "12.5", "5"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 9?",
    options: ["IX", "XI", "VIII", "VIIII"],
    correct: 0
  },
  {
    question: "What is 0.6 as a fraction in its simplest form?",
    options: ["3/5", "6/10", "1/2", "2/3"],
    correct: 0
  },
  {
    question: "Solve: 4a - 3 = 17",
    options: ["a = 5", "a = 4", "a = 20", "a = 3"],
    correct: 0
  },
  {
    question: "What is 25% of 80?",
    options: ["20", "40", "10", "30"],
    correct: 0
  },
  {
    question: "How many degrees are in a full circle?",
    options: ["360 degrees", "180 degrees", "90 degrees", "270 degrees"],
    correct: 0
  },
  {
    question: "What is the mean of 5, 5, 5, 5?",
    options: ["5", "0", "10", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 0.75 and 0.25?",
    options: ["1", "0.5", "1.5", "0.9"],
    correct: 0
  },
  {
    question: "What is the quotient of 144 and 12?",
    options: ["12", "144", "1", "10"],
    correct: 0
  },
  {
    question: "How many sides does a nonagon have?",
    options: ["9", "7", "8", "10"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 9 and 27?",
    options: ["9", "3", "1", "27"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 1/3?",
    options: ["7/12", "2/7", "1/12", "5/12"],
    correct: 0
  },
  {
    question: "What is 3/5 of 200?",
    options: ["120", "40", "60", "80"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular octagon with side length 3cm?",
    options: ["24cm", "15cm", "18cm", "21cm"],
    correct: 0
  },
  {
    question: "What is 3% of 600?",
    options: ["18", "6", "3", "60"],
    correct: 0
  },
  {
    question: "How many seconds are in 1 hour?",
    options: ["3600 seconds", "60 seconds", "120 seconds", "360 seconds"],
    correct: 0
  },
  {
    question: "What is the square of 15?",
    options: ["225", "30", "15", "100"],
    correct: 0
  },
  {
    question: "What is the value of 500 - 150 + 50?",
    options: ["400", "300", "350", "450"],
    correct: 0
  },
  {
    question: "What is the sum of the first 5 prime numbers?",
    options: ["28", "26", "10", "17"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(5\-2\) \\times 6</span>?",
    options: ["18", "30", "12", "3"],
    correct: 0
  },
  {
    question: "Convert 0.75 to a fraction in its simplest form.",
    options: ["3/4", "75/100", "1/2", "3/5"],
    correct: 0
  },
  {
    question: "How many edges does a triangular pyramid have?",
    options: ["6", "4", "8", "5"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 7 and 2?",
    options: ["14", "2", "7", "9"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/5?",
    options: ["7/10", "2/7", "3/10", "1/10"],
    correct: 0
  },
  {
    question: "What is 40% of 300?",
    options: ["120", "40", "300", "60"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 44cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["7cm", "14cm", "22cm", "3.5cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, ... (Fibonacci starting at 1,1)?",
    options: ["8", "7", "6", "9"],
    correct: 0
  },
  {
    question: "What is the difference between 3.8 and 1.9?",
    options: ["1.9", "2.1", "2.0", "1.8"],
    correct: 0
  },
  {
    question: "What is the product of 0.02 and 100?",
    options: ["2", "0.2", "20", "0.002"],
    correct: 0
  },
  {
    question: "How many days are in July?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a composite shape made of a 5x5 square and a 3x3 square?",
    options: ["34cm²", "25cm²", "9cm²", "16cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 125?",
    options: ["5", "25", "10", "15"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 6?",
    options: ["VI", "IV", "VII", "V"],
    correct: 0
  },
  {
    question: "What is 0.07 as a percentage?",
    options: ["7%", "0.7%", "70%", "700%"],
    correct: 0
  },
  {
    question: "Solve: x + 12 = 30",
    options: ["x = 18", "x = 42", "x = 20", "x = 10"],
    correct: 0
  },
  {
    question: "What is 80% of 200?",
    options: ["160", "80", "200", "40"],
    correct: 0
  },
  {
    question: "How many obtuse angles can a triangle have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the mean of 10, 20, 30?",
    options: ["20", "10", "30", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 1.25 and 0.5?",
    options: ["1.75", "1.5", "1.25", "0.75"],
    correct: 0
  },
  {
    question: "What is the quotient of 120 and 10?",
    options: ["12", "10", "20", "1"],
    correct: 0
  },
  {
    question: "How many sides does a decagon have?",
    options: ["10", "8", "9", "12"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 14 and 21?",
    options: ["7", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/9?",
    options: ["7/9", "3/12", "1/3", "2/9"],
    correct: 0
  },
  {
    question: "What is 1/2 of 150?",
    options: ["75", "150", "300", "50"],
    correct: 0
  },
  {
    question: "What is the perimeter of a square with area 36cm²?",
    options: ["24cm", "6cm", "12cm", "36cm"],
    correct: 0
  },
  {
    question: "What is 4% of 250?",
    options: ["10", "4", "25", "100"],
    correct: 0
  },
  {
    question: "How many hours are in a week?",
    options: ["168 hours", "24 hours", "7 hours", "48 hours"],
    correct: 0
  },
  {
    question: "What is the square of 16?",
    options: ["256", "32", "16", "100"],
    correct: 0
  },
  {
    question: "What is the value of 1000 - 250 + 50?",
    options: ["800", "700", "750", "900"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 10?",
    options: ["11", "13", "17", "19"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(10\+5\)/3</span>?",
    options: ["5", "15", "3", "10"],
    correct: 0
  },
  {
    question: "Convert 0.3 to a percentage.",
    options: ["30%", "3%", "0.3%", "300%"],
    correct: 0
  },
  {
    question: "How many vertices does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 8 and 12?",
    options: ["24", "4", "8", "12"],
    correct: 0
  },
  {
    question: "What is the sum of 3/5 and 1/10?",
    options: ["7/10", "4/15", "3/10", "1/5"],
    correct: 0
  },
  {
    question: "What is 60% of 200?",
    options: ["120", "60", "200", "40"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with area 154cm² (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["7cm", "14cm", "21cm", "3.5cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 12, 14, 16, ...?",
    options: ["18", "20", "17", "19"],
    correct: 0
  },
  {
    question: "What is the difference between 5.5 and 2.3?",
    options: ["3.2", "3.0", "3.5", "2.2"],
    correct: 0
  },
  {
    question: "What is the product of 0.7 and 10?",
    options: ["7", "0.7", "70", "0.07"],
    correct: 0
  },
  {
    question: "How many days are in August?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a parallelogram with base 10cm and height 6cm?",
    options: ["60cm²", "30cm²", "16cm²", "20cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 216?",
    options: ["6", "16", "36", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 1?",
    options: ["I", "V", "X", "C"],
    correct: 0
  },
  {
    question: "What is 0.9 as a fraction in its simplest form?",
    options: ["9/10", "1/9", "3/5", "1/2"],
    correct: 0
  },
  {
    question: "Solve: 2x + 1 = 15",
    options: ["x = 7", "x = 8", "x = 6", "x = 14"],
    correct: 0
  },
  {
    question: "What is 15% of 60?",
    options: ["9", "15", "6", "3"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a square have?",
    options: ["4", "2", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mode of 1, 2, 3, 4, 5?",
    options: ["No mode", "1", "3", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 2.1 and 3.9?",
    options: ["6", "5", "5.1", "6.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 200 and 25?",
    options: ["8", "10", "4", "20"],
    correct: 0
  },
  {
    question: "How many sides does a pentagon have?",
    options: ["5", "6", "4", "7"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 15 and 20?",
    options: ["5", "1", "10", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 1/8 and 3/8?",
    options: ["1/2", "4/16", "2/8", "3/8"],
    correct: 0
  },
  {
    question: "What is 3/4 of 160?",
    options: ["120", "40", "80", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular nonagon with side length 2cm?",
    options: ["18cm", "9cm", "12cm", "10cm"],
    correct: 0
  },
  {
    question: "What is 6% of 300?",
    options: ["18", "6", "30", "12"],
    correct: 0
  },
  {
    question: "How many minutes are in 2.5 hours?",
    options: ["150 minutes", "120 minutes", "180 minutes", "90 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 17?",
    options: ["289", "34", "17", "256"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">2 \\times \(5 \+ 3\)</span>?",
    options: ["16", "13", "10", "8"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 20?",
    options: ["23", "29", "21", "25"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">10^2</span>?",
    options: ["100", "20", "10", "1000"],
    correct: 0
  },
  {
    question: "Convert 0.05 to a percentage.",
    options: ["5%", "0.5%", "50%", "500%"],
    correct: 0
  },
  {
    question: "How many faces does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 9 and 12?",
    options: ["36", "12", "9", "108"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/4?",
    options: ["7/12", "2/7", "1/12", "5/12"],
    correct: 0
  },
  {
    question: "What is 80% of 50?",
    options: ["40", "80", "50", "10"],
    correct: 0
  },
  {
    question: "What is the diameter of a circle with radius 11cm?",
    options: ["22cm", "11cm", "5.5cm", "33cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 100, 95, 90, 85, ...?",
    options: ["80", "75", "90", "82"],
    correct: 0
  },
  {
    question: "What is the difference between 8.2 and 4.7?",
    options: ["3.5", "4.5", "3.2", "4.2"],
    correct: 0
  },
  {
    question: "What is the product of 0.3 and 0.4?",
    options: ["0.12", "1.2", "0.012", "0.7"],
    correct: 0
  },
  {
    question: "How many days are in September?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 10cm and height 4cm?",
    options: ["20cm²", "40cm²", "14cm²", "30cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 256?",
    options: ["16", "26", "13", "14"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 2?",
    options: ["II", "I", "V", "III"],
    correct: 0
  },
  {
    question: "What is 0.08 as a fraction in its simplest form?",
    options: ["2/25", "8/100", "1/8", "1/10"],
    correct: 0
  },
  {
    question: "Solve: y + 20 = 50",
    options: ["y = 30", "y = 70", "y = 2.5", "y = 40"],
    correct: 0
  },
  {
    question: "What is 20% of 40?",
    options: ["8", "20", "4", "10"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a rectangle have?",
    options: ["2", "4", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mode of 1, 1, 2, 3, 3, 3, 4?",
    options: ["3", "1", "2", "4"],
    correct: 0
  },
  {
    question: "What is the sum of 0.05 and 0.15?",
    options: ["0.2", "0.1", "0.25", "0.15"],
    correct: 0
  },
  {
    question: "What is the quotient of 250 and 50?",
    options: ["5", "2", "10", "25"],
    correct: 0
  },
  {
    question: "How many sides does a dodecagon have?",
    options: ["12", "10", "11", "13"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 24 and 36?",
    options: ["12", "6", "4", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 5/6 and 1/6?",
    options: ["1", "6/12", "5/36", "4/6"],
    correct: 0
  },
  {
    question: "What is 1/4 of 240?",
    options: ["60", "24", "120", "40"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular heptagon with side length 4cm?",
    options: ["28cm", "24cm", "32cm", "20cm"],
    correct: 0
  },
  {
    question: "What is 7% of 100?",
    options: ["7", "1", "10", "70"],
    correct: 0
  },
  {
    question: "How many years are in a century?",
    options: ["100", "10", "50", "1000"],
    correct: 0
  },
  {
    question: "What is the square of 18?",
    options: ["324", "36", "18", "256"],
    correct: 0
  },
  {
    question: "What is the value of 100 + 20 - 5?",
    options: ["115", "125", "105", "110"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 40?",
    options: ["37", "31", "39", "35"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(7\+3\) \\times 2 \- 5</span>?",
    options: ["15", "20", "10", "17"],
    correct: 0
  },
  {
    question: "Convert 0.01 to a percentage.",
    options: ["1%", "0.1%", "10%", "100%"],
    correct: 0
  },
  {
    question: "How many faces does a hexagonal prism have?",
    options: ["8", "6", "7", "12"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 10 and 15?",
    options: ["30", "15", "10", "150"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/6?",
    options: ["5/6", "3/9", "1/2", "1/3"],
    correct: 0
  },
  {
    question: "What is 90% of 50?",
    options: ["45", "90", "50", "5"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with diameter 20cm?",
    options: ["10cm", "20cm", "5cm", "40cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 2, 4, 7, 11, ...?",
    options: ["16", "15", "14", "13"],
    correct: 0
  },
  {
    question: "What is the difference between 12.3 and 4.5?",
    options: ["7.8", "8.8", "7.7", "6.8"],
    correct: 0
  },
  {
    question: "What is the product of 0.6 and 0.5?",
    options: ["0.3", "3", "0.03", "1.1"],
    correct: 0
  },
  {
    question: "How many days are in October?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with sides 3cm, 4cm, 5cm?",
    options: ["6cm²", "12cm²", "10cm²", "15cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 343?",
    options: ["7", "49", "3", "17"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 7?",
    options: ["VII", "VI", "VIII", "V"],
    correct: 0
  },
  {
    question: "What is 0.005 as a fraction in its simplest form?",
    options: ["1/200", "5/1000", "1/50", "1/100"],
    correct: 0
  },
  {
    question: "Solve: 3b + 2 = 23",
    options: ["b = 7", "b = 21", "b = 6", "b = 8"],
    correct: 0
  },
  {
    question: "What is 30% of 90?",
    options: ["27", "30", "9", "18"],
    correct: 0
  },
  {
    question: "How many degrees are in an equilateral triangle?",
    options: ["60 degrees per angle", "90 degrees per angle", "180 degrees total", "45 degrees per angle"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 1, 1, 1, 1?",
    options: ["1", "0", "5", "0.5"],
    correct: 0
  },
  {
    question: "What is the sum of 3.5 and 2.5?",
    options: ["6", "5", "6.5", "5.5"],
    correct: 0
  },
  {
    question: "What is the quotient of 360 and 6?",
    options: ["60", "36", "6", "10"],
    correct: 0
  },
  {
    question: "How many sides does an undecagon have?",
    options: ["11", "10", "12", "9"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 30 and 45?",
    options: ["15", "5", "3", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/6?",
    options: ["2/3", "2/8", "1/6", "1/3"],
    correct: 0
  },
  {
    question: "What is 2/5 of 150?",
    options: ["60", "30", "75", "90"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular decagon with side length 3cm?",
    options: ["30cm", "20cm", "25cm", "15cm"],
    correct: 0
  },
  {
    question: "What is 8% of 50?",
    options: ["4", "8", "5", "10"],
    correct: 0
  },
  {
    question: "How many days are in November?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the square of 19?",
    options: ["361", "38", "19", "256"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(8\-2\) \\times 3 \+ 1</span>?",
    options: ["19", "18", "24", "10"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 50?",
    options: ["53", "59", "51", "57"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">5^2 \+ 3^2</span>?",
    options: ["34", "25", "9", "16"],
    correct: 0
  },
  {
    question: "Convert 0.2 to a percentage.",
    options: ["20%", "2%", "0.2%", "200%"],
    correct: 0
  },
  {
    question: "How many faces does a cylinder have?",
    options: ["3", "2", "1", "0"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 11 and 2?",
    options: ["22", "11", "2", "13"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 1/5?",
    options: ["9/20", "2/9", "1/20", "4/5"],
    correct: 0
  },
  {
    question: "What is 100% of 75?",
    options: ["75", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 10cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["62.8cm", "31.4cm", "10cm", "20cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 2, 6, 10, 14, ...?",
    options: ["18", "16", "20", "22"],
    correct: 0
  },
  {
    question: "What is the difference between 15.0 and 8.7?",
    options: ["6.3", "7.3", "5.3", "6.7"],
    correct: 0
  },
  {
    question: "What is the product of 0.9 and 0.1?",
    options: ["0.09", "0.9", "0.1", "0.009"],
    correct: 0
  },
  {
    question: "How many days are in December?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a square with perimeter 20cm?",
    options: ["25cm²", "20cm²", "10cm²", "40cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 512?",
    options: ["8", "12", "16", "6"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 8?",
    options: ["VIII", "IX", "VII", "X"],
    correct: 0
  },
  {
    question: "What is 0.15 as a fraction in its simplest form?",
    options: ["3/20", "15/100", "1/5", "1/10"],
    correct: 0
  },
  {
    question: "Solve: y / 5 = 10",
    options: ["y = 50", "y = 2", "y = 15", "y = 5"],
    correct: 0
  },
  {
    question: "What is 40% of 80?",
    options: ["32", "40", "80", "16"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does an equilateral triangle have?",
    options: ["3", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 3, 5, 6, 9?",
    options: ["5", "3", "6", "4"],
    correct: 0
  },
  {
    question: "What is the sum of 0.8 and 0.4?",
    options: ["1.2", "0.4", "0.8", "1.0"],
    correct: 0
  },
  {
    question: "What is the quotient of 400 and 8?",
    options: ["50", "40", "8", "25"],
    correct: 0
  },
  {
    question: "How many sides does a tridecagon have?",
    options: ["13", "12", "14", "11"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 40 and 60?",
    options: ["20", "10", "40", "60"],
    correct: 0
  },
  {
    question: "What is the sum of 3/4 and 1/2?",
    options: ["1 1/4", "4/6", "3/8", "1/2"],
    correct: 0
  },
  {
    question: "What is 1/3 of 270?",
    options: ["90", "30", "60", "27"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hendecagon with side length 5cm?",
    options: ["55cm", "50cm", "45cm", "60cm"],
    correct: 0
  },
  {
    question: "What is 9% of 200?",
    options: ["18", "9", "20", "36"],
    correct: 0
  },
  {
    question: "How many minutes are in 1.5 hours?",
    options: ["90 minutes", "60 minutes", "150 minutes", "120 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 20?",
    options: ["400", "40", "20", "100"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(10\+2\) \\times 3 \- 6</span>?",
    options: ["30", "36", "18", "24"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 100?",
    options: ["97", "99", "93", "91"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">2^5</span>?",
    options: ["32", "10", "4", "25"],
    correct: 0
  },
  {
    question: "Convert 0.35 to a percentage.",
    options: ["35%", "3.5%", "0.35%", "350%"],
    correct: 0
  },
  {
    question: "How many vertices does a square based pyramid have?",
    options: ["5", "4", "6", "8"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 12 and 15?",
    options: ["60", "12", "15", "180"],
    correct: 0
  },
  {
    question: "What is the sum of 1/6 and 1/4?",
    options: ["5/12", "2/10", "1/24", "1/3"],
    correct: 0
  },
  {
    question: "What is 50% of 300?",
    options: ["150", "300", "50", "600"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 22cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["3.5cm", "7cm", "11cm", "1cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 50, 45, 40, 35, ...?",
    options: ["30", "25", "32", "38"],
    correct: 0
  },
  {
    question: "What is the difference between 9.1 and 3.9?",
    options: ["5.2", "6.2", "4.2", "5.1"],
    correct: 0
  },
  {
    question: "What is the product of 0.8 and 0.3?",
    options: ["0.24", "2.4", "0.024", "1.1"],
    correct: 0
  },
  {
    question: "How many days are in January?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a composite shape made of a 6x4 rectangle and a 2x3 rectangle?",
    options: ["30cm²", "24cm²", "6cm²", "18cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 729?",
    options: ["9", "27", "8", "7"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 3?",
    options: ["III", "II", "V", "IV"],
    correct: 0
  },
  {
    question: "What is 0.25 as a fraction in its simplest form?",
    options: ["1/4", "25/100", "1/2", "1/5"],
    correct: 0
  },
  {
    question: "Solve: x / 6 = 7",
    options: ["x = 42", "x = 13", "x = 1", "x = 7"],
    correct: 0
  },
  {
    question: "What is 10% of 250?",
    options: ["25", "10", "250", "50"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a circle have?",
    options: ["Infinite", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5, 6, 7?",
    options: ["4", "3", "5", "7"],
    correct: 0
  },
  {
    question: "What is the sum of 1.7 and 2.3?",
    options: ["4", "3", "4.1", "3.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 600 and 100?",
    options: ["6", "60", "10", "1"],
    correct: 0
  },
  {
    question: "How many sides does a quadrilateral have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 100 and 50?",
    options: ["50", "10", "25", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 2/5 and 3/10?",
    options: ["7/10", "5/15", "1/2", "3/5"],
    correct: 0
  },
  {
    question: "What is 4/5 of 200?",
    options: ["160", "40", "80", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular dodecagon with side length 2cm?",
    options: ["24cm", "12cm", "20cm", "18cm"],
    correct: 0
  },
  {
    question: "What is 12% of 100?",
    options: ["12", "10", "1", "100"],
    correct: 0
  },
  {
    question: "How many weeks are in 6 months?",
    options: ["26", "24", "28", "20"],
    correct: 0
  },
  {
    question: "What is the square of 25?",
    options: ["625", "50", "25", "125"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(15\-5\) \\times 2 \+ 10</span>?",
    options: ["30", "20", "10", "40"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 100?",
    options: ["101", "103", "107", "109"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">3^4</span>?",
    options: ["81", "12", "9", "27"],
    correct: 0
  },
  {
    question: "Convert 0.45 to a percentage.",
    options: ["45%", "4.5%", "0.45%", "450%"],
    correct: 0
  },
  {
    question: "How many vertices does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 14 and 7?",
    options: ["14", "7", "28", "21"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/8?",
    options: ["5/8", "2/10", "1/16", "3/8"],
    correct: 0
  },
  {
    question: "What is 75% of 120?",
    options: ["90", "30", "60", "120"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with area 616cm² (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["14cm", "7cm", "21cm", "28cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 3, 6, 10, 15, ...?",
    options: ["21", "20", "19", "22"],
    correct: 0
  },
  {
    question: "What is the difference between 20.0 and 15.5?",
    options: ["4.5", "5.5", "3.5", "4.0"],
    correct: 0
  },
  {
    question: "What is the product of 1.2 and 0.5?",
    options: ["0.6", "6", "0.06", "1.7"],
    correct: 0
  },
  {
    question: "How many days are in February in a leap year?",
    options: ["29", "28", "30", "31"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 20cm and width 5cm?",
    options: ["100cm²", "50cm²", "25cm²", "75cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 1?",
    options: ["1", "0", "10", "100"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 5?",
    options: ["V", "I", "X", "L"],
    correct: 0
  },
  {
    question: "What is 0.04 as a fraction in its simplest form?",
    options: ["1/25", "4/100", "1/4", "1/10"],
    correct: 0
  },
  {
    question: "Solve: 5x - 7 = 18",
    options: ["x = 5", "x = 25", "x = 4", "x = 6"],
    correct: 0
  },
  {
    question: "What is 60% of 70?",
    options: ["42", "60", "70", "10"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular pentagon have?",
    options: ["5", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4?",
    options: ["2.5", "2", "3", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 0.9 and 0.6?",
    options: ["1.5", "0.3", "0.96", "1.0"],
    correct: 0
  },
  {
    question: "What is the quotient of 900 and 3?",
    options: ["300", "30", "90", "3"],
    correct: 0
  },
  {
    question: "How many sides does a quadradecagon have?",
    options: ["14", "12", "13", "15"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 50 and 75?",
    options: ["25", "5", "10", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/4?",
    options: ["11/12", "3/7", "2/12", "5/12"],
    correct: 0
  },
  {
    question: "What is 1/5 of 250?",
    options: ["50", "25", "125", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a kite with sides 5cm, 5cm, 8cm, 8cm?",
    options: ["26cm", "13cm", "16cm", "10cm"],
    correct: 0
  },
  {
    question: "What is 15% of 80?",
    options: ["12", "15", "8", "30"],
    correct: 0
  },
  {
    question: "How many minutes are in 3 hours and 20 minutes?",
    options: ["200 minutes", "180 minutes", "220 minutes", "320 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 21?",
    options: ["441", "42", "21", "400"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(20\-4\)/2 \+ 3</span>?",
    options: ["11", "8", "16", "10"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 150?",
    options: ["151", "157", "163", "149"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">2^3 \+ 3^2</span>?",
    options: ["17", "12", "15", "18"],
    correct: 0
  },
  {
    question: "Convert 0.88 to a percentage.",
    options: ["88%", "8.8%", "0.88%", "880%"],
    correct: 0
  },
  {
    question: "How many vertices does a cone have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 13 and 2?",
    options: ["26", "13", "2", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/5?",
    options: ["8/15", "2/8", "1/15", "5/15"],
    correct: 0
  },
  {
    question: "What is 10% of 350?",
    options: ["35", "10", "350", "70"],
    correct: 0
  },
  {
    question: "What is the area of a circle with radius 1cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["3.14cm²", "6.28cm²", "1cm²", "2cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 15, 20, 25, ...?",
    options: ["30", "35", "28", "27"],
    correct: 0
  },
  {
    question: "What is the difference between 7 and 2.5?",
    options: ["4.5", "5.5", "3.5", "4.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.25 and 0.4?",
    options: ["0.1", "1", "0.01", "0.29"],
    correct: 0
  },
  {
    question: "How many days are in a common year?",
    options: ["365", "366", "364", "360"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 7cm and height 4cm?",
    options: ["14cm²", "28cm²", "11cm²", "20cm²"],
    correct: 0
  },
  {
    question: "What is the square root of 289?",
    options: ["17", "16", "18", "19"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 40?",
    options: ["XL", "LX", "XXXX", "C"],
    correct: 0
  },
  {
    question: "What is 0.09 as a percentage?",
    options: ["9%", "0.9%", "90%", "900%"],
    correct: 0
  },
  {
    question: "Solve: 4z - 10 = 26",
    options: ["z = 9", "z = 36", "z = 4", "z = 8"],
    correct: 0
  },
  {
    question: "What is 70% of 50?",
    options: ["35", "70", "50", "10"],
    correct: 0
  },
  {
    question: "How many degrees are in a right angle?",
    options: ["90 degrees", "180 degrees", "45 degrees", "360 degrees"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 5, 9?",
    options: ["5", "1", "9", "3"],
    correct: 0
  },
  {
    question: "What is the sum of 2.5 and 3.6?",
    options: ["6.1", "5.1", "6.0", "5.9"],
    correct: 0
  },
  {
    question: "What is the quotient of 120 and 4?",
    options: ["30", "12", "40", "20"],
    correct: 0
  },
  {
    question: "How many sides does a pentadecagon have?",
    options: ["15", "14", "16", "13"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 18 and 27?",
    options: ["9", "3", "6", "18"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 2/3?",
    options: ["1 1/6", "3/5", "1/6", "1/3"],
    correct: 0
  },
  {
    question: "What is 3/5 of 150?",
    options: ["90", "30", "60", "120"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular tridecagon with side length 3cm?",
    options: ["39cm", "36cm", "30cm", "42cm"],
    correct: 0
  },
  {
    question: "What is 20% of 60?",
    options: ["12", "20", "6", "3"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.5 hours?",
    options: ["30 minutes", "15 minutes", "45 minutes", "60 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 22?",
    options: ["484", "44", "22", "441"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(25\-5\)/5 \+ 1</span>?",
    options: ["5", "4", "6", "10"],
    correct: 0
  },
  {
    question: "What is the sum of the first 6 prime numbers?",
    options: ["41", "28", "37", "39"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">4^3</span>?",
    options: ["64", "16", "12", "256"],
    correct: 0
  },
  {
    question: "Convert 0.001 to a percentage.",
    options: ["0.1%", "1%", "0.01%", "10%"],
    correct: 0
  },
  {
    question: "How many vertices does a triangular prism have?",
    options: ["6", "5", "8", "9"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 16 and 4?",
    options: ["16", "4", "32", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 2/9?",
    options: ["5/9", "3/12", "1/3", "2/9"],
    correct: 0
  },
  {
    question: "What is 25% of 240?",
    options: ["60", "25", "120", "80"],
    correct: 0
  },
  {
    question: "What is the area of a circle with radius 2cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["12.56cm²", "6.28cm²", "4cm²", "8cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 8, 27, 64, ... (cubed numbers)?",
    options: ["125", "100", "81", "144"],
    correct: 0
  },
  {
    question: "What is the difference between 10.0 and 3.3?",
    options: ["6.7", "7.7", "6.0", "7.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.7 and 0.2?",
    options: ["0.14", "1.4", "0.014", "0.9"],
    correct: 0
  },
  {
    question: "How many days are in March?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a parallelogram with base 12cm and height 5cm?",
    options: ["60cm²", "30cm²", "17cm²", "24cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 1000?",
    options: ["10", "100", "1", "50"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 100?",
    options: ["C", "D", "L", "M"],
    correct: 0
  },
  {
    question: "What is 0.3 as a fraction in its simplest form?",
    options: ["3/10", "1/3", "1/5", "3/5"],
    correct: 0
  },
  {
    question: "Solve: x + 7 = 15",
    options: ["x = 8", "x = 22", "x = 7", "x = 10"],
    correct: 0
  },
  {
    question: "What is 80% of 10?",
    options: ["8", "10", "1", "2"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular hexagon have?",
    options: ["6", "3", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 4, 6?",
    options: ["4", "2", "6", "3"],
    correct: 0
  },
  {
    question: "What is the sum of 1.1 and 2.2?",
    options: ["3.3", "3.0", "3.1", "2.3"],
    correct: 0
  },
  {
    question: "What is the quotient of 45 and 9?",
    options: ["5", "9", "4", "6"],
    correct: 0
  },
  {
    question: "How many sides does a heptadecagon have?",
    options: ["17", "16", "18", "15"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 60 and 90?",
    options: ["30", "10", "15", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 1/8 and 1/4?",
    options: ["3/8", "2/12", "1/2", "1/4"],
    correct: 0
  },
  {
    question: "What is 1/2 of 250?",
    options: ["125", "500", "25", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular pentadecagon with side length 2cm?",
    options: ["30cm", "20cm", "25cm", "15cm"],
    correct: 0
  },
  {
    question: "What is 2% of 50?",
    options: ["1", "2", "5", "10"],
    correct: 0
  },
  {
    question: "How many minutes are in 1/3 of an hour?",
    options: ["20 minutes", "15 minutes", "30 minutes", "10 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 23?",
    options: ["529", "46", "23", "484"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(30\-10\)/4 \+ 2</span>?",
    options: ["7", "5", "8", "6"],
    correct: 0
  },
  {
    question: "What is the sum of the first 7 prime numbers?",
    options: ["58", "41", "48", "50"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">6^2</span>?",
    options: ["36", "12", "6", "216"],
    correct: 0
  },
  {
    question: "Convert 0.65 to a percentage.",
    options: ["65%", "6.5%", "0.65%", "650%"],
    correct: 0
  },
  {
    question: "How many vertices does a cylinder have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 18 and 9?",
    options: ["18", "9", "36", "27"],
    correct: 0
  },
  {
    question: "What is the sum of 3/4 and 1/3?",
    options: ["13/12", "4/7", "1/12", "7/12"],
    correct: 0
  },
  {
    question: "What is 75% of 200?",
    options: ["150", "75", "200", "100"],
    correct: 0
  },
  {
    question: "What is the area of a circle with diameter 4cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["12.56cm²", "6.28cm²", "4cm²", "8cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 20, 30, 40, ...?",
    options: ["50", "60", "45", "55"],
    correct: 0
  },
  {
    question: "What is the difference between 12.0 and 7.1?",
    options: ["4.9", "5.9", "4.0", "5.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.05 and 10?",
    options: ["0.5", "5", "0.005", "0.01"],
    correct: 0
  },
  {
    question: "How many days are in April?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a trapezoid with parallel sides 8cm and 12cm, and height 5cm?",
    options: ["50cm²", "100cm²", "20cm²", "60cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 8?",
    options: ["2", "4", "1", "3"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 90?",
    options: ["XC", "CX", "LXXXX", "VL"],
    correct: 0
  },
  {
    question: "What is 0.1 as a fraction in its simplest form?",
    options: ["1/10", "1/5", "1/2", "1/100"],
    correct: 0
  },
  {
    question: "Solve: 2x + 5 = 19",
    options: ["x = 7", "x = 14", "x = 12", "x = 6"],
    correct: 0
  },
  {
    question: "What is 50% of 90?",
    options: ["45", "90", "50", "180"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular heptagon have?",
    options: ["7", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 10, 10, 10, 10?",
    options: ["10", "0", "40", "1"],
    correct: 0
  },
  {
    question: "What is the sum of 0.3 and 0.7?",
    options: ["1", "0.4", "0.7", "1.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 72 and 8?",
    options: ["9", "8", "7", "6"],
    correct: 0
  },
  {
    question: "How many sides does a hexadecagon have?",
    options: ["16", "15", "17", "14"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 70 and 105?",
    options: ["35", "5", "7", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/7?",
    options: ["9/14", "2/9", "1/14", "1/2"],
    correct: 0
  },
  {
    question: "What is 3/4 of 240?",
    options: ["180", "60", "120", "200"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hexadecagon with side length 1cm?",
    options: ["16cm", "8cm", "10cm", "12cm"],
    correct: 0
  },
  {
    question: "What is 25% of 60?",
    options: ["15", "25", "6", "30"],
    correct: 0
  },
  {
    question: "How many hours are in 3.5 days?",
    options: ["84 hours", "72 hours", "96 hours", "60 hours"],
    correct: 0
  },
  {
    question: "What is the square of 24?",
    options: ["576", "48", "24", "529"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(100\-20\)/10 \+ 5</span>?",
    options: ["13", "8", "10", "15"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 200?",
    options: ["211", "203", "209", "201"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">7^2</span>?",
    options: ["49", "14", "7", "343"],
    correct: 0
  },
  {
    question: "Convert 0.12 to a percentage.",
    options: ["12%", "1.2%", "0.12%", "120%"],
    correct: 0
  },
  {
    question: "How many vertices does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 20 and 5?",
    options: ["20", "5", "10", "100"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 3/8?",
    options: ["5/8", "4/12", "1/2", "3/8"],
    correct: 0
  },
  {
    question: "What is 80% of 250?",
    options: ["200", "80", "250", "50"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 11cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["1.75cm", "3.5cm", "7cm", "0.5cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 3, 6, 9, 12, ...?",
    options: ["15", "18", "14", "16"],
    correct: 0
  },
  {
    question: "What is the difference between 15.0 and 9.9?",
    options: ["5.1", "6.1", "4.1", "5.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.4 and 0.6?",
    options: ["0.24", "2.4", "0.024", "1.0"],
    correct: 0
  },
  {
    question: "How many days are in May?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with sides 5cm, 12cm, 13cm?",
    options: ["30cm²", "60cm²", "15cm²", "25cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 27?",
    options: ["3", "9", "6", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 60?",
    options: ["LX", "XL", "LXX", "C"],
    correct: 0
  },
  {
    question: "What is 0.025 as a fraction in its simplest form?",
    options: ["1/40", "25/1000", "1/25", "1/10"],
    correct: 0
  },
  {
    question: "Solve: x / 7 = 8",
    options: ["x = 56", "x = 15", "x = 1", "x = 8"],
    correct: 0
  },
  {
    question: "What is 30% of 120?",
    options: ["36", "30", "12", "24"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular octagon have?",
    options: ["8", "4", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?",
    options: ["5.5", "5", "6", "6.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.1 and 0.01?",
    options: ["0.11", "0.1", "0.01", "0.111"],
    correct: 0
  },
  {
    question: "What is the quotient of 180 and 9?",
    options: ["20", "18", "9", "10"],
    correct: 0
  },
  {
    question: "How many sides does a chiliagon have?",
    options: ["1000", "100", "10", "10000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 12 and 16?",
    options: ["4", "2", "6", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 5/8 and 1/4?",
    options: ["7/8", "6/12", "1/2", "5/8"],
    correct: 0
  },
  {
    question: "What is 2/3 of 180?",
    options: ["120", "60", "90", "30"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular chiliagon with side length 1mm?",
    options: ["1000mm", "100mm", "10mm", "1mm"],
    correct: 0
  },
  {
    question: "What is 5% of 300?",
    options: ["15", "5", "30", "60"],
    correct: 0
  },
  {
    question: "How many hours are in 2.5 days?",
    options: ["60 hours", "48 hours", "72 hours", "36 hours"],
    correct: 0
  },
  {
    question: "What is the square of 26?",
    options: ["676", "52", "26", "625"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(50\-10\)/8 \+ 2</span>?",
    options: ["7", "5", "8", "6"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 300?",
    options: ["307", "311", "301", "313"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">8^2</span>?",
    options: ["64", "16", "8", "128"],
    correct: 0
  },
  {
    question: "Convert 0.7 to a fraction in its simplest form.",
    options: ["7/10", "1/7", "1/2", "3/5"],
    correct: 0
  },
  {
    question: "How many vertices does a cube have?",
    options: ["8", "6", "12", "4"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 20 and 25?",
    options: ["100", "20", "25", "50"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 3/10?",
    options: ["8/10", "4/12", "1/2", "3/10"],
    correct: 0
  },
  {
    question: "What is 100% of 150?",
    options: ["150", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 5cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["31.4cm", "15.7cm", "10cm", "20cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 8, 6, 4, ...?",
    options: ["2", "0", "1", "3"],
    correct: 0
  },
  {
    question: "What is the difference between 18.5 and 9.2?",
    options: ["9.3", "8.3", "9.0", "8.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.1 and 1.5?",
    options: ["0.15", "1.5", "0.015", "0.16"],
    correct: 0
  },
  {
    question: "How many days are in June?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a square with a diagonal of length 6cm?",
    options: ["18cm²", "36cm²", "9cm²", "12cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 64?",
    options: ["4", "8", "16", "2"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 70?",
    options: ["LXX", "XL", "LX", "C"],
    correct: 0
  },
  {
    question: "What is 0.35 as a fraction in its simplest form?",
    options: ["7/20", "35/100", "1/3", "1/5"],
    correct: 0
  },
  {
    question: "Solve: x / 8 = 5",
    options: ["x = 40", "x = 13", "x = 1", "x = 8"],
    correct: 0
  },
  {
    question: "What is 10% of 450?",
    options: ["45", "10", "450", "90"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular nonagon have?",
    options: ["9", "3", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 3, 5, 7, 9?",
    options: ["5", "3", "7", "9"],
    correct: 0
  },
  {
    question: "What is the sum of 0.25 and 0.75?",
    options: ["1", "0.5", "1.5", "0.9"],
    correct: 0
  },
  {
    question: "What is the quotient of 800 and 20?",
    options: ["40", "80", "20", "10"],
    correct: 0
  },
  {
    question: "How many sides does a hectogon have?",
    options: ["100", "10", "1000", "50"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 20 and 25?",
    options: ["5", "1", "10", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/2?",
    options: ["5/6", "2/5", "1/6", "1/3"],
    correct: 0
  },
  {
    question: "What is 4/5 of 150?",
    options: ["120", "30", "60", "90"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hectogon with side length 1m?",
    options: ["100m", "10m", "50m", "1000m"],
    correct: 0
  },
  {
    question: "What is 1% of 1000?",
    options: ["10", "1", "100", "5"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.25 hours?",
    options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 27?",
    options: ["729", "54", "27", "676"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(10\+6\)/2 \- 4</span>?",
    options: ["4", "8", "6", "2"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 400?",
    options: ["401", "409", "403", "407"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">9^2</span>?",
    options: ["81", "18", "9", "729"],
    correct: 0
  },
  {
    question: "Convert 0.08 to a percentage.",
    options: ["8%", "0.8%", "80%", "800%"],
    correct: 0
  },
  {
    question: "How many vertices does a triangular pyramid have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 30 and 40?",
    options: ["120", "60", "40", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/5?",
    options: ["13/15", "3/8", "1/3", "2/5"],
    correct: 0
  },
  {
    question: "What is 60% of 120?",
    options: ["72", "60", "120", "24"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with area 3.14cm² (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["1cm", "2cm", "0.5cm", "3cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ... (squared numbers)?",
    options: ["36", "30", "49", "32"],
    correct: 0
  },
  {
    question: "What is the difference between 25.0 and 12.3?",
    options: ["12.7", "13.7", "11.7", "13.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.75 and 2?",
    options: ["1.5", "0.75", "2", "0.5"],
    correct: 0
  },
  {
    question: "How many days are in July?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a trapezoid with parallel sides 5cm and 7cm, and height 4cm?",
    options: ["24cm²", "12cm²", "28cm²", "14cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 27?",
    options: ["3", "9", "6", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 80?",
    options: ["LXXX", "XC", "LXX", "C"],
    correct: 0
  },
  {
    question: "What is 0.06 as a fraction in its simplest form?",
    options: ["3/50", "6/100", "1/6", "1/10"],
    correct: 0
  },
  {
    question: "Solve: 3x - 1 = 17",
    options: ["x = 6", "x = 18", "x = 5", "x = 7"],
    correct: 0
  },
  {
    question: "What is 40% of 150?",
    options: ["60", "40", "15", "30"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular decagon have?",
    options: ["10", "5", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 1, 2, 2?",
    options: ["1.5", "1", "2", "0.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.6 and 0.4?",
    options: ["1", "0.2", "0.64", "1.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 121 and 11?",
    options: ["11", "12", "10", "9"],
    correct: 0
  },
  {
    question: "How many sides does an enneadecagon have?",
    options: ["19", "18", "20", "17"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 36 and 48?",
    options: ["12", "6", "4", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 1/5 and 3/10?",
    options: ["1/2", "4/15", "1/5", "3/10"],
    correct: 0
  },
  {
    question: "What is 1/4 of 120?",
    options: ["30", "12", "60", "20"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular enneadecagon with side length 1.5cm?",
    options: ["28.5cm", "19cm", "38cm", "25cm"],
    correct: 0
  },
  {
    question: "What is 3% of 400?",
    options: ["12", "3", "4", "24"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.75 hours?",
    options: ["45 minutes", "30 minutes", "15 minutes", "60 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 28?",
    options: ["784", "56", "28", "729"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(40\-10\)/5 \- 3</span>?",
    options: ["3", "6", "1", "5"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 500?",
    options: ["499", "491", "497", "487"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">11^2</span>?",
    options: ["121", "22", "11", "100"],
    correct: 0
  },
  {
    question: "Convert 0.002 to a percentage.",
    options: ["0.2%", "0.02%", "2%", "20%"],
    correct: 0
  },
  {
    question: "How many vertices does a hexagonal pyramid have?",
    options: ["7", "6", "8", "12"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 8 and 10?",
    options: ["40", "20", "80", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 1/6 and 2/3?",
    options: ["5/6", "3/9", "1/2", "1/3"],
    correct: 0
  },
  {
    question: "What is 90% of 200?",
    options: ["180", "90", "200", "20"],
    correct: 0
  },
  {
    question: "What is the diameter of a circle with radius 12cm?",
    options: ["24cm", "12cm", "6cm", "36cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ... (Fibonacci)?",
    options: ["13", "12", "11", "10"],
    correct: 0
  },
  {
    question: "What is the difference between 30.0 and 15.5?",
    options: ["14.5", "15.5", "13.5", "14.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.1 and 0.05?",
    options: ["0.005", "0.05", "0.1", "0.0005"],
    correct: 0
  },
  {
    question: "How many days are in September?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 9cm and height 4cm?",
    options: ["18cm²", "36cm²", "13cm²", "26cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 125?",
    options: ["5", "25", "10", "15"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 400?",
    options: ["CD", "DC", "LD", "XD"],
    correct: 0
  },
  {
    question: "What is 0.11 as a percentage?",
    options: ["11%", "1.1%", "0.11%", "110%"],
    correct: 0
  },
  {
    question: "Solve: y + 8 = 25",
    options: ["y = 17", "y = 33", "y = 15", "y = 10"],
    correct: 0
  },
  {
    question: "What is 20% of 70?",
    options: ["14", "20", "7", "35"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does an irregular polygon have?",
    options: ["0", "1", "Many", "Depends"],
    correct: 0
  },
  {
    question: "What is the mean of 5, 10, 15, 20?",
    options: ["12.5", "10", "15", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.45 and 0.25?",
    options: ["0.7", "0.6", "0.75", "0.2"],
    correct: 0
  },
  {
    question: "What is the quotient of 96 and 12?",
    options: ["8", "12", "6", "9"],
    correct: 0
  },
  {
    question: "How many sides does a hecatontadecagon have?",
    options: ["110", "100", "120", "105"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 10 and 20?",
    options: ["10", "5", "2", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/9?",
    options: ["11/18", "2/11", "1/18", "1/2"],
    correct: 0
  },
  {
    question: "What is 3/5 of 250?",
    options: ["150", "50", "100", "200"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hecatontadecagon with side length 0.5cm?",
    options: ["55cm", "110cm", "50cm", "115cm"],
    correct: 0
  },
  {
    question: "What is 4% of 150?",
    options: ["6", "4", "15", "30"],
    correct: 0
  },
  {
    question: "How many minutes are in 4 hours and 15 minutes?",
    options: ["255 minutes", "240 minutes", "270 minutes", "225 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 29?",
    options: ["841", "58", "29", "784"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(10\+20\)/5 \+ 10</span>?",
    options: ["16", "30", "6", "20"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 600?",
    options: ["599", "593", "587", "581"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">12^2</span>?",
    options: ["144", "24", "12", "100"],
    correct: 0
  },
  {
    question: "Convert 0.003 to a percentage.",
    options: ["0.3%", "0.03%", "3%", "30%"],
    correct: 0
  },
  {
    question: "How many vertices does a cone have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 9 and 15?",
    options: ["45", "15", "9", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 1/7 and 1/2?",
    options: ["9/14", "2/9", "1/14", "1/7"],
    correct: 0
  },
  {
    question: "What is 75% of 100?",
    options: ["75", "100", "25", "50"],
    correct: 0
  },
  {
    question: "What is the area of a circle with radius 10cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["314cm²", "62.8cm²", "100cm²", "50cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 2, 4, 8, 16, ... (powers of 2)?",
    options: ["32", "20", "24", "28"],
    correct: 0
  },
  {
    question: "What is the difference between 3.14 and 1.0?",
    options: ["2.14", "4.14", "2.0", "3.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.8 and 0.5?",
    options: ["0.4", "4", "0.04", "1.3"],
    correct: 0
  },
  {
    question: "How many days are in October?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a regular octagon with side length 5cm (approximate)?",
    options: ["120.7cm²", "25cm²", "50cm²", "100cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 8?",
    options: ["2", "4", "1", "3"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 900?",
    options: ["CM", "DCCCC", "XM", "IM"],
    correct: 0
  },
  {
    question: "What is 0.004 as a fraction in its simplest form?",
    options: ["1/250", "4/1000", "1/40", "1/100"],
    correct: 0
  },
  {
    question: "Solve: 2y + 8 = 20",
    options: ["y = 6", "y = 14", "y = 10", "y = 8"],
    correct: 0
  },
  {
    question: "What is 60% of 80?",
    options: ["48", "60", "80", "16"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular hendecagon have?",
    options: ["11", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 4, 6, 8, 10?",
    options: ["6", "2", "10", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.02 and 0.03?",
    options: ["0.05", "0.01", "0.06", "0.5"],
    correct: 0
  },
  {
    question: "What is the quotient of 240 and 6?",
    options: ["40", "24", "60", "10"],
    correct: 0
  },
  {
    question: "How many sides does an icosagon have?",
    options: ["20", "10", "15", "25"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 45 and 75?",
    options: ["15", "5", "9", "25"],
    correct: 0
  },
  {
    question: "What is the sum of 2/5 and 1/2?",
    options: ["9/10", "3/7", "1/2", "2/5"],
    correct: 0
  },
  {
    question: "What is 1/3 of 300?",
    options: ["100", "30", "60", "150"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular icosagon with side length 2cm?",
    options: ["40cm", "20cm", "30cm", "50cm"],
    correct: 0
  },
  {
    question: "What is 8% of 250?",
    options: ["20", "8", "25", "100"],
    correct: 0
  },
  {
    question: "How many minutes are in 5 hours and 30 minutes?",
    options: ["330 minutes", "300 minutes", "360 minutes", "315 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 30?",
    options: ["900", "60", "30", "100"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(60\-10\)/5 \+ 5</span>?",
    options: ["15", "10", "20", "12"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 700?",
    options: ["701", "709", "703", "707"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">13^2</span>?",
    options: ["169", "26", "13", "144"],
    correct: 0
  },
  {
    question: "Convert 0.006 to a percentage.",
    options: ["0.6%", "0.06%", "6%", "60%"],
    correct: 0
  },
  {
    question: "How many vertices does a hexagonal prism have?",
    options: ["12", "8", "6", "10"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 6 and 9?",
    options: ["18", "9", "6", "54"],
    correct: 0
  },
  {
    question: "What is the sum of 3/4 and 1/6?",
    options: ["11/12", "4/10", "1/24", "1/3"],
    correct: 0
  },
  {
    question: "What is 15% of 300?",
    options: ["45", "15", "30", "60"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with diameter 14cm (use <span class="math-inline">\\pi \\approx 22/7</span>)?",
    options: ["44cm", "22cm", "14cm", "28cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 5, 10, 15, 20, ... (multiples of 5)?",
    options: ["25", "30", "22", "28"],
    correct: 0
  },
  {
    question: "What is the difference between 40.0 and 25.5?",
    options: ["14.5", "15.5", "13.5", "14.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.9 and 0.6?",
    options: ["0.54", "5.4", "0.054", "1.5"],
    correct: 0
  },
  {
    question: "How many days are in November?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 12cm and height 9cm?",
    options: ["54cm²", "108cm²", "21cm²", "63cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 216?",
    options: ["6", "36", "16", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 1000?",
    options: ["M", "C", "D", "L"],
    correct: 0
  },
  {
    question: "What is 0.125 as a percentage?",
    options: ["12.5%", "1.25%", "125%", "0.125%"],
    correct: 0
  },
  {
    question: "Solve: 4x + 10 = 30",
    options: ["x = 5", "x = 40", "x = 10", "x = 4"],
    correct: 0
  },
  {
    question: "What is 70% of 90?",
    options: ["63", "70", "90", "18"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular dodecagon have?",
    options: ["12", "6", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 1, 1, 2, 2, 2?",
    options: ["1.5", "1", "2", "0.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.01 and 0.09?",
    options: ["0.1", "0.09", "0.01", "0.11"],
    correct: 0
  },
  {
    question: "What is the quotient of 500 and 100?",
    options: ["5", "50", "10", "1"],
    correct: 0
  },
  {
    question: "How many sides does a chiliagon have?",
    options: ["1000", "100", "10", "500"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 100 and 150?",
    options: ["50", "10", "25", "100"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/10?",
    options: ["3/5", "2/12", "1/20", "1/5"],
    correct: 0
  },
  {
    question: "What is 2/5 of 200?",
    options: ["80", "40", "100", "120"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular chiliagon with side length 0.5m?",
    options: ["500m", "1000m", "50m", "100m"],
    correct: 0
  },
  {
    question: "What is 5% of 400?",
    options: ["20", "5", "40", "80"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.8 hours?",
    options: ["48 minutes", "8 minutes", "80 minutes", "40 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 31?",
    options: ["961", "62", "31", "900"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(70\-20\)/10 \+ 3</span>?",
    options: ["8", "5", "10", "7"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 800?",
    options: ["809", "811", "803", "807"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">14^2</span>?",
    options: ["196", "28", "14", "169"],
    correct: 0
  },
  {
    question: "Convert 0.007 to a percentage.",
    options: ["0.7%", "0.07%", "7%", "70%"],
    correct: 0
  },
  {
    question: "How many vertices does a cube have?",
    options: ["8", "6", "12", "4"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 10 and 12?",
    options: ["60", "12", "10", "120"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/7?",
    options: ["10/21", "2/10", "1/21", "1/3"],
    correct: 0
  },
  {
    question: "What is 100% of 200?",
    options: ["200", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the area of a circle with radius 12cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["452.16cm²", "75.36cm²", "144cm²", "288cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 100, 98, 96, 94, ...?",
    options: ["92", "90", "93", "91"],
    correct: 0
  },
  {
    question: "What is the difference between 50.0 and 20.5?",
    options: ["29.5", "30.5", "28.5", "29.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.2 and 0.3?",
    options: ["0.06", "0.6", "0.006", "0.5"],
    correct: 0
  },
  {
    question: "How many days are in December?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 15cm and height 8cm?",
    options: ["60cm²", "120cm²", "23cm²", "75cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 343?",
    options: ["7", "49", "3", "17"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 500?",
    options: ["D", "C", "L", "M"],
    correct: 0
  },
  {
    question: "What is 0.008 as a percentage?",
    options: ["0.8%", "0.08%", "8%", "80%"],
    correct: 0
  },
  {
    question: "Solve: x / 9 = 6",
    options: ["x = 54", "x = 15", "x = 1", "x = 9"],
    correct: 0
  },
  {
    question: "What is 20% of 120?",
    options: ["24", "20", "12", "60"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a parallelogram have?",
    options: ["0", "2", "1", "4"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5?",
    options: ["3", "2", "4", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.5 and 0.05?",
    options: ["0.55", "0.5", "0.05", "0.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 360 and 12?",
    options: ["30", "36", "12", "10"],
    correct: 0
  },
  {
    question: "How many sides does a hectogon have?",
    options: ["100", "10", "50", "1000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 16 and 32?",
    options: ["16", "8", "4", "2"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 1/6?",
    options: ["5/12", "2/10", "1/24", "1/3"],
    correct: 0
  },
  {
    question: "What is 3/4 of 320?",
    options: ["240", "80", "160", "200"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular heptagon with side length 6cm?",
    options: ["42cm", "36cm", "30cm", "48cm"],
    correct: 0
  },
  {
    question: "What is 12% of 200?",
    options: ["24", "12", "20", "48"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.6 hours?",
    options: ["36 minutes", "6 minutes", "60 minutes", "30 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 32?",
    options: ["1024", "64", "32", "961"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(10\+15\)/5 \- 1</span>?",
    options: ["4", "5", "3", "6"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 1000?",
    options: ["997", "991", "983", "977"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">15^2</span>?",
    options: ["225", "30", "15", "100"],
    correct: 0
  },
  {
    question: "Convert 0.009 to a percentage.",
    options: ["0.9%", "0.09%", "9%", "90%"],
    correct: 0
  },
  {
    question: "How many vertices does a square prism have?",
    options: ["8", "6", "12", "4"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 15 and 20?",
    options: ["60", "30", "20", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/3?",
    options: ["5/6", "2/5", "1/6", "1/3"],
    correct: 0
  },
  {
    question: "What is 75% of 160?",
    options: ["120", "75", "160", "40"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 31.4cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["5cm", "10cm", "2.5cm", "15cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 3, 5, 7, ... (odd numbers)?",
    options: ["9", "11", "8", "10"],
    correct: 0
  },
  {
    question: "What is the difference between 100.0 and 75.5?",
    options: ["24.5", "25.5", "23.5", "24.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.1 and 0.1?",
    options: ["0.01", "0.1", "1.0", "0.001"],
    correct: 0
  },
  {
    question: "How many days are in January?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 15cm and width 4cm?",
    options: ["60cm²", "30cm²", "19cm²", "40cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 512?",
    options: ["8", "12", "16", "6"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 10?",
    options: ["X", "V", "L", "C"],
    correct: 0
  },
  {
    question: "What is 0.001 as a percentage?",
    options: ["0.1%", "1%", "0.01%", "10%"],
    correct: 0
  },
  {
    question: "Solve: 3y - 5 = 10",
    options: ["y = 5", "y = 15", "y = 3", "y = 6"],
    correct: 0
  },
  {
    question: "What is 90% of 10?",
    options: ["9", "10", "1", "0.9"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does an isosceles triangle have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5, 6?",
    options: ["3.5", "3", "4", "4.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.8 and 0.1?",
    options: ["0.9", "0.7", "0.81", "0.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 49 and 7?",
    options: ["7", "6", "8", "5"],
    correct: 0
  },
  {
    question: "How many sides does a dodecagon have?",
    options: ["12", "10", "11", "13"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 24 and 40?",
    options: ["8", "4", "12", "6"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/2?",
    options: ["1 1/6", "3/5", "1/6", "1/3"],
    correct: 0
  },
  {
    question: "What is 1/5 of 300?",
    options: ["60", "30", "150", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular dodecagon with side length 3cm?",
    options: ["36cm", "24cm", "30cm", "42cm"],
    correct: 0
  },
  {
    question: "What is 2% of 300?",
    options: ["6", "2", "30", "12"],
    correct: 0
  },
  {
    question: "How many seconds are in 3 minutes?",
    options: ["180 seconds", "60 seconds", "120 seconds", "240 seconds"],
    correct: 0
  },
  {
    question: "What is the square of 33?",
    options: ["1089", "66", "33", "961"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(80\-20\)/10 \+ 20</span>?",
    options: ["26", "8", "20", "28"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 900?",
    options: ["907", "911", "901", "913"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">16^2</span>?",
    options: ["256", "32", "16", "225"],
    correct: 0
  },
  {
    question: "Convert 0.15 to a percentage.",
    options: ["15%", "1.5%", "0.15%", "150%"],
    correct: 0
  },
  {
    question: "How many vertices does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 18 and 12?",
    options: ["36", "18", "12", "72"],
    correct: 0
  },
  {
    question: "What is the sum of 1/5 and 1/2?",
    options: ["7/10", "2/7", "1/10", "1/5"],
    correct: 0
  },
  {
    question: "What is 10% of 500?",
    options: ["50", "10", "500", "100"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 62.8cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["10cm", "5cm", "20cm", "1cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 11, 13, 16, 20, ...?",
    options: ["25", "24", "23", "22"],
    correct: 0
  },
  {
    question: "What is the difference between 12.0 and 3.5?",
    options: ["8.5", "9.5", "7.5", "8.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.25 and 0.8?",
    options: ["0.2", "2", "0.02", "0.33"],
    correct: 0
  },
  {
    question: "How many days are in February in a common year?",
    options: ["28", "29", "30", "31"],
    correct: 0
  },
  {
    question: "What is the area of a triangle with base 14cm and height 6cm?",
    options: ["42cm²", "84cm²", "20cm²", "28cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 729?",
    options: ["9", "27", "8", "7"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 6?",
    options: ["VI", "IV", "VII", "V"],
    correct: 0
  },
  {
    question: "What is 0.4 as a percentage?",
    options: ["40%", "4%", "0.4%", "400%"],
    correct: 0
  },
  {
    question: "Solve: x / 10 = 5",
    options: ["x = 50", "x = 2", "x = 15", "x = 5"],
    correct: 0
  },
  {
    question: "What is 30% of 200?",
    options: ["60", "30", "20", "100"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular pentagon have?",
    options: ["5", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 2, 2, 2?",
    options: ["2", "0", "8", "1"],
    correct: 0
  },
  {
    question: "What is the sum of 0.35 and 0.45?",
    options: ["0.8", "0.1", "0.7", "0.9"],
    correct: 0
  },
  {
    question: "What is the quotient of 140 and 7?",
    options: ["20", "14", "7", "10"],
    correct: 0
  },
  {
    question: "How many sides does a hectogon have?",
    options: ["100", "10", "50", "1000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 30 and 40?",
    options: ["10", "5", "20", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/8?",
    options: ["11/24", "2/11", "1/24", "1/3"],
    correct: 0
  },
  {
    question: "What is 4/5 of 250?",
    options: ["200", "50", "100", "150"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular heptadecagon with side length 1cm?",
    options: ["17cm", "34cm", "10cm", "20cm"],
    correct: 0
  },
  {
    question: "What is 3% of 500?",
    options: ["15", "3", "50", "100"],
    correct: 0
  },
  {
    question: "How many seconds are in 5 minutes?",
    options: ["300 seconds", "60 seconds", "120 seconds", "180 seconds"],
    correct: 0
  },
  {
    question: "What is the square of 34?",
    options: ["1156", "68", "34", "1089"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(100\-50\)/5 \+ 5</span>?",
    options: ["15", "10", "20", "12"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1000?",
    options: ["1009", "1001", "1003", "1007"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">17^2</span>?",
    options: ["289", "34", "17", "256"],
    correct: 0
  },
  {
    question: "Convert 0.0005 to a percentage.",
    options: ["0.05%", "0.005%", "0.5%", "5%"],
    correct: 0
  },
  {
    question: "How many vertices does a square pyramid have?",
    options: ["5", "4", "6", "8"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 24 and 36?",
    options: ["72", "36", "24", "144"],
    correct: 0
  },
  {
    question: "What is the sum of 1/6 and 1/5?",
    options: ["11/30", "2/11", "1/30", "1/6"],
    correct: 0
  },
  {
    question: "What is 80% of 300?",
    options: ["240", "80", "300", "60"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 2.5cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["15.7cm", "7.85cm", "5cm", "10cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ... (Fibonacci)?",
    options: ["21", "20", "18", "19"],
    correct: 0
  },
  {
    question: "What is the difference between 75.0 and 25.5?",
    options: ["49.5", "50.5", "48.5", "49.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.6 and 0.3?",
    options: ["0.18", "1.8", "0.018", "0.9"],
    correct: 0
  },
  {
    question: "How many days are in August?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 10cm and height 10cm?",
    options: ["50cm²", "100cm²", "20cm²", "25cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 1000?",
    options: ["10", "100", "1", "50"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 4?",
    options: ["IV", "IIII", "VI", "V"],
    correct: 0
  },
  {
    question: "What is 0.25 as a percentage?",
    options: ["25%", "2.5%", "0.25%", "250%"],
    correct: 0
  },
  {
    question: "Solve: 5x + 2 = 27",
    options: ["x = 5", "x = 25", "x = 4", "x = 6"],
    correct: 0
  },
  {
    question: "What is 50% of 150?",
    options: ["75", "150", "50", "300"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular hexagon have?",
    options: ["6", "3", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 10, 20, 30, 40?",
    options: ["25", "10", "40", "20"],
    correct: 0
  },
  {
    question: "What is the sum of 0.75 and 0.5?",
    options: ["1.25", "0.25", "1.0", "1.5"],
    correct: 0
  },
  {
    question: "What is the quotient of 210 and 3?",
    options: ["70", "21", "30", "7"],
    correct: 0
  },
  {
    question: "How many sides does an octadecagon have?",
    options: ["18", "16", "17", "19"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 50 and 100?",
    options: ["50", "10", "25", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/5?",
    options: ["13/15", "3/8", "1/3", "2/5"],
    correct: 0
  },
  {
    question: "What is 1/3 of 150?",
    options: ["50", "15", "30", "75"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular octadecagon with side length 0.5m?",
    options: ["9m", "18m", "4.5m", "10m"],
    correct: 0
  },
  {
    question: "What is 6% of 50?",
    options: ["3", "6", "5", "10"],
    correct: 0
  },
  {
    question: "How many minutes are in 0.9 hours?",
    options: ["54 minutes", "9 minutes", "90 minutes", "45 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 35?",
    options: ["1225", "70", "35", "1089"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(120\-20\)/10 \+ 2</span>?",
    options: ["12", "10", "14", "8"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1100?",
    options: ["1103", "1109", "1101", "1107"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">18^2</span>?",
    options: ["324", "36", "18", "289"],
    correct: 0
  },
  {
    question: "Convert 0.0001 to a percentage.",
    options: ["0.01%", "0.001%", "0.1%", "1%"],
    correct: 0
  },
  {
    question: "How many vertices does a cone have?",
    options: ["1", "0", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 20 and 30?",
    options: ["60", "30", "20", "120"],
    correct: 0
  },
  {
    question: "What is the sum of 1/8 and 1/3?",
    options: ["11/24", "2/11", "1/24", "1/8"],
    correct: 0
  },
  {
    question: "What is 100% of 50?",
    options: ["50", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 15cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["94.2cm", "47.1cm", "30cm", "60cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 2, 4, 6, 8, ... (even numbers)?",
    options: ["10", "12", "9", "11"],
    correct: 0
  },
  {
    question: "What is the difference between 1.0 and 0.01?",
    options: ["0.99", "0.9", "0.01", "1.01"],
    correct: 0
  },
  {
    question: "What is the product of 0.7 and 0.4?",
    options: ["0.28", "2.8", "0.028", "1.1"],
    correct: 0
  },
  {
    question: "How many days are in September?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 10m and width 7m?",
    options: ["70m²", "35m²", "17m²", "20m²"],
    correct: 0
  },
  {
    question: "What is the cube root of 64?",
    options: ["4", "8", "16", "2"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 9?",
    options: ["IX", "XI", "VIII", "VIIII"],
    correct: 0
  },
  {
    question: "What is 0.5 as a percentage?",
    options: ["50%", "5%", "0.5%", "500%"],
    correct: 0
  },
  {
    question: "Solve: x / 11 = 4",
    options: ["x = 44", "x = 15", "x = 1", "x = 11"],
    correct: 0
  },
  {
    question: "What is 40% of 100?",
    options: ["40", "10", "100", "20"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a scalene triangle have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the mean of 5, 5, 5, 5, 5?",
    options: ["5", "0", "25", "1"],
    correct: 0
  },
  {
    question: "What is the sum of 0.2 and 0.02?",
    options: ["0.22", "0.2", "0.02", "0.222"],
    correct: 0
  },
  {
    question: "What is the quotient of 60 and 12?",
    options: ["5", "12", "6", "10"],
    correct: 0
  },
  {
    question: "How many sides does an icosidodecagon have?",
    options: ["32", "20", "12", "24"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 100 and 200?",
    options: ["100", "50", "25", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 2/5 and 1/3?",
    options: ["11/15", "3/8", "1/5", "2/3"],
    correct: 0
  },
  {
    question: "What is 1/4 of 400?",
    options: ["100", "40", "200", "50"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular icosidodecagon with side length 1.5cm?",
    options: ["48cm", "32cm", "20cm", "12cm"],
    correct: 0
  },
  {
    question: "What is 7% of 200?",
    options: ["14", "7", "20", "40"],
    correct: 0
  },
  {
    question: "How many minutes are in 1.1 hours?",
    options: ["66 minutes", "11 minutes", "60 minutes", "110 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 36?",
    options: ["1296", "72", "36", "1225"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(200\-100\)/50 \+ 10</span>?",
    options: ["12", "2", "10", "15"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1200?",
    options: ["1201", "1207", "1213", "1217"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">19^2</span>?",
    options: ["361", "38", "19", "324"],
    correct: 0
  },
  {
    question: "Convert 0.0002 to a percentage.",
    options: ["0.02%", "0.002%", "0.2%", "2%"],
    correct: 0
  },
  {
    question: "How many vertices does a hexagonal pyramid have?",
    options: ["7", "6", "8", "12"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 25 and 50?",
    options: ["50", "25", "100", "75"],
    correct: 0
  },
  {
    question: "What is the sum of 1/9 and 1/3?",
    options: ["4/9", "2/12", "1/27", "1/3"],
    correct: 0
  },
  {
    question: "What is 80% of 400?",
    options: ["320", "80", "400", "100"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with circumference 28cm (use <span class="math-inline">\\pi \\approx 22/7</span>, approximately)?",
    options: ["4.46cm", "7cm", "14cm", "2.23cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 100, 95, 90, 85, ... (decreasing by 5)?",
    options: ["80", "75", "82", "88"],
    correct: 0
  },
  {
    question: "What is the difference between 1.5 and 0.5?",
    options: ["1", "0.5", "1.5", "0.1"],
    correct: 0
  },
  {
    question: "What is the product of 0.9 and 0.2?",
    options: ["0.18", "1.8", "0.018", "1.1"],
    correct: 0
  },
  {
    question: "How many days are in October?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a parallelogram with base 15cm and height 6cm?",
    options: ["90cm²", "45cm²", "21cm²", "30cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 1?",
    options: ["1", "0", "10", "100"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 50?",
    options: ["L", "C", "X", "V"],
    correct: 0
  },
  {
    question: "What is 0.75 as a percentage?",
    options: ["75%", "7.5%", "0.75%", "750%"],
    correct: 0
  },
  {
    question: "Solve: x / 12 = 3",
    options: ["x = 36", "x = 15", "x = 1", "x = 12"],
    correct: 0
  },
  {
    question: "What is 50% of 250?",
    options: ["125", "250", "50", "500"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular octagon have?",
    options: ["8", "4", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 3, 5, 7?",
    options: ["4", "1", "7", "3"],
    correct: 0
  },
  {
    question: "What is the sum of 0.12 and 0.38?",
    options: ["0.5", "0.26", "0.4", "0.6"],
    correct: 0
  },
  {
    question: "What is the quotient of 240 and 8?",
    options: ["30", "24", "80", "10"],
    correct: 0
  },
  {
    question: "How many sides does a myriagon have?",
    options: ["10000", "100", "1000", "10"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 75 and 100?",
    options: ["25", "5", "10", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/11?",
    options: ["13/22", "2/13", "1/22", "1/2"],
    correct: 0
  },
  {
    question: "What is 2/3 of 240?",
    options: ["160", "80", "120", "60"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular myriagon with side length 0.1mm?",
    options: ["1000mm", "100mm", "10mm", "10000mm"],
    correct: 0
  },
  {
    question: "What is 8% of 500?",
    options: ["40", "8", "50", "100"],
    correct: 0
  },
  {
    question: "How many minutes are in 2.2 hours?",
    options: ["132 minutes", "22 minutes", "120 minutes", "150 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 37?",
    options: ["1369", "74", "37", "1296"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(500\-100\)/20 \+ 5</span>?",
    options: ["25", "20", "30", "15"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 1500?",
    options: ["1499", "1493", "1489", "1487"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">20^2</span>?",
    options: ["400", "40", "20", "100"],
    correct: 0
  },
  {
    question: "Convert 0.0003 to a percentage.",
    options: ["0.03%", "0.003%", "0.3%", "3%"],
    correct: 0
  },
  {
    question: "How many vertices does a triangular prism have?",
    options: ["6", "5", "8", "9"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 16 and 24?",
    options: ["48", "24", "16", "96"],
    correct: 0
  },
  {
    question: "What is the sum of 1/4 and 1/7?",
    options: ["11/28", "2/11", "1/28", "1/4"],
    correct: 0
  },
  {
    question: "What is 100% of 300?",
    options: ["300", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the area of a circle with diameter 16cm (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["200.96cm²", "100.48cm²", "256cm²", "50.24cm²"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 12, 14, 16, ... (even numbers starting 10)?",
    options: ["18", "20", "17", "19"],
    correct: 0
  },
  {
    question: "What is the difference between 2.0 and 0.05?",
    options: ["1.95", "1.5", "2.05", "1.9"],
    correct: 0
  },
  {
    question: "What is the product of 0.1 and 0.2?",
    options: ["0.02", "0.2", "0.002", "0.3"],
    correct: 0
  },
  {
    question: "How many days are in November?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with sides 6cm, 8cm, 10cm?",
    options: ["24cm²", "48cm²", "14cm²", "30cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 27?",
    options: ["3", "9", "6", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 90?",
    options: ["XC", "CX", "LXXXX", "VL"],
    correct: 0
  },
  {
    question: "What is 0.18 as a percentage?",
    options: ["18%", "1.8%", "0.18%", "180%"],
    correct: 0
  },
  {
    question: "Solve: y + 9 = 20",
    options: ["y = 11", "y = 29", "y = 10", "y = 15"],
    correct: 0
  },
  {
    question: "What is 60% of 100?",
    options: ["60", "100", "10", "20"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular nonagon have?",
    options: ["9", "3", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3?",
    options: ["2", "1", "3", "0.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.6 and 0.06?",
    options: ["0.66", "0.6", "0.06", "0.12"],
    correct: 0
  },
  {
    question: "What is the quotient of 720 and 8?",
    options: ["90", "72", "80", "10"],
    correct: 0
  },
  {
    question: "How many sides does an icositetragon have?",
    options: ["24", "20", "22", "26"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 12 and 24?",
    options: ["12", "6", "4", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 1/5 and 1/4?",
    options: ["9/20", "2/9", "1/20", "1/5"],
    correct: 0
  },
  {
    question: "What is 3/5 of 300?",
    options: ["180", "60", "90", "120"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular icositetragon with side length 0.5cm?",
    options: ["12cm", "24cm", "6cm", "10cm"],
    correct: 0
  },
  {
    question: "What is 9% of 100?",
    options: ["9", "1", "10", "90"],
    correct: 0
  },
  {
    question: "How many seconds are in 1.5 minutes?",
    options: ["90 seconds", "60 seconds", "120 seconds", "30 seconds"],
    correct: 0
  },
  {
    question: "What is the square of 38?",
    options: ["1444", "76", "38", "1369"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(100\-25\)/5 \+ 5</span>?",
    options: ["20", "15", "25", "10"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1300?",
    options: ["1301", "1303", "1307", "1319"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">21^2</span>?",
    options: ["441", "42", "21", "400"],
    correct: 0
  },
  {
    question: "Convert 0.0004 to a percentage.",
    options: ["0.04%", "0.004%", "0.4%", "4%"],
    correct: 0
  },
  {
    question: "How many vertices does a cylinder have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 100 and 150?",
    options: ["300", "150", "100", "600"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/12?",
    options: ["7/12", "2/14", "1/24", "1/2"],
    correct: 0
  },
  {
    question: "What is 100% of 400?",
    options: ["400", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 1m (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["6.28m", "3.14m", "1m", "2m"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 2, 4, 7, 11, 16, ... (add increasing numbers)?",
    options: ["22", "21", "20", "19"],
    correct: 0
  },
  {
    question: "What is the difference between 3.0 and 0.001?",
    options: ["2.999", "3.001", "2.9", "3.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.8 and 0.2?",
    options: ["0.16", "1.6", "0.016", "1.0"],
    correct: 0
  },
  {
    question: "How many days are in December?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 25cm and width 4cm?",
    options: ["100cm²", "50cm²", "29cm²", "75cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 216?",
    options: ["6", "36", "16", "4"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 400?",
    options: ["CD", "DC", "LD", "XD"],
    correct: 0
  },
  {
    question: "What is 0.012 as a percentage?",
    options: ["1.2%", "0.12%", "12%", "120%"],
    correct: 0
  },
  {
    question: "Solve: 2x - 1 = 9",
    options: ["x = 5", "x = 10", "x = 4", "x = 6"],
    correct: 0
  },
  {
    question: "What is 20% of 150?",
    options: ["30", "20", "15", "60"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a rhombus have?",
    options: ["2", "4", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5, 6, 7?",
    options: ["4", "3", "5", "7"],
    correct: 0
  },
  {
    question: "What is the sum of 0.05 and 0.005?",
    options: ["0.055", "0.05", "0.005", "0.1"],
    correct: 0
  },
  {
    question: "What is the quotient of 120 and 6?",
    options: ["20", "12", "60", "10"],
    correct: 0
  },
  {
    question: "How many sides does a triacontagon have?",
    options: ["30", "20", "40", "50"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 15 and 25?",
    options: ["5", "1", "10", "15"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/6?",
    options: ["5/6", "3/9", "1/2", "1/3"],
    correct: 0
  },
  {
    question: "What is 1/5 of 350?",
    options: ["70", "35", "175", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular triacontagon with side length 1cm?",
    options: ["30cm", "20cm", "40cm", "15cm"],
    correct: 0
  },
  {
    question: "What is 15% of 400?",
    options: ["60", "15", "40", "80"],
    correct: 0
  },
  {
    question: "How many minutes are in 3.5 hours?",
    options: ["210 minutes", "180 minutes", "240 minutes", "150 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 39?",
    options: ["1521", "78", "39", "1444"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(100\-10\)/3 \+ 5</span>?",
    options: ["35", "30", "40", "25"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1400?",
    options: ["1409", "1401", "1403", "1407"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">22^2</span>?",
    options: ["484", "44", "22", "441"],
    correct: 0
  },
  {
    question: "Convert 0.0006 to a percentage.",
    options: ["0.06%", "0.006%", "0.6%", "6%"],
    correct: 0
  },
  {
    question: "How many vertices does a sphere have?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 40 and 60?",
    options: ["120", "60", "40", "240"],
    correct: 0
  },
  {
    question: "What is the sum of 1/6 and 1/7?",
    options: ["13/42", "2/13", "1/42", "1/6"],
    correct: 0
  },
  {
    question: "What is 100% of 500?",
    options: ["500", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with area 314cm² (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["10cm", "20cm", "5cm", "1cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 1, 3, 6, 10, 15, 21, ... (triangular numbers)?",
    options: ["28", "25", "24", "26"],
    correct: 0
  },
  {
    question: "What is the difference between 5.0 and 0.005?",
    options: ["4.995", "5.005", "4.9", "5.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.5 and 0.5?",
    options: ["0.25", "2.5", "0.025", "1.0"],
    correct: 0
  },
  {
    question: "How many days are in April?",
    options: ["30", "31", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a parallelogram with base 20cm and height 5cm?",
    options: ["100cm²", "50cm²", "25cm²", "75cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 64?",
    options: ["4", "8", "16", "2"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 5?",
    options: ["V", "I", "X", "L"],
    correct: 0
  },
  {
    question: "What is 0.0025 as a percentage?",
    options: ["0.25%", "0.025%", "2.5%", "25%"],
    correct: 0
  },
  {
    question: "Solve: x / 13 = 2",
    options: ["x = 26", "x = 15", "x = 1", "x = 13"],
    correct: 0
  },
  {
    question: "What is 30% of 180?",
    options: ["54", "30", "18", "36"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a kite have?",
    options: ["1", "0", "2", "4"],
    correct: 0
  },
  {
    question: "What is the mean of 2, 4, 6, 8, 10?",
    options: ["6", "2", "10", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.8 and 0.08?",
    options: ["0.88", "0.8", "0.08", "0.16"],
    correct: 0
  },
  {
    question: "What is the quotient of 250 and 5?",
    options: ["50", "25", "10", "5"],
    correct: 0
  },
  {
    question: "How many sides does a hectogon have?",
    options: ["100", "10", "50", "1000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 18 and 30?",
    options: ["6", "3", "9", "18"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/13?",
    options: ["15/26", "2/15", "1/26", "1/2"],
    correct: 0
  },
  {
    question: "What is 4/5 of 300?",
    options: ["240", "60", "120", "150"],
    correct: 0
  },
  {
    question: "What is the perimeter of a square with area 64cm²?",
    options: ["32cm", "8cm", "16cm", "64cm"],
    correct: 0
  },
  {
    question: "What is 2% of 450?",
    options: ["9", "2", "45", "90"],
    correct: 0
  },
  {
    question: "How many minutes are in 4.5 hours?",
    options: ["270 minutes", "240 minutes", "300 minutes", "210 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 40?",
    options: ["1600", "80", "40", "1521"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(200\-50\)/25 \+ 5</span>?",
    options: ["11", "6", "10", "15"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1500?",
    options: ["1511", "1501", "1503", "1507"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">23^2</span>?",
    options: ["529", "46", "23", "484"],
    correct: 0
  },
  {
    question: "Convert 0.0007 to a percentage.",
    options: ["0.07%", "0.007%", "0.7%", "7%"],
    correct: 0
  },
  {
    question: "How many vertices does a cuboid have?",
    options: ["8", "6", "12", "4"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 10 and 14?",
    options: ["70", "14", "10", "140"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/9?",
    options: ["4/9", "2/12", "1/27", "1/3"],
    correct: 0
  },
  {
    question: "What is 100% of 600?",
    options: ["600", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 2m (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["12.56m", "6.28m", "4m", "8m"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 8, 6, 4, ... (decreasing by 2)?",
    options: ["2", "0", "1", "3"],
    correct: 0
  },
  {
    question: "What is the difference between 10.0 and 0.005?",
    options: ["9.995", "10.005", "9.9", "10.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.6 and 0.6?",
    options: ["0.36", "3.6", "0.036", "1.2"],
    correct: 0
  },
  {
    question: "How many days are in July?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with base 12cm and height 10cm?",
    options: ["60cm²", "120cm²", "22cm²", "30cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 125?",
    options: ["5", "25", "10", "15"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 60?",
    options: ["LX", "XL", "LXX", "C"],
    correct: 0
  },
  {
    question: "What is 0.035 as a percentage?",
    options: ["3.5%", "0.35%", "35%", "350%"],
    correct: 0
  },
  {
    question: "Solve: x / 14 = 3",
    options: ["x = 42", "x = 17", "x = 1", "x = 14"],
    correct: 0
  },
  {
    question: "What is 40% of 120?",
    options: ["48", "40", "12", "24"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a square have?",
    options: ["4", "2", "1", "0"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 1, 1?",
    options: ["1", "0", "3", "0.5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.9 and 0.09?",
    options: ["0.99", "0.9", "0.09", "0.18"],
    correct: 0
  },
  {
    question: "What is the quotient of 300 and 6?",
    options: ["50", "30", "60", "10"],
    correct: 0
  },
  {
    question: "How many sides does a enneacontakaiheptagon have?",
    options: ["97", "90", "7", "100"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 20 and 40?",
    options: ["20", "10", "5", "40"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/14?",
    options: ["8/14", "2/16", "1/28", "1/2"],
    correct: 0
  },
  {
    question: "What is 3/4 of 400?",
    options: ["300", "100", "200", "250"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular enneacontakaiheptagon with side length 0.1cm?",
    options: ["9.7cm", "97cm", "0.97cm", "10cm"],
    correct: 0
  },
  {
    question: "What is 10% of 750?",
    options: ["75", "10", "750", "150"],
    correct: 0
  },
  {
    question: "How many minutes are in 5.5 hours?",
    options: ["330 minutes", "300 minutes", "360 minutes", "270 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 41?",
    options: ["1681", "82", "41", "1600"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(100\-20\)/8 \+ 2</span>?",
    options: ["12", "10", "15", "8"],
    correct: 0
  },
  {
    question: "What is the largest prime number less than 2000?",
    options: ["1999", "1997", "1993", "1991"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">24^2</span>?",
    options: ["576", "48", "24", "529"],
    correct: 0
  },
  {
    question: "Convert 0.0008 to a percentage.",
    options: ["0.08%", "0.008%", "0.8%", "8%"],
    correct: 0
  },
  {
    question: "How many vertices does a triangular pyramid have?",
    options: ["4", "3", "5", "6"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 10 and 16?",
    options: ["80", "16", "10", "160"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/15?",
    options: ["17/30", "2/17", "1/30", "1/2"],
    correct: 0
  },
  {
    question: "What is 100% of 700?",
    options: ["700", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the circumference of a circle with radius 3m (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["18.84m", "9.42m", "6m", "12m"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 100, 90, 80, 70, ... (decreasing by 10)?",
    options: ["60", "50", "65", "75"],
    correct: 0
  },
  {
    question: "What is the difference between 20.0 and 0.002?",
    options: ["19.998", "20.002", "19.9", "20.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.7 and 0.7?",
    options: ["0.49", "4.9", "0.049", "1.4"],
    correct: 0
  },
  {
    question: "How many days are in August?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 30cm and width 5cm?",
    options: ["150cm²", "75cm²", "35cm²", "100cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 729?",
    options: ["9", "27", "8", "7"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 700?",
    options: ["DCC", "CM", "CLX", "DX"],
    correct: 0
  },
  {
    question: "What is 0.005 as a percentage?",
    options: ["0.5%", "0.05%", "5%", "50%"],
    correct: 0
  },
  {
    question: "Solve: y + 10 = 25",
    options: ["y = 15", "y = 35", "y = 10", "y = 2.5"],
    correct: 0
  },
  {
    question: "What is 70% of 100?",
    options: ["70", "100", "10", "20"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a circle have?",
    options: ["Infinite", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4?",
    options: ["2.5", "2", "3", "10"],
    correct: 0
  },
  {
    question: "What is the sum of 0.15 and 0.015?",
    options: ["0.165", "0.15", "0.015", "0.3"],
    correct: 0
  },
  {
    question: "What is the quotient of 420 and 7?",
    options: ["60", "42", "70", "10"],
    correct: 0
  },
  {
    question: "How many sides does a hectogon have?",
    options: ["100", "10", "50", "1000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 30 and 50?",
    options: ["10", "5", "20", "30"],
    correct: 0
  },
  {
    question: "What is the sum of 2/3 and 1/4?",
    options: ["11/12", "3/7", "2/12", "5/12"],
    correct: 0
  },
  {
    question: "What is 1/5 of 400?",
    options: ["80", "40", "200", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular nonagon with side length 5cm?",
    options: ["45cm", "25cm", "30cm", "40cm"],
    correct: 0
  },
  {
    question: "What is 15% of 500?",
    options: ["75", "15", "50", "100"],
    correct: 0
  },
  {
    question: "How many minutes are in 6 hours?",
    options: ["360 minutes", "60 minutes", "120 minutes", "240 minutes"],
    correct: 0
  },
  {
    question: "What is the square of 42?",
    options: ["1764", "84", "42", "1681"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">\(150\-50\)/10 \+ 5</span>?",
    options: ["15", "10", "20", "12"],
    correct: 0
  },
  {
    question: "What is the smallest prime number greater than 1600?",
    options: ["1601", "1607", "1609", "1613"],
    correct: 0
  },
  {
    question: "What is the value of <span class="math-inline">25^2</span>?",
    options: ["625", "50", "25", "125"],
    correct: 0
  },
  {
    question: "Convert 0.0009 to a percentage.",
    options: ["0.09%", "0.009%", "0.9%", "9%"],
    correct: 0
  },
  {
    question: "How many vertices does a hexagonal prism have?",
    options: ["12", "8", "6", "10"],
    correct: 0
  },
  {
    question: "What is the lowest common multiple (LCM) of 18 and 24?",
    options: ["72", "24", "18", "144"],
    correct: 0
  },
  {
    question: "What is the sum of 1/2 and 1/16?",
    options: ["9/16", "2/18", "1/32", "1/2"],
    correct: 0
  },
  {
    question: "What is 100% of 800?",
    options: ["800", "100", "0", "1"],
    correct: 0
  },
  {
    question: "What is the radius of a circle with area 12.56cm² (use <span class="math-inline">\\pi \\approx 3\.14</span>)?",
    options: ["2cm", "4cm", "1cm", "3cm"],
    correct: 0
  },
  {
    question: "What is the next number in the sequence: 10, 11, 13, 16, 20, 25, ... (add increasing numbers)?",
    options: ["31", "30", "29", "28"],
    correct: 0
  },
  {
    question: "What is the difference between 5.0 and 0.0005?",
    options: ["4.9995", "5.0005", "4.99", "5.0"],
    correct: 0
  },
  {
    question: "What is the product of 0.8 and 0.8?",
    options: ["0.64", "6.4", "0.064", "1.6"],
    correct: 0
  },
  {
    question: "How many days are in May?",
    options: ["31", "30", "28", "29"],
    correct: 0
  },
  {
    question: "What is the area of a right-angled triangle with sides 7cm, 24cm, 25cm?",
    options: ["84cm²", "168cm²", "31cm²", "75cm²"],
    correct: 0
  },
  {
    question: "What is the cube root of 1?",
    options: ["1", "0", "10", "100"],
    correct: 0
  },
  {
    question: "What is the Roman numeral for 800?",
    options: ["DCCC", "CM", "DCCL", "DL"],
    correct: 0
  },
  {
    question: "What is 0.0001 as a percentage?",
    options: ["0.01%", "0.001%", "0.1%", "1%"],
    correct: 0
  },
  {
    question: "Solve: x / 15 = 2",
    options: ["x = 30", "x = 17", "x = 1", "x = 15"],
    correct: 0
  },
  {
    question: "What is 50% of 300?",
    options: ["150", "300", "50", "600"],
    correct: 0
  },
  {
    question: "How many lines of symmetry does a regular pentagon have?",
    options: ["5", "1", "0", "2"],
    correct: 0
  },
  {
    question: "What is the mean of 1, 2, 3, 4, 5?",
    options: ["3", "2", "4", "5"],
    correct: 0
  },
  {
    question: "What is the sum of 0.25 and 0.025?",
    options: ["0.275", "0.25", "0.025", "0.5"],
    correct: 0
  },
  {
    question: "What is the quotient of 360 and 8?",
    options: ["45", "36", "80", "10"],
    correct: 0
  },
  {
    question: "How many sides does a hectokilogon have?",
    options: ["100000", "100", "1000", "10000"],
    correct: 0
  },
  {
    question: "What is the highest common factor (HCF) of 24 and 48?",
    options: ["24", "12", "6", "8"],
    correct: 0
  },
  {
    question: "What is the sum of 1/3 and 1/10?",
    options: ["13/30", "2/13", "1/30", "1/3"],
    correct: 0
  },
  {
    question: "What is 2/5 of 400?",
    options: ["160", "80", "200", "100"],
    correct: 0
  },
  {
    question: "What is the perimeter of a regular hectokilogon with side length 0.001cm?",
    options: ["100cm", "1000cm", "10cm", "1cm"],
    correct: 0
  },
  {
    question: "What is 20% of 250?",
    options: ["50", "20", "25", "100"],
    correct: 0
  },
  {
    question: "How many seconds are in 1 hour?",
    options: ["3600 seconds