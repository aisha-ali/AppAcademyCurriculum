function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.firstname} ${this.lastname}`;
};

Student.prototype.enroll = function (course) {
  if (!this.courses.includes(course)) {
    this.courses.forEach(crse => {
      if (crse.conflictsWith(course)) {
        return "Course conflict";
      }
    });

    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function () {
  const courseLoad = {};

  this.courses.forEach(course => {
    let dept = course.department;
    courseLoad[dept] = courseLoad[dept] || 0;
    courseLoad[dept] += course.credits;
  });

  return courseLoad;
};

function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.block = block;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  if (this.students.indexOf(student) === -1) {
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function (other) {
  if (this.block !== other.block) { return false; }

  return this.days.some(day => other.days.indexOf(day) !== -1);
};



