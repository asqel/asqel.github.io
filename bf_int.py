import os
import sys


cells={0:0}
coms=["[","]",",",".","<",">","+","-"]
def main(text):
    global cells
    ptr=0
    end=False
    i=0
    while i<len(text) and not(end):
        if text[i] in coms:
            if text[i]==".":
                if ptr not in cells.keys():
                    cells[ptr]=0
                print(chr(cells[ptr]))
                i+=1
            elif text[i]==",":
                if ptr not in cells.keys():
                    cells[ptr]=0
                cells[ptr]=input("input:")
                i+=1
            elif text[i]=="<":
                ptr-=1
                i+=1
            elif text[i]==">":
                ptr+=1
                i+=1
            elif text[i]=="+":
                if ptr not in cells.keys():
                    cells[ptr]=0
                cells[ptr]+=1
                i+=1
            elif text[i]=="-":
                if ptr not in cells.keys():
                    cells[ptr]=0
                cells[ptr]-=1
                i+=1
            elif text[i]=="]":
                if ptr not in cells.keys():
                    cells[ptr]=0
                if cells[ptr]!=0:
                    c=0
                    f=i-1
                    l=None
                    while f>0:
                        if text[f]=="]":c+=1;f-=1
                        elif text[f]=="[" and c==0:l=f;break
                        elif text[f]=="[" and c>0:c-=1;f-=1
                        else:
                            f-=1
                    if l==None:
                        print(f"error at {i} ']' was never opened")
                        return "error"
                    i=l
                else:
                    i+=1
            else:
                i+=1
        else:
            i+=1
while True:
    cells={0:0}
    path=input("enter absolute path :")
    if os.path.exists(path):
        if os.path.isdir(path):
            print("error: "+path+" is a folder not a file")
            a=input("enter q to quit or r to restart")
            if a=="q":
                break
            elif a=='r':
                continue
            
    else:
        print("error: "+path+" doesn't exists")
        a=input("enter q to quit or r to restart")
        if a=="q":
            break
        elif a=='r':
            continue

    if main(open(path,"r").read())=="error":
        a=input("enter q to quit or r to restart")
        if a=="q":
            break
        elif a=='r':
            continue
    print('\n\n-------memory---------\n')

    a=""
    c=1
    for i in cells.keys():
        if c==10:
            print("\n")
            c=1
        a+="| #"+str(i)+" '"+chr(cells[i])+"'"+"("+str(cells[i])+")"+"  "

    print(a)

    a=input("enter q to quit or r to restart")
    if a=="q":
        break
    elif a=='r':
        continue
    
    


