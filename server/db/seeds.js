use roomr_db;

db.dropDatabase();

db.users.insertMany(
[
  {
    lessees: [
      {
        firstName: "Tenant",
        lastName: "NumberOne", 
        studentId: 0001,
        university: "University One",
        yearOfStudy: 3
      },
      {
        firstName: "Tenant",
        lastName: "NumberTwo", 
        studentId: 0002,
        university: "University Two",
        yearOfStudy: 2
      }
    ],
    properties: [
      {
        landlordName: "Landlord 1",
        homeAddress:"Home Address 1",
        letAddress: "Let Address 1",
        postcode: "Postcode 1",
        hmo: true,
        bedrooms: 4
      },
      {
        landlordName: "Landlord 2",
        homeAddress:"Home address 2",
        letAddress: "Let address 2",
        postcode: "Postcode 2",
        hmo: false,
        bedrooms: 4 
      }
    ]
  }
])