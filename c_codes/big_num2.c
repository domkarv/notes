#include <stdio.h>
#include <stdlib.h>
void main(){
    int a, b, c, d;
    system("cls");
    printf("Enter four numbers --\n");
    scanf("%d%d%d%d", &a, &b, &c, &d);

    if(a>b && a>c && a>d){
        printf("%d is GREATER", a);
    } else if(b>a && b>c && b>d){
        printf("%d is GREATER", b);
    } else if(c>a && c>b && c>d){
        printf("%d is GREATER", c);
    } else if(d>a && d>b && d>c){
        printf("%d is GREATER", d);
    }
}