class Student:
    def __init__(self, name, age, ) -> None:
        self.name = name
        self.age = age

    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age


class Course:
    def __init__(self, max_student) -> None:
        self.students = []
        self.max_student = max_student

    def add_student(self, student):
        if len(self.students) < self.max_student:
            self.students.append(student)
            return True
        return False
    
    def list_student(self):
        return self.students


student1 = Student("james", 39)
student2 = Student("Timothy", 24)

course1 = Course(20)
course1.add_student(student1)
course1.add_student(student2)

print(course1.students[0].name)

