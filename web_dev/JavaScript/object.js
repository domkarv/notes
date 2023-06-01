// For any difficulty refer hand-written notes

var studentOneInfo = {
  studentName: "Omkar",
  age: 19,
  rollNo: 11,
  studentMarks: function () {
    return 93;
  }, // this is a function
};

console.log(
  studentOneInfo.studentName +
    " " +
    studentOneInfo.age +
    " " +
    studentOneInfo.rollNo +
    " " +
    studentOneInfo.studentMarks()
);

var studentTwoInfo = {
  studentName: "Aarav",
  age: 19,
  rollNo: 12,
  studentMarks: function () {
    return 93;
  },
};

// Now, instead of creating studentTwoInfo, studentThreeInfo,.. again! again!
// What we can we do is, create a 'constructor function'

// Creating Constructor Function
function StudentInfo(studentName, age, rollNo, marks) {
  this.studentName = studentName;
  this.age = age;
  this.rollNo = rollNo;
  this.studentMarks = function () {
    return marks;
  }; // this is a function
} // This constructor function may be converted to a class declaration.
// like,
/* 
class StudentInfo {
  constructor(studentName, age, rollNo) {
    this.studentName = studentName;
    this.age = age;
    this.rollNo = rollNo;
    this.studentMarks = function () {
      return marks;
    }; // this is a function
  }
}
// and it accessed same as the constructor function
*/
// Initializing objectz
var studentThreeInfo = new StudentInfo("Om", 19, 13, 87);
var studentFourInfo = new StudentInfo("Dikshant", 19, 14, 82);

console.log(
  studentThreeInfo.studentName +
    " " +
    studentThreeInfo.age +
    " " +
    studentThreeInfo.rollNo +
    " " +
    studentThreeInfo.studentMarks()
);

console.log(
  studentFourInfo.studentName +
    " " +
    studentFourInfo.age +
    " " +
    studentFourInfo.rollNo +
    " " +
    studentFourInfo.studentMarks()
);
