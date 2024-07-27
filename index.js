const day = document.getElementById("days");
const month= document.getElementById("months");
const year = document.getElementById("years");
const btn = document.getElementById("btn");
const ay= document.getElementById("year");
const am= document.getElementById("month");
const ad= document.getElementById("day");
const lab=document.getElementById("lab");
const lab1=document.getElementById("lab1");
const lab2=document.getElementById("lab2");
const ey=document.getElementById("error1");
const em=document.getElementById("error2");
const ed=document.getElementById("error3");
const l0=document.getElementById("l0");
const l1=document.getElementById("l1");
const l2=document.getElementById("l2");

function ageCalculator() {  
       var dobYear = year.value;   
       var dobMonth = month.value; 
       var dobDate = day.value;  
       if(verifierDate(dobYear, dobMonth, dobDate)){

        var now = new Date();  
        //extract the year, month, and date from current date  
        var currentYear = now.getFullYear();  
        var currentMonth = now.getMonth()+1;  
        var currentDate = now.getDate();  

        //declare a variable to collect the age in year, month, and days  
        var age = {};  
    
        
        //get years  
        yearAge = currentYear - dobYear;  
          
        //get months  
        if (currentMonth >= dobMonth)  
          //get months when current month is greater  
          var monthAge = currentMonth - dobMonth;  
        else {  
          yearAge--;  
          var monthAge = 12 + currentMonth - dobMonth;  
        }  
      
        //get days  
        if (currentDate >= dobDate)  
          //get days when the current date is greater  
          var dateAge = currentDate - dobDate;  
        else {  
          monthAge--;  
          var dateAge = 31 + currentDate - dobDate;  
      
          if (monthAge < 0) {  
            monthAge = 11;  
            yearAge--;  
          }  
        }  
        //group the age in a single variable  
        age = {  
        years: yearAge,  
        months: monthAge,  
        days: dateAge  
        };  
            year.style.border="1px solid rgb(238, 238, 238)";
            month.style.border="1px solid rgb(238, 238, 238)";
            day.style.border="1px solid rgb(238, 238, 238)";
            lab.style.color="rgb(182, 182, 182)";
            lab1.style.color="rgb(182, 182, 182)";
            lab2.style.color="rgb(182, 182, 182)";
            em.style.display="none";          
            ey.style.display="none";
            ed.style.display="none";
    
        ay.innerHTML=age.years;
        am.innerHTML=age.months;
        ad.innerHTML=age.days;
       }
       else  if(!very(dobYear) && verm(dobMonth) && verd(dobYear,dobMonth,dobDate)){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            ey.style.display="block";
        
           }
           else  if(very(dobYear) && !verm(dobMonth) && verd(dobYear,dobMonth,dobDate) ){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            em.style.display="block";
            l1.style.marginTop="15px";
            
        
           }
           else  if(very(dobYear) && verm(dobMonth) && !verd(dobYear,dobMonth,dobDate) ){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            ed.style.display="block";
        
           }
           else if(very(dobYear) && !verm(dobMonth) && !verd(dobYear,dobMonth,dobDate)){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            em.style.display="block";
            ed.style.display="block";
           }
           else if(!very(dobYear) && !verm(dobMonth) && verd(dobYear,dobMonth,dobDate)){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            em.style.display="block";
            ey.style.display="block";
           }
           else if(!very(dobYear) && verm(dobMonth) && !verd(dobYear,dobMonth,dobDate)){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            ey.style.display="block";
            ed.style.display="block";
           }
           else if(!very(dobYear) && !verm(dobMonth) && !verd(dobYear,dobMonth,dobDate)){
            year.style.border="1px solid red";
            month.style.border="1px solid red";
            day.style.border="1px solid red";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            em.style.display="block";
            ed.style.display="block";
            ey.style.display="block";
           }
           
        
        
          
       }
      
   /* else if(!verm(dobMonth)){
       year.style.border="1px solid rgb(255, 82, 92)";
            month.style.border="1px solid rgb(255, 82, 92)";
            day.style.border="1px solid rgb(255, 82, 92)";
            lab.style.color="rgb(255, 82, 92)";
            lab1.style.color="rgb(255, 82, 92)";
            lab2.style.color="rgb(255, 82, 92)";
            em.style.display="block";
    }
    else if(!verd(dobYear,dobMonth,dobDate)){
      year.style.border="1px solid rgb(255, 82, 92)";
      month.style.border="1px solid rgb(255, 82, 92)";
      day.style.border="1px solid rgb(255, 82, 92)";
      lab.style.color="rgb(255, 82, 92)";
      lab1.style.color="rgb(255, 82, 92)";
      lab2.style.color="rgb(255, 82, 92)";
      ed.style.display="block";
    }
       
    }
*/
    function verifierDate(year, mois, jour) {
        var t=new Date();
        var dt=new Date(`${year}-${mois}-${jour}`);
        if (t>dt){
        if(year>=t.getFullYear){
            return false;
        }
        // Vérifier si le mois est dans la plage valide (1 à 12)
        if (mois < 1 ||( mois > 12)) {
            return false; // Le mois est invalide
        }
        
        // Vérifier si le jour est dans la plage valide pour le mois donné
        var dernierJourDuMois = new Date(year, mois, 0).getDate();
        if (jour < 1 || jour > dernierJourDuMois) {
            return false; // Le jour est invalide
        }
        
        // Si toutes les vérifications passent, la date est considérée comme valide
        return true;
    }
}
function very(year){
  var t=new Date();
  if (year>t.getFullYear()){
    return false;
  }
  return true;
}
function verm(mois){
  if (mois<0 ||( mois > 12)) {
    return false;
  }
  return true;
}
function verd(year,mois,jour){
  var dernierJourDuMois = new Date(year, mois, 0).getDate();
  if (jour < 0 || jour > dernierJourDuMois) {
      return false; // Le jour est invalide
  }
  return true;
}