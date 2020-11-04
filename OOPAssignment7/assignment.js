class Course {
    #price = 0;
  
    get price() {
      return '$' + this.#price;
    }
  
    set price(value) {
      if (value < 0) {
        throw 'Invalid value!';
      }
      this.#price = value;
    }
  
    constructor(courseTitle, coursePrice, courseLength) {
      this.title = courseTitle;
      this.price = coursePrice;
      this.length = courseLength;
    }
  
    calValue() {
      return this.length / this.#price;
    }
  
    printSummary() {
      console.log(
        `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
      );
    }
  }
  
  const jsCourse = new Course('JavaScript - The Complete Guide', 30, 10);
  const quizApp = new Course('OuizApp - The Complete Guide', 45, 20);
  
  console.log(jsCourse);
  console.log(quizApp);
  
  console.log(jsCourse.calValue());
  console.log(quizApp.calValue());
  
  jsCourse.printSummary();
  quizApp.printSummary();
  
  class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
      super(title, price, length);
      this.numOfExercises = exercisesCount;
    }
  }
  
  const angularCourse = new PracticalCourse(
    'Angular - The Complete Guide',
    20,
    15,
    5
  );
  
  console.log(angularCourse);
  angularCourse.printSummary();
  
  class TheoreticalCourse extends Course {
    publish() {
      console.log('Publishing...');
    }
  }
  
  const flutterCourse = new TheoreticalCourse(
    'Flutter - Build iOS and Android Apps',
    50,
    48
  );
  
  flutterCourse.price = 5000;
  //flutterCourse.#price = 100;
  
  flutterCourse.printSummary();
  flutterCourse.publish();