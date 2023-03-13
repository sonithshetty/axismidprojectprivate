package AxisMidProject;

public class student {
  private int id;
  private String name;
  private int grade;
  private int feesPaid;
  private int feesTotal;

  public student(int id, String name, int grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    feesPaid = 0;
    feesTotal = 15000;
  }

  public void setGrade(int grade) {
    this.grade = grade;
  }

  public void payFees(int fees) {
    feesPaid = feesPaid + fees;
    school.updateTotalMoneyEarned(feesPaid);
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getGrade() {
    return grade;
  }

  public int getFeesPaid() {
    return feesPaid;
  }

  public int getFeesTotal() {
    return feesTotal;
  }

  public int getRemainingFees() {
    return feesTotal - feesPaid;
  }

  @Override
  public String toString() {
    return "Name of the student: " + name + " and paid fees is " + feesPaid;

  }
}