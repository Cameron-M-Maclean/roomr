use roomr_db;

db.dropDatabase();

db.users.insertMany(
[
  {
    lessees: [
      {
        firstName: "Cameron",
        lastName: "Maclean", 
        studentId: 51337402,
        university: "University of Edinburgh",
        yearOfStudy: 3
      },
      {
        firstName: "Emily",
        lastName: "Doran", 
        studentId: 51323402,
        university: "Napier University",
        yearOfStudy: 2
      }
    ],
    properties: [
      {
        landlord: "Mark Maclean",
        address: "56/2 Spottiswoode Street",
        postcode: "EH9 1DH",
        hmo: true,
        bedrooms: 4
      },
      {
        landlord: "Anna Maclean",
        address: "16 Mortonhall Road",
        postcode: "EH9 2HW",
        hmo: false,
        bedrooms: 4 
      }
    ]
  }
])