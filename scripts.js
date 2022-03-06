function getAkanName(){
    var yearOfBirth = document.getElementById("dateOfBirth").value;
    var gender = document.getElementById("flexRadioDefault1");
    var valid = false;
    var i = 0;
    var j = 0;

    function getGender(){
        while(i < gender.length){
            if (gender[i].checked){
                valid = true;
            }
            i++;
        }
        if (!valid){
            alert("Please provide your gender.")
            document.getElementById(selectGender).innerHTML = "Select gender"
        }
        for (j = 0; j < gender.length; j++){
            if (gender[j].checked){
                new_gender_value = gender[j].value;
            }
        }
        return new_gender_value;
    }
    var genderValue = getGender();
    console.log("I got passed " + genderValue);
    function monthValidator(){
        if (monthOfBirth < 1 || monthOfBirth > 12){
            return false;
        }else{
            return false;
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
    var monthValid = monthValidator = monthValidator();
    var dayValid = dayValidator();
    var dayOfTheWeek;
    
    var dayOfTheWeek = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2 * Number(yearOfBirth.slice(0,2))- 1) +((5 * Number(yearOfBirth.slice(2,4))/ 4))+ ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7)
    if(dayOfTheWeek === 0){
        dayOfTheWeek = 6;
    }else{
        dayOfTheWeek = dayOfTheWeek - 1;
    }
    
    var maleName = ["Kwasi!", "Kwadwo!", "Kwabena!", "Kwaku!", "Yaw!", "Kofi!", "Kwame!"];
    var femaleName = ["Akosua!", "Adwoa!", "Abenaa!", "Akua!", "Yaa!", "Afua!", "Ama!"];

    if (myGender === "male" && monthValid && dayValid){
        switch (dayOfTheWeek){
            case 0:
            document.getElementById("result").innerHTML = "You were born on a Sunday and your Akan name is " + maleName[0];
            break;
        }
    }
}