clear; close; clc;
%Data Manipulation for CU Courseview

data = readtable("GradeDistributions/real.csv");

data = table2cell(data);

%if column 1 in a given row is blank, take column 18 from that row and
%append it to the end of the previous row

%if data(i,1) is an empty cell, take data(i,17) and attach it to
%data(i-1,17)

for i=1:4695
    if data(i,1) == ""
        data(i-1,17) = cellstr(strcat(data{i-1,17}, " ", data{i,17}));
    end
end

%remove excess rows

%find all entries of 0x0 char arr
%invert the vector
%data = data(inverted vector)

emptyCells = cellfun(@isempty,data(:,1));

removeIndex = strcmp(data(:,1),'');
data(removeIndex,:) = [];

%remove all rows where data(:,1) has more than 4 characters

removeIndex = cellfun('length',data(:,1)) > 4;
data(removeIndex,:) = [];

removeIndex = [3 14 15 16 18];
data(:,removeIndex) = [];

%if column 1, 2, and 13 are the same as another row, average values in
%columns 4-12

%{
% Sample data
data = {'John', 5; 'Jane', 3; 'John', 8; 'Jane', 2};

% Get unique values in column 1
unique_col1 = unique(data(:,1));

% Initialize a cell array to store the result
result = cell(length(unique_col1),1);

% Loop through unique values in column 1
for i = 1:length(unique_col1)
    % Get indices of current unique value in column 1
    indices = strcmp(data(:,1), unique_col1(i));
    
    % Group values in current unique value into a cell array
    result{i} = data(indices,:);
end
%}
data(:,1) = cellstr(strcat(data(:,1), string(data(:,2)), string(data(:,13))));
data(:,2) = [];
data(:,12) = [];

uq = unique(data(:,1));
final = cell(length(uq),1);
for i=1:length(uq)
    ind = strcmp(data(:,1), uq(i));
    final{i} = data(ind,:);
end

gradeList = cell(length(final),1);
finalData = cell(2082,11);
overall = cell(1,11);
for i=1:length(final)
    overall(1) = final{i}(1);
    overall(2) = final{i}(2);
    grades = final{i}(:,3:11);
    grades = cellfun(@(x) x(1:end-1), grades, 'UniformOutput', false);
    for j = 1:9
        overall(j+2) = cellstr(strcat(num2str(mean(str2double(grades(:,j)))), "%"));
    end
    finalData(i,:) = overall;
end


%{
result = cell(3,3);
for i = 1:3
    [first, remain] = strtok(data{i}, '0123456789');
    [num, last] = strtok(remain, '0123456789');
    result(i,:) = {first, num, last};
end
%}

splitData = finalData(:,1);
result = cell(2082,3);
for i=1:2082
    [first, remain] = strtok(splitData{i}, '0123456789');
    [num, last] = strtok(remain, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    result(i,:) = {first, num, last};
end

finalData(:,1) = result(:,1);
finalData(:,12) = result(:,2);
finalData(:,13) = result(:,3);

writecell(finalData,"GradeDistributions/clean.csv")


