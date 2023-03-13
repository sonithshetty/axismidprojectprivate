package AxisMidProject;

public class teacher {
  private int id;
  private String name;
  private int salary;
  private int salaryEarned;

  public teacher(int id, String name, int salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.salaryEarned = 0;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getSalary() {
    return salary;
  }

  public void setSalary(int salary) {
    this.salary = salary;
  }

  public void recieveSalary(int salary) {
    salaryEarned = +salary;
    school.updateTotalMoneySpent(salary);
  }

  @Override
  public String toString() {
    return "Name of the Teacher is " + name + " & Total Salary earned so far is " + salaryEarned;
  }
}
