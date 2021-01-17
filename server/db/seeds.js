use roomr_db;

db.dropDatabase();

db.users.insertMany([

  {
    firstName: "Cameron",
    lastName: "Maclean", 
    studentId: 51337402,
    university: "University of Edinburgh",
    yearOfStudy: 3
  }
])