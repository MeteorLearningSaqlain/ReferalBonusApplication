Referals = new Mongo.Collection('referals');


// if (Meteor.isServer) {
  Referals.allow({
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

//   Referals.deny({
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


Referals.attachSchema(new SimpleSchema({
  fullName: {
    type: String,
    label: "Full Name",
    max: 50
  },
  mobileNumber: {
    type: String,
    label: "Mobile Number",
    regEx: /^[+]?[0-9]+$/,
    max: 20
  },
  email: {
    type: String,
    label: "Email",
    regEx: /^[A-Za-z0-9_.]+@[A-Za-z]+.[A-Za-z]+$/,
    max: 100
  },
  age: {
    type: Number,
    label: "Age",
    min: 18,
    max: 80
  },
  gender: {
    type: String,
    label: "Gender",
    allowedValues: ["Male", "Female"]
  },
  experience: {
    type: Number,
    label: "Experience(in years)",
    max: 60
  },
  areasOfExpertise: {
    type: [String],
    label: "Areas Of Expertise",
  },
  areasOfKnowledge: {
    type: [String],
    label: "Areas Of Knowledge",
  },
  appliedDesignation: {
    type: String,
    label: "Applied Designation",
    allowedValues: ["Jr. Associate", "Associate", "Sr. Associate", "Full Stack Developer", "Sr. Full Stack Developer", "Full Stack Architect"],
    max: 100
  },
  resume: {
    type: String,
    label: "Resume"
  },
  referredBy: {
    type: String,
    label: "Referred By"
  },
  referredByEmail: {
    type: String,
    label: "Referred By Email"
  },
  assignedInterviewer: {
    type: String,
    label: "Assigned Interviewer",
  },
  interViewSchedule: {
    type: Date,
    label: "Interview Schedule"
  },
  selected: {
    type: Boolean,
    label: "Selected"
  },
  amountCredited: {
    type: Boolean,
    label: "Referal Bonus Paid"
  }
}));