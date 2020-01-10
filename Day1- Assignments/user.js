module.exports = function (name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    this.getName = function () {
        return this.name;
    }

    this.getAge = function () {
        return this.age;
    }

    this.getEmail = function () {
        return this.email;
    }
}