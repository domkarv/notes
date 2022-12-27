#include <iostream>
using namespace std;

void isPrime(int num){
    int i;
    if(num<1){
        cout<<"Please, Enter the number greater than 1."<<endl;
    }else if(num==1){
        cout<<"1 is nor Prime neither Composite."<<endl;
    }else if(num>1){
        for(i=2; i<num; i++){
            if(num%i==0){
            cout<<"No, It's Not a Prime."<<endl;
            break;
            }
        }
        if(num==i){
            cout<<"Yes, It is Prime"<<endl;
        }
    }
}

int main(){
    
    int n;
    cin>>n;
    isPrime(n);
    
    return 0;
}