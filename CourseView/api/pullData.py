import pandas as pd
from .APIs import getRMPInfo, getCourseInfo

def pullData(courseName, courseNumber):
    df = pd.read_csv("./api/clean.csv")
    df = df[df.apply(lambda row: row.astype(str).str.contains(courseName).any(), axis=1)]
    df = df[df.apply(lambda row: row.astype(str).str.contains(courseNumber).any(), axis=1)]

    #N x 14 tuple
    # [1] = Prof name
    # [2] = Course Desc
    # [3] = A
    # [4] = B
    # [5] = C
    # [6] = D
    # [7] = F
    # [8] = W
    # [9] = I
    # [10] = P
    # [11] = N(P)
    # [12] = RMP overall
    # [13] = RMP Diff
    # [14] = RMP Take Again

    desc = getCourseInfo(courseName, courseNumber)
    desc = desc.replace("\xa0"," ")
    col_list = df[df.columns[12]].values.tolist()

    numProfs = len(col_list)

    storage = [[""]*14 for i in range(numProfs)]

    gradeIndex = ['A', 'B', 'C', 'D', 'F', 'W', 'I', 'P', 'N(P)']
    grades_df = df[gradeIndex]

    for i in range (0,len(col_list)):
        #everything goes in here
        lastname = col_list[i].split(',')[0]
        firstname = col_list[i].split(',')[1]
        firstname = firstname.split(' ')[1]

        fullName = firstname + " " + lastname
        storage[i][0] = fullName
        storage[i][1] = desc
        gradelist = grades_df.values.tolist()
        for j in range (2,11):
            storage[i][j] = gradelist[i][j-2]
        
        scores = getRMPInfo(firstname, lastname)
        for j in range(3):
            storage[i][j+11] = scores[j]
    
    return storage





