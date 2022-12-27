#include <stdio.h>
void main(){
    int r, c, first[3][3], sec[3][3], sum[3][3], i, j;

    printf("Enter the number of rows\n");
    scanf("%d", &r);
    printf("Enter the number of columns\n");
    scanf("%d", &c);

    printf("Enter elements of 1st matrix\n");
    for(i=0; i<r; ++i){
        for(j=0; j<c; ++j){
            scanf("%d", &first[i][j]);
        }
    }
    printf("Enter elements of 2nd matrix\n");
    for(i=0; i<r; ++i){
        for(j=0; j<c; ++j){
            scanf("%d", &sec[i][j]);
        }
    }
    printf("1st matrix is\n");
    for(i=0; i<r; ++i){
        for(j=0; j<c; ++j){
            printf("%d ", first[i][j]);
            if (j==c-1){
            printf("\n");
            }
        }
    }
    printf("2nd matrix is\n");
    for(i=0; i<r; ++i){
        for(j=0; j<c; ++j){
            printf("%d ", sec[i][j]);
            if (j==c-1){
            printf("\n");
            }
        }
    }
    for(i=0; i<r; ++i){
        for (j=0; j<c; ++j){
            sum[i][j] = first[i][j] + sec[i][j];
        }
    }
    printf("Sum of two matrices\n");
    for(i=0; i<r; ++i){
        for(j=0; j<c; ++j){
            printf("%d ", sum[i][j]);
            if (j==c-1){
            printf("\n");
            }
        }
    }
}