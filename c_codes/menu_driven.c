#include <stdio.h>
#include <stdlib.h>
void main(){
    int menu;
    char a;
    system("cls");

    do{
        printf("Welcome to Hotel XYZ\n");
        printf("Choose the menu plz.\n");
        printf("1. Tea\n");
        printf("2. Coffee\n");
        printf("3. Juice\n");
        printf("4. Ice-Cream\n");
        printf("5. Water\n");

        printf("Enter menu number : ");
        scanf("%d", &menu);

        switch(menu){
            case 1:
            printf("You have ordered a Tea.\n");
            break;
            case 2:
            printf("You have ordered a Coffee.\n");
            break;
            case 3:
            printf("You have ordered a Juice.\n");
            break;
            case 4:
            printf("You have ordered a Ice-Cream.\n");
            break;
            case 5:
            printf("You have ordered a Water.\n");
            break;
            default:
            printf("Thank you for coming, Plz come again.\n");
        }

        printf("Would you like to continue? (y/n) : ");
        scanf(" %c", &a);

    }while(a=='y');

}