function getAkanName(){
    var yearOfBirth = document.getElementById("dateOfBirth").value;
    var monthOfBirth = Number(document.getElementById("dateOfBirth").value);
    var dayOfBirth = Number(document.getElementById("dateOfBirth").value);
    
    var gend = document.getElementsByName("flexRadioDefault");
    var valid = false;
    var i = 0;
    var j = 0;

    function getGender(){
        while(i < gend.length){
            if (gend[i].checked){
                valid = true;
            }
            i++;
        }
        if (!valid){
            alert("Please provide your gender.")
            document.getElementById(selectGender).innerHTML = "Select gender"
        }
        for (j = 0; j < gend.length; j++){
            if (gend[j].checked){
                new_gender_value = gend[j].value;
            }
        }
        return new_gender_value;
    }
    var myGender = getGender();
    console.log("I got passed " + myGender);
    function monthValidator(){
        if (monthOfBirth < 1 || monthOfBirth > 12){
            return false;
        }else{
            return true;
        }
    }
    function dayValidator(){
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0){
            if (dayOfBirth >28 || dayOfBirth < 1){
                return false;
            }else if (monthOfBirth === 2 && dayOfBirth > 29){
                return false;
            }else if (monthOfBirth === 2 && dayOfBirth < 1){
                return false;
            }else {
                return true;
            }
        }else if (dayOfBirth < 1 || dayOfBirth > 31){
            return false;
        }else {
            return true;
        }
    }
    var monthValid = monthValidator();
    var dayValid = dayValidator();
    var dayOfTheWeek;
    
    var dDayOfTheWeek = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2 * Number(yearOfBirth.slice(0,2))- 1) +((5 * Number(yearOfBirth.slice(2,4))/ 4))+ ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7)
    if(dDayOfTheWeek === 0){
        dayOfTheWeek = 6;
    }else{
        dayOfTheWeek = dDayOfTheWeek - 1;
    }
    
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (myGender === "male" && monthValid && dayValid){
        switch (dayOfTheWeek){
            case 0:
            document.getElementById("result").innerHTML = "You were born on a Sunday and your Akan name is " + maleName[0];
            break;
            case 1:
            document.getElementById("result").innerHTML = "You were born on a Monday and your Akan name is " + maleName[1];
            break;
            case 2:
            document.getElementById("result").innerHTML = "You were born on a Tuesday and your Akan name is " + maleName[2];
            break;
            case 3:
            document.getElementById("result").innerHTML = "You were born on a Wednesday and your Akan name is " + maleName[3];
            break;
            case 4:
            document.getElementById("result").innerHTML = "You were born on a Thursday and your Akan name is " + maleName[4];
            break;
            case 5:
            document.getElementById("result").innerHTML = "You were born on a Friday and your Akan name is " + maleName[5];
            break;
            case 6:
            document.getElementById("result").innerHTML = "You were born on a Saturday and your Akan name is " + maleName[6];
            break;

            default:
                alert("Please verify that you are human");
        }
    
    }else if (myGender === "female" && monthValid && dayValid){
        switch (dayOfTheWeek){                                                                                                      
            case 0:
            document.getElementById("result").innerHTML = "You were born on a Sunday and your Akan name is " + femaleName[0];
            break;
            case 1:
            document.getElementById("result").innerHTML = "You were born on a Monday and your Akan name is " + femaleName[1];
            break;
            case 2:
            document.getElementById("result").innerHTML = "You were born on a Tuesday and your Akan name is " + femaleName[2];
            break;
            case 3:
            document.getElementById("result").innerHTML = "You were born on a Wednesday and your Akan name is " + femaleName[3];
            break;
            case 4:
            document.getElementById("result").innerHTML = "You were born on a Thursday and your Akan name is " + femaleName[4];
            break;
            case 5:
            document.getElementById("result").innerHTML = "You were born on a Friday and your Akan name is " + femaleName[5];
            break;
            case 6:
            document.getElementById("result").innerHTML = "You were born on a Saturday and your Akan name is " + femaleName[6];
            break;

            default:
                alert("Please verify that you are human");
        }
    
    }else{
        alert("Invalid Details!!!")
    }
}