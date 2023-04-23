#include <stdio.h>
#include <unistd.h>
int main()
{
  pid_t pid;

  pid = fork();

  if (pid == 0)
  {
    printf("\n After fork");
    printf("\nChild process id: %d\n", getpid());
  }
  else
  {
    printf("\n Before fork");
    printf("\nParent process id: %d\n", getpid());
    printf("\nParent executed successfully\n");
  }
  return 0;
}