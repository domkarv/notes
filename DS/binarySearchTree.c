#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
struct Node
{
  int data;
  struct Node *left;
  struct Node *right;
};

// Declaring Functions
struct Node *createNode(int data);
struct Node *createTree(struct Node *temp, int data);
void inOrderDisplay(struct Node *temp);
void preOrderDisplay(struct Node *temp);
void postOrderDisplay(struct Node *temp);
void insertNode(struct Node *temp, int data);
struct Node *deleteNode(struct Node *root, int data);
struct Node *findMin(struct Node *root);

int main()
{
  struct Node *tree = NULL;
  int n, data;

  do
  {
    printf("\n1. To createTree\n");
    printf("2. InOrderDisplay\n");
    printf("3. PreOrderDisplay\n");
    printf("4. PostOrderDisplay\n");
    printf("5. DeleteNode\n");
    printf("6. InsertNode in between of tree\n");
    printf("0. To exit\n");

    printf("Enter your command: ");
    scanf("%d", &n);

    switch (n)
    {
    case 1:
      printf("Enter Data: ");
      scanf("%d", &data);
      tree = createTree(tree, data);
      break;

    case 2:
      printf("InOrderDisplay: ");
      inOrderDisplay(tree);
      printf("\n");
      break;

    case 3:
      printf("PreOrderDisplay: ");
      preOrderDisplay(tree);
      printf("\n");
      break;

    case 4:
      printf("PostOrderDisplay: ");
      postOrderDisplay(tree);
      printf("\n");
      break;

    case 5:
      printf("Enter data of Node u want to delete: ");
      scanf("%d", &data);
      deleteNode(tree, data);
      break;

    case 6:
      printf("Enter data u want to insert: ");
      scanf("%d", &data);
      insertNode(tree, data);
      break;

    case 0:
      exit(0);

    default:
      printf("Enter correct Command!!!\n");
    }
  } while (n != 0);

  return 0;
}

// Defining Functions
struct Node *createNode(int data)
{
  struct Node *newNode = NULL;
  newNode = (struct Node *)malloc(sizeof(struct Node));
  newNode->left = NULL;
  newNode->data = data;
  newNode->right = NULL;
  return newNode;
}

struct Node *createTree(struct Node *temp, int data)
{
  if (temp == NULL)
  {
    temp = createNode(data);
    return temp;
  }
  else if (temp->data > data)
    temp->left = createTree(temp->left, data);
  else if (temp->data < data)
    temp->right = createTree(temp->right, data);
  return temp;
}

void inOrderDisplay(struct Node *temp)
{
  if (temp == NULL)
    return;

  if (temp != NULL)
  {
    inOrderDisplay(temp->left);
    printf("%d ", temp->data);
    inOrderDisplay(temp->right);
  }
}

void preOrderDisplay(struct Node *temp)
{
  if (temp == NULL)
    return;

  if (temp != NULL)
  {
    printf("%d ", temp->data);
    preOrderDisplay(temp->left);
    preOrderDisplay(temp->right);
  }
}

void postOrderDisplay(struct Node *temp)
{
  if (temp == NULL)
    return;

  if (temp != NULL)
  {
    postOrderDisplay(temp->left);
    postOrderDisplay(temp->right);
    printf("%d ", temp->data);
  }
}

void insertNode(struct Node *temp, int data)
{
  struct Node *prev = NULL;

  if (temp == NULL)
  {
    temp = createNode(data);
    return;
  }

  while (temp != NULL)
  {
    prev = temp;
    if (data == temp->data)
    {
      printf("Can't insert %d, already in BST\n", data);
      return;
    }
    else if (data < temp->data)
      temp = temp->left;
    else if (data > temp->data)
      temp = temp->right;
  }

  if (data < prev->data)
    prev->left = createNode(data);
  else
    prev->right = createNode(data);
}

struct Node *findMin(struct Node *root)
{
  while (root->left != NULL)
    root = root->left;
  return root;
}

struct Node *deleteNode(struct Node *root, int data)
{
  if (root == NULL)
    return root;
  else if (data < root->data)
    root->left = deleteNode(root->left, data);
  else if (data > root->data)
    root->right = deleteNode(root->right, data);
  else
  {
    struct Node *temp;
    // Case 1:  No child
    if (root->left == NULL && root->right == NULL)
    {
      free(root);
      root = NULL;
    }
    // Case 2: One child
    else if (root->left == NULL)
    {
      temp = root;
      root = root->right;
      free(temp);
    }
    else if (root->right == NULL)
    {
      temp = root;
      root = root->left;
      free(temp);
    }
    // case 3: 2 children
    else
    {
      temp = findMin(root->right);                       // we will find smallest data of right subtree of element(that we want to delete)
      root->data = temp->data;                           // replace element that we want to delete with finded smallest data
      root->right = deleteNode(root->right, temp->data); // now delete the finded smallest data from right subtree
    }
  }
  return root;
}