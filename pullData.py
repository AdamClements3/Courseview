import pandas as pd
import APIs as api

#335

df = pd.read_csv("clean.csv")

courseName = "CPSC"
courseNumber = "2150"

df = df[df.apply(lambda row: row.astype(str).str.contains(courseName).any(), axis=1)]
df = df[df.apply(lambda row: row.astype(str).str.contains(courseNumber).any(), axis=1)]


print(api.getCourseInfo(courseName, courseNumber))
col_list = df[df.columns[12]].values.tolist()

gradeIndex = ['A', 'B', 'C', 'D', 'F', 'W', 'I', 'P', 'N(P)']
grades_df = df[gradeIndex]

for i in range (0,len(col_list)):
    lastname = col_list[i].split(',')[0]
    firstname = col_list[i].split(',')[1]
    firstname = firstname.split(' ')[1]

    scores = api.getRMPInfo(firstname, lastname)

print(df)
print(grades_df)


