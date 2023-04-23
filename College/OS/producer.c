#include <stdio.h>

int buffer[11];
int i = 0, n, empty = 5, mutex = 1, full = 0;
char ch;

void wait(int *s)
{
    *s = *s - 1;
}

void signal(int *s)
{
    *s = *s + 1;
}

void producer()
{
    wait(&empty);
    wait(&mutex);
    printf("Insert the data: ");
    scanf("%d", &buffer[i]);
    i++;
    signal(&mutex);
    signal(&full);
    printf("%d", empty);
}
void consumer()
{
    // need to wait until full > 0 and then decrement the 'full'
    wait(&full);
    // To acquire the lock
    wait(&mutex);
    printf("remove the data\n");
    i--;
    /* Here we will perform the remove operation in a particular slot */
    // To release the lock
    signal(&mutex);

    // increment of 'empty'
    signal(&empty);
    printf("%d", empty);
}
int main()
{
    do
    {
        printf("\n\n1.Producer\n2.Consumer\n3.Exit\n");
        printf("\nEnter your choice: ");
        scanf("%d", &n);
        switch (n)
        {
        case 1:
            if ((mutex == 1) && (empty != 0))
                producer();
            else
                printf("buffer is full");
            break;

        case 2:
            if ((mutex == 1) && (full != 0))
                consumer();
            else
                printf("buffer is empty");
            break;

        case 3:
            break;
        }

    } while (n != 3);
}
