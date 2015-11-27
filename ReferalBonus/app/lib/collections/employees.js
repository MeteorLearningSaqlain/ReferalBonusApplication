Employees = new Mongo.Collection('employees');


// if (Meteor.isServer) {
  Employees.allow({
    insert: function (userId, doc) {
      return true; //false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true; //false;
    },

    remove: function (userId, doc) {
      return true; //false;
    }
  });

//   Employees.deny({
//     insert: function (userId, doc) {
//       return true;
//     },

//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },

//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }

// EmployeeReferalsSchema = new SimpleSchema({
//     fullName: {
//     type: String,
//     label: "Full Name",
//     max: 50
//   },
//   designationAppliedFor: {
//     type: String,
//     label: "Designation Applied For",
//     max: 100
//   },
//   email: {
//     type: String,
//     label: "Email",
//     regEx: /^[A-Za-z0-9_.]+@[A-Za-z]+.[A-Za-z]+$/,
//     max: 100
//   }
// });

Employees.attachSchema(new SimpleSchema({
  fullName: {
    type: String,
    label: "Full Name",
    max: 50
  },
  designation: {
    type: String,
    label: "Designation",
    allowedValues: ["Jr. Associate", "Associate", "Sr. Associate", "Full Stack Developer", "Sr. Full Stack Developer", "Full Stack Architect"],
    max: 100
  },
  email: {
    type: String,
    label: "Email",
    regEx: /^[A-Za-z0-9_.]+@[A-Za-z]+.[A-Za-z]+$/,
    max: 100
  },
  isAdmin: {
    type: Boolean,
    label: "Is Admin?",
  } //,
  // referals: {
  //   type: [EmployeeReferalsSchema],
  //   optional: true
  // }
}));
