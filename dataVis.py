import csv
import matplotlib.pyplot as plt
import pandas as pd

courseName = input("Enter Course Name ")
courseNUM = input("Enter Course NUM ")
fileName = input("Enter file name ")

try:
    #change this out later
    #use he same csv/database, do not need to change everytime
    df = pd.read_csv(fileName)
    header = df.columns
    print(header)

    found = False
    for index, row in df.iterrows():
        if row['Course'] == courseName and str(row['Number']) == courseNUM:
            found = True
            print("The course was found in row ", index + 1)
            print("The row data is: ", row)
            break
    if not found:
        print("The course was not found in the data.")

except FileNotFoundError:
    print("The file '" + fileName + "' could not be found.")
except:
    print("An error occurred while reading the file '" + fileName + "'.")
if found:
    # Extract columns representing the percentage of each grade
    grade_cols = ['A', 'B', 'C', 'D', 'F', 'P', 'F(P)', 'W', 'I']
    grades_df = df[grade_cols].loc[index]

    # Create a list of grades by concatenating values in each column
    grades = [float(grades_df[col].replace('%', '')) for col in grade_cols]
    labels = grade_cols

    # Plot the bar graph
    plt.barh(labels, grades, color='red')
    plt.xlabel("Percentage")
    plt.ylabel("Letter Grades")
    plt.title("Distribution of Grades for " + courseName + " " + courseNUM)
    plt.show()