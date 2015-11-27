if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "syed.saqlain@galepartners.com",
    email: "syed.saqlain@galepartners.com",
    password: "abcde12345",
    profile: { name: "Syed Saqlain" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["admin"]);
  console.log("Added Admin User");
}