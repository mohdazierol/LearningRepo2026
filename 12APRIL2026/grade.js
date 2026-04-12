let grade = String(prompt("Enter your grade:")).toUpperCase();

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Pass");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
        break;
}