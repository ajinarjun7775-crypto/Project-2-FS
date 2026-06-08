// ====== 1 ======== //
let userInput = "Chennai Job Search";
console.log("Input:", userInput);
userInput = userInput.toUpperCase();
console.log("Processed:", userInput);

// ====== 2 ======== //
let name = "Ajin";
console.log("Name:", name);
name = name.toLowerCase();
console.log("Lowercase:", name);


// ====== 3 ======== //
let city = "  Chennai   ";
console.log("City:", city);
city = city.trim();
console.log("Trimmed:", city);

// ====== 4 ======== //
let skill = "html css bootstrap";
console.log("Skill:", skill);
skill = skill.replace("css", "JavaScript");
console.log("Updated Skill:", skill);


let jobTitle = "Frontend Developer";
console.log("Job Title:", jobTitle);
jobTitle = jobTitle.concat(" - Fresher");
console.log("Enhanced Title:", jobTitle);

let email = "user@example.com";
console.log("Email:", email);
email = email.substring(0, email.indexOf("@"));
console.log("Username:", email);

let address = "Koyambedu, Chennai";
console.log("Address:", address);
address = address.split(",")[0];
console.log("Area:", address);

let password = "pass123";
console.log("Password:", password);
password = password.repeat(2);
console.log("Repeated:", password);

let message = "Welcome to SLA Institute";
console.log("Message:", message);
message = message.slice(8);
console.log("Sliced:", message);

let message = "Welcome to SLA Institute";
console.log("Message:", message);
message = message.slice(8);
console.log("Sliced:", message);

let profileBio = "Aspiring Web Developer";
console.log("Bio:", profileBio);
profileBio = profileBio.toUpperCase().substring(0, 15);
console.log("Short Bio:", profileBio);

let salary = 15000;
console.log("Current Salary:", salary);
salary = salary + 10000;
console.log("Expected Salary:", salary);   

let age = 25;
console.log("Age:", age);
age = age + 1;
console.log("Next Year Age:", age);  

let experience = 3;
console.log("Experience (years):", experience);
experience = experience * 2;
console.log("Projected Experience:", experience); 


let temperature = 35;
console.log("Temperature:", temperature);
temperature = temperature > 30 ? "Hot" : "Normal";
console.log("Status:", temperature);

let count = 0;
console.log("Initial Count:", count);
count += 5;
console.log("Updated Count:", count);  

let progress = 40;
console.log("Course Progress (%):", progress);
progress = Math.min(progress + 20, 100);
console.log("Updated Progress:", progress);   

let isEmployed = false;
console.log("Employed:", isEmployed);
isEmployed = true;
console.log("Status Updated:", isEmployed);   

let emi = 15000;
console.log("Monthly EMI:", emi);
emi = emi * 0.9;
console.log("Negotiated EMI:", emi);

let score = 75;
console.log("Initial Score:", score);
score = score >= 70 ? "Pass" : "Fail";
console.log("Result:", score);   

let distance = 12;
console.log("Distance (km):", distance);
distance = (distance * 1000) + " meters";
console.log("In Meters:", distance);    

let skills = ["HTML", "CSS"];
console.log("Skills:", skills);
skills = [...skills, "JavaScript"];
console.log("Updated Skills:", skills);     

let profile = { name: "Ajin", city: "Chennai" };
console.log("Profile:", profile);
profile.experience = "3 years";
console.log("Updated Profile:", profile);       

let applications = 5;
console.log("Applications Sent:", applications);
applications++;
console.log("Total Applications:", applications);

let searchTerm = "Frontend jobs Chennai";
console.log("Search:", searchTerm);
searchTerm = searchTerm.toLowerCase().replace(" ", "-");
console.log("Formatted:", searchTerm); 

let portfolioLink = "https://example.com";
console.log("Link:", portfolioLink);
portfolioLink = portfolioLink + "/flipkart-clone";
console.log("Updated Link:", portfolioLink); 

let interviewTime = "10:00 AM";
console.log("Scheduled Time:", interviewTime);
interviewTime = "11:30 AM";
console.log("Rescheduled:", interviewTime); 

let projects = ["Bootstrap Portfolio"];
console.log("Projects:", projects);
projects.push("Flipkart Clone");
console.log("Updated Projects:", projects); 

let projects = ["Bootstrap Portfolio"];
console.log("Projects:", projects);
projects.push("Flipkart Clone");
console.log("Updated Projects:", projects); 

let feedback = "Good performance";
console.log("Feedback:", feedback);
feedback = feedback + " - Needs JavaScript improvement";
console.log("Detailed Feedback:", feedback); 

let userData = { input: "Chennai" };
console.log("User Data:", userData);
userData.processed = userData.input.toUpperCase();
console.log("Processed Data:", userData);
