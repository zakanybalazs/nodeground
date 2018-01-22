

// training for promises

// test data
var users = [{
    u_id: 1,
    name: "Bob",
    age: 22
  },{
    u_id: 2,
    name: "Jess",
    age: 23
}]
var grades = [{
    g_id: 1,
    u_id: 1,
    grade: 5
  }, {
    g_id: 2,
    u_id: 2,
    grade: 4
  }, {
    g_id: 3,
    u_id: 1,
    grade: 3
}];

// making the functions with a promise
var getUser = (id) => {
  return new Promise( (resolve, reject) => {
    var user = users.find((user) => user.u_id == id);
    if(user) {
      resolve(user);
    } else {
      reject("there is no user with this id");
    }
  });
}
var getGrades = (id) => {
  return new Promise(function(resolve, reject) {
    resolve(grades.filter((grade) => grade.u_id == id));
  });
}
var getStat = (id) => {
  return getUser(id).then((user) => {
    return getGrades(user.u_id);
  }).then((grades) => {
    var sum_of_grades = 0;
    for(i = 0; i < grades.length; i++) {
      sum_of_grades += grades[i].grade;
    }
    var percentage = sum_of_grades / grades.length;
    return percentage;
  });
}

// now doing this the right way

var getStat_better = async (id) => { //async functions act like promises
  const user = await getUser(id); // if resolve, than this is the user, otherwise it will go to catch
  const grades = await getGrades(user.u_id);
  var sum_of_grades = 0;
  for(i = 0; i < grades.length; i++) {
    sum_of_grades += grades[i].grade;
  }
  var percentage = sum_of_grades / grades.length;
  
  var msg = `${user.name} has these grades: ${grades.map((grades) => grades.grade)}, therefore the current mark is: ${percentage}`;
  return msg;
}

// calling the better function

getStat_better(1).then((name) => { // if all goes well (resolve)
    console.log(name);
  }).catch((err) => { // if didn't go well (reject)
    console.log("there was an error: ", err);
})

// // actually calling the functions with real data
// getUser(1).then((user) => {
//   console.log("name is: ",user.name);
// }).catch((error) => {
//   console.log("user not found. reason: ", error);
// });
// // actually calling the function with real data
// getGrades(1).then((grades) => {
//   console.log("grades are: ");
//   console.log(grades.map((grades) => grades.grade));
// }).catch((error) => {
//   console.log("user not found. reason: ", error);
// });
// getStat(1).then((percentage) => {
//   console.log("currently at: ", percentage);
// }).catch((error) => {
//   console.log("can't do, there was an error: ", error);
// });
