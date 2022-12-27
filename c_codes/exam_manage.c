/* C program for the Examination Management System */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/* These are global variables and are accesible throughout the entire code */
int option = 0;
int i = 0;
int n = 0;
int x = 0;
int j = 0;
float tdays = 1;
/* Structure for Student */
struct stud
{
	char name[20];
	int rollNo;
	char fees;
	float days;
	float attend;
} s[50];
/* Function prototypes */
void add(struct stud s[]);
void add2(struct stud s[]);
void execute();
void eligibleStudents(struct stud s[]);
void printStudents(struct stud s[]);
void deleteRecord(struct stud s[]);
/* Driver Code */
void main()
{
	system("cls");
	printf("Welcome to Student database registration.\n");
	printf("Enter 0 to exit.\n");
	printf("Enter 1 to add student record.\n");

	do
	{
		scanf("%d", &option);
		switch (option)
		{
		case 0:
			exit(0);
			break;
		case 1:
			printf("\nEnter the total number of working days: ");
			scanf("%f", &tdays);
			printf("Enter the total number of students: ");
			scanf("%d", &n);
			add(s);
			break;
		default:
			printf("Only enter 0 or 1\n");
		}
	} while (option != 1);
}
/* Function to add the students record */
void add(struct stud s[50])
{

	for (i = 0; i < n; i++)
	{
		printf("\nStudent number : %d\n", (i + 1));

		printf("Enter the name of the student : ");
		scanf("%s", s[i].name);

		printf("Enter the roll number : ");
		scanf(" %d", &s[i].rollNo);

		printf("Enter the fees of the student ('P' for paid, 'N' for not paid) : ");
		scanf(" %c", &s[i].fees);

		printf("Enter the number of days the student was present for : ");
		scanf("%f", &s[i].days);

		s[i].attend = (s[i].days / tdays) * 100;
		printf("Student Attendence = %0.2f\n", s[i].attend);
	}
	execute();
}
/* Another function to add the students record used in function execute */
void add2(struct stud s[50])
{

	for (i = n; i < n + x; i++)
	{
		printf("\nStudent number : %d\n", (i + 1));

		printf("Enter the name of the student : ");
		scanf("%s", s[i].name);

		printf("Enter the roll number : ");
		scanf(" %d", &s[i].rollNo);

		printf("Enter the fees of the student ('P' for paid, 'N' for not paid) : ");
		scanf(" %c", &s[i].fees);

		printf("Enter the number of days the student was present for : ");
		scanf("%f", &s[i].days);

		s[i].attend = (s[i].days / tdays) * 100;
		printf("Student Attendence = %0.2f\n", s[i].attend);
	}
	n = n + x;
	execute();
}
/* Function to access various options */
void execute()
{
	printf("\nEnter the serial number to select the option.\n");
	printf("1. To show Eligible candidates.\n");
	printf("2. To add the student record.\n");
	printf("3. To delete the student record.\n");
	printf("4. Show the list of all the student.\n");
	printf("Otherwise enter 0 to exit.\n");

	scanf("%d", &option);

	switch (option)
	{
	case 1:
		eligibleStudents(s);
		execute();
		break;
	case 2:
		printf("\nRecord of how many student do you want to add: ");
		scanf("%d", &x);
		add2(s);
		execute();
		break;
	case 3:
		deleteRecord(s);
		execute();
		break;
	case 4:
		printStudents(s);
		execute();
		break;
	case 0:
		exit(0);
	default:
		printf("Enter number only from 0-4.\n");
		execute();
	}
}
/* Function to print the students record */
void printStudents(struct stud s[])
{
	printf("\nList of all Students\n");
	printf("____________________\n");

	for (i = 0; i < n; i++)
	{
		printf("\nName of student : %s\n", s[i].name);
		printf("Student roll number : %d\n", s[i].rollNo);
		printf("Student fees status : %c\n", s[i].fees);
		printf("Student attendence : %0.2f\n", s[i].attend);
	}
}
/* Function to delete Student Record */
void deleteRecord(struct stud s[])
{
	int a = 0;
	printf("\nEnter the roll number of the student to delete data of it: ");
	scanf("%d", &a);

	for (i = 0; i < n + x; i++)
	{
		/* Condition to check the current student roll number is same as the user input roll number */
		if (s[i].rollNo == a)
		{
			/* loop to copy ith record to (i-1)th record */
			for (j = i; j < n; j++)
			{
				strcpy(s[j].name, s[j + 1].name);
				s[j].rollNo = s[j + 1].rollNo;
				s[j].fees = s[j + 1].fees;
				s[j].days = s[j + 1].days;
				s[j].attend = s[j + 1].attend;
				printf("Student Record of 'Roll No. %d' is deleted.\n", a);
			}
			n = n - 1;
		}
	}
}
/* Function to print the record of eligible students */
void eligibleStudents(struct stud s[])
{
	int b = 0;
	printf("\nEligible students -\n");
	printf("_________________\n");

	for (i = 0; i < n + x; i++)
	{
		/* Conditions check the eligibility of the students */
		if (s[i].fees == 'p' || s[i].fees == 'P')
		{
			if (s[i].attend >= 75.00)
			{
				printf("\nStudent Name = %s\n", s[i].name);
				printf("Student Roll no. = %d\n", s[i].rollNo);
				printf("Student fees status = %c\n", s[i].fees);
				printf("Student Attendence = %0.2f\n", s[i].attend);
				b++;
			}
		}
	}
	printf("\nTotal Eligible students are : %d\n", b);
}