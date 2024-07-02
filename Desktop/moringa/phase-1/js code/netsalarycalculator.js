/*this function determines an individual's NHIF contribution based on his/her gross salary*/
const calculateNHIF = (grossSalary) => { 


    if (grossSalary >= 0 && grossSalary <= 5999) {
      return 150;

    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
     return 300;

    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      return 400;

    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      return 500;

    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      return 600;

    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      return 750;

    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      return 850;

    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      return 950;

    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      return 1000;

    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      return 1000;

    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      return 1100;

    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      return 1200;

    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      return 1300;

    } else if (grossSalary >= 70000 && grossSalary <= 79000) {
      return 1400;

    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      return 1500;

    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      return 1600;

    } else if (grossSalary >= 100000) {
      return 1700;

    } else {
      return "Invalid gross salary";
    }
    const TAX_RATES = [
        { lower: 0, upper: 24000, rate: 10 },
        { lower: 24001, upper: 32333, rate: 25 },
        { lower: 32334, upper: 41917, rate: 30 },
        { lower: 41918, upper: 53917, rate: 35 },
        { lower: 53918, upper: Infinity, rate: 45 }
    ];

    // create function to calculate tax on gross salary
    function calculateTax(grossSalary) {
        let tax = 0;
        for (let bracket of TAX_BRACKETS) {
            if (grossSalary > bracket.min) {
                let taxableAmount = Math.min(grossSalary, bracket.max) - bracket.min;
                tax += taxableAmount * bracket.rate;
            }
        }
        return tax;
    }
    // create function to calculate NHIF deduction as per gross salary 
    function calculateNHIF(grossSalary) {
        for (let rate of NHIF_RATES) {
            if (grossSalary >= rate.min && grossSalary <= rate.max) {
                return rate.deduction;
            }
        }
        return 0;
    }
    // create function to calculate NSSF deduction as per gross salary 
    function calculateNSSF(grossSalary) {
        return grossSalary * NSSF_RATE;
    }
    // create function to calculate net salary
    function calculateNetSalary(basicSalary, benefits) {
        let grossSalary = basicSalary + benefits;
        let payeeTax = calculateTax(grossSalary);
        let nhifDeduction = calculateNHIF(grossSalary);
        let nssfDeduction = calculateNSSF(grossSalary);
        let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
    // assign value to the decalred variables (grossSalary, payeeTax, nhifDeduction, nssfDeduction, netSalary)
        return {
            grossSalary: grossSalary,
            payeeTax: payeeTax,
            nhifDeduction: nhifDeduction,
            nssfDeduction: nssfDeduction,
            netSalary: netSalary
        };
    }
    // event listener to handle form submission
    document.getElementById('salaryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let basicSalary = parseFloat(document.getElementById('basicSalary').value);
        let benefits = parseFloat(document.getElementById('benefits').value);
        
        let salaryDetails = calculateNetSalary(basicSalary, benefits);
        // Displys results in the designated sections
        document.getElementById('result').innerHTML = `
            <p>Gross Salary: KES ${salaryDetails.grossSalary.toFixed(2)}</p>
            <p>PAYE Tax: KES ${salaryDetails.payeeTax.toFixed(2)}</p>
            <p>NHIF Deduction: KES ${salaryDetails.nhifDeduction.toFixed(2)}</p>
            <p>NSSF Deduction: KES ${salaryDetails.nssfDeduction.toFixed(2)}</p>
            <p><strong>Net Salary: KES ${salaryDetails.netSalary.toFixed(2)}</strong></p>
        `;
    });

  
  };