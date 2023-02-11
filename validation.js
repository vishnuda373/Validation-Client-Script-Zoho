var dob = ZDK.Page.getField("Date_of_Birth").getValue();
var dob_array = dob.split("/");
birthDate = new Date(dob_array[2], dob_array[1], dob_array[0]);
otherDate = new Date();

var years = (otherDate.getFullYear() - birthDate.getFullYear());

if (otherDate.getMonth() < birthDate.getMonth() || 
    otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
    years--;
}

if (years < 18) {
    ZDK.Client.showAlert("Age less than 18");    
}