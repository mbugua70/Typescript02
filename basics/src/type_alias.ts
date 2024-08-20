type Userid = string | number;
type Objuser = { name: string; uuid: Userid };

const studentsDetails = (name: string, uuid: Userid) => {
  console.log(`${name} has an id of ${uuid}`);
};

const greet = (user: { name: string; uuid: Userid }) => {
  console.log(`The student ${user.name} has an id of ${user.uuid}`);
};

const greetThree = (user: Objuser) => {
  console.log(`${user.name} your id number is ${user.uuid}`);
};

greet({ name: "john", uuid: "246340xh" });
studentsDetails("john", "1234534");
greetThree({ name: "kamau", uuid: "794769jl" });
