package AxisMidProject;

import java.util.ArrayList;
import java.util.List;

public class main {
  public static void main(String[] args) {
    teacher abc = new teacher(1, "ABC", 500);
    teacher mno = new teacher(2, "MNO", 1000);
    teacher pqr = new teacher(3, "PQR", 800);

    List<teacher> teacherList = new ArrayList<>();
    teacherList.add(abc);
    teacherList.add(mno);
    teacherList.add(pqr);

    student hij = new student(1, "HIJ", 3);
    student yo = new student(1, "YO", 4);
    student wow = new student(1, "WOW", 10);

    List<student> studentList = new ArrayList<>();
    studentList.add(hij);
    studentList.add(yo);
    studentList.add(wow);

    school hfchs = new school(teacherList, studentList);
    hij.payFees(3000);
    yo.payFees(4500);
    System.out.println("------------");
    System.out.println("HFCHS has earned " + hfchs.getTotalMoneyEarned());
    System.out.println("------------");
    abc.recieveSalary(abc.getSalary());
    System.out.println("HFCHS has paid salary to " + abc.getName() + " now has " + hfchs.getTotalMoneyEarned());
    System.out.println("------------");
    System.out.println(pqr);
    System.out.println(wow);

  }
}
