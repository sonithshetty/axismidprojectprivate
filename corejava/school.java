package AxisMidProject;

import java.util.List;

public class school {
  private List<teacher> teachers;
  private List<student> students;
  private static int totalMoneyEarned;
  private static int totalMoneySpent;

  public school(List<teacher> teachers, List<student> students) {
    this.teachers = teachers;
    this.students = students;
    this.totalMoneyEarned = 0;
    this.totalMoneySpent = 0;
  }

  public List<teacher> getTeachers() {
    return teachers;
  }

  public void addTeachers(teacher teacher) {
    teachers.add(teacher);
  }

  public List<student> getStudents() {
    return students;
  }

  public void addStudents(student student) {
    students.add(student);
  }

  public int getTotalMoneyEarned() {
    return totalMoneyEarned;
  }

  public static void updateTotalMoneyEarned(int moneyEarned) {
    totalMoneyEarned += moneyEarned;
  }

  public int getTotalMoneySpent() {
    return totalMoneySpent;
  }

  public static void updateTotalMoneySpent(int moneySpent) {
    totalMoneyEarned -= moneySpent;
  }

}
